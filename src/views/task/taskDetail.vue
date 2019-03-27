<template>
  <div class='task-detail'>
    <div class='task-detail-title'>
      {{detailData.cph}}
      <div class='goback' @click='handleGoBack'>&lt; 返回</div>
    </div>
    <div class='task-detail-content'>
      <ul>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.x1sfhwcsj) }}</h4>
              <p>设防完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('picker1')" v-if='setting1'>设定</div>
          <div class='item-right1' v-else>设定</div>
          <mt-datetime-picker
            ref='picker1'
            v-model='value1'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange1'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.yjxcwcsj) }}</h4>
              <p>预计装/卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('picker2')" v-if='setting2'>设定</div>
          <div class='item-right1' v-else>设定</div>
          <mt-datetime-picker
            ref='picker2'
            v-model='value2'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange2'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4>
              <p>预计装/卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('picker3')" v-if='setting3'>设定</div>
          <div class='item-right1' v-else>设定</div>
          <mt-datetime-picker
            ref='picker3'
            v-model='value3'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange3'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.sjxcwcsj) }}</h4>
              <p>实际装/卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('picker4')" v-if='setting4'>设定</div>
          <div class='item-right1' v-else>设定</div>
          <mt-datetime-picker
            ref='picker4'
            v-model='value4'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange4'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.x1ccfhwcsj) }}</h4>
              <p>撤除防护时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('picker5')" v-if='setting5'>设定</div>
          <div class='item-right1' v-else>设定</div>
          <mt-datetime-picker
            ref='picker5'
            v-model='value5'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange5'>
          </mt-datetime-picker>
        </li>
      </ul>
    </div>
    <div class='task-btn' @click='handleClickConfirm'>确定</div>
  </div>
</template>
<script>
import { DatetimePicker, Toast } from 'mint-ui'
import { formatDate, deepClone } from '../../utils/utils.js'
export default {
  data () {
    return {
      detailData: {
        x1ccfhwcsj: '',
        sjxcwcsj: '',
        ggxcwcsj: '',
        yjxcwcsj: '',
        x1sfhwcsj: ''
      },
      setting1: true,
      setting2: true,
      setting3: true,
      setting4: true,
      setting5: true,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
    }
  },
  methods: {
    open (picker) {
      this.$refs[picker].open()
    },
    handleVisibleChange (isVisible) {
      console.log('弹窗是否展示:', isVisible)
    },
    handleChange (key, value) {
      this.$set(this.detailData, key, value.getTime())
    },
    handleChange1 (value) {
      this.handleChange('x1sfhwcsj', value)
      this.setting1 = false
    },
    handleChange2 (value) {
      this.handleChange('yjxcwcsj', value)
      this.setting2 = false
    },
    handleChange3 (value) {
      this.handleChange('ggxcwcsj', value)
      this.setting3 = false
    },
    handleChange4 (value) {
      this.handleChange('sjxcwcsj', value)
      this.setting4 = false
    },
    handleChange5 (value) {
      this.handleChange('x1ccfhwcsj', value)
      this.setting5 = false
    },
    handleToFormat (val) {
      console.log(val)
      if (!val) {
        return '未设定'
      } else {
        let date = new Date(val)
        return formatDate(date, 'yyyy-MM-dd hh : mm : ss')
      }
    },
    handleGoBack () {
      this.$router.go(-1)
    },
    handleClickConfirm () {
      let query = {
        'master': {
          id: this.detailData.id,
          flag: 'U',
          x1ccfhwcsj: this.detailData.x1ccfhwcsj,
          sjxcwcsj: this.detailData.sjxcwcsj,
          ggxcwcsj: this.detailData.ggxcwcsj,
          yjxcwcsj: this.detailData.yjxcwcsj,
          x1sfhwcsj: this.detailData.x1sfhwcsj
        },
        'details': []
      }
      this.$post('/dhcl/xcjddj/update', query)
        .then(res => {
          if (res.success) {
            Toast({
              message: '您已成功设定',
              position: 'center',
              duration: 3000
            })
          } else {
            Toast({
              message: res.code,
              position: 'center',
              duration: 3000
            })
          }
        })
    }
  },
  created () {
    this.detailData = deepClone(this.$route.params.detail)
    console.log(this.detailData)
  },
  components: {
    DatetimePicker
  }
}
</script>
<style lang='stylus' scoped>
.task-detail
  width: 100%
  height: 100vh
  background #f4f4f4
  .task-detail-title
    width 100%
    height 1.6rem
    background #b3c0d1
    color #ffffff
    font-size 0.6rem
    font-weight bold
    text-align center
    line-height 1.6rem
    position relative
    .goback
      width 2.4rem
      height 1.6rem
      font-size 0.6rem
      font-weight bold
      position absolute
      top 0
      left 0.3rem
  .task-detail-content
    width 100%
    padding 0.5rem 0
    box-sizing border-box
    display flex
    align-items center
    justify-content center
    ul
      background #fff
      padding 0.3rem
      width 14.4rem
      box-sizing border-box
    .task-detail-item
      width 13.8rem
      height 1.8rem
      display flex
      justify-content space-between
      align-items center
      .item-left
        flex 1
        display flex
        align-items center
        .item-icon
          width 1rem
          height 1rem
          background url('../../assets/u42.png') no-repeat center/100%
        .item-text
          flex 1
          margin-left 0.3rem
          h4
            font-size 0.6rem
            margin-bottom 0.2rem
          p
            font-size 0.5rem
      .item-right
        width 3rem
        height 1.6rem
        border-radius 0.2rem
        background rgb(83, 168, 255)
        color #fff
        font-size 0.65em
        text-align center
        line-height 1.6rem
      .item-right1
        width 3rem
        height 1.6rem
        border-radius 0.2rem
        background #f4f4f5
        color #909399
        font-size 0.65em
        text-align center
        line-height 1.6rem
      &:nth-child(n+2)
        border-top 1px solid #c2c2c2
  .task-btn
    dispaly block
    width 14.4rem
    height 2rem
    border-radius 0.2rem
    background #409eff
    font-size 0.9rem
    line-height 2rem
    text-align center
    color #fff
    border 0
    margin 1rem auto
</style>
