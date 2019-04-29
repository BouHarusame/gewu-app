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
              <h4>{{ handleToFormat(detailData.ddsj) }}</h4>
              <p>调到时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('ddsj', 'value1','picker1')">设定</div>
          <!-- <div class='item-right' @click="open('picker1')" v-if='setting1'>设定</div> -->
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
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
              <h4>{{ handleToFormat(detailData.dcsj) }}</h4>
              <p>调出时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('dcsj', 'value2','picker2')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
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
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>核检时间（分钟）</p>
              <input v-model="detailData.hjsj"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class="flex">
                <p>核检说明</p>
                <input v-model="detailData.hjsm"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.x1sfhwcsj) }}</h4>
              <p>卸一设防护完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('x1sfhwcsj', 'value3','picker3')" >设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
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
              <h4>{{ handleToFormat(detailData.x2sfhwcsj) }}</h4>
              <p>卸二设防护完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('x2sfhwcsj', 'value4','picker4')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
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
              <p>卸一撤除防护完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('x1ccfhwcsj', 'value5','picker5')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker5'
            v-model='value5'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange5'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.x2ccfhwcsj) }}</h4>
              <p>卸二撤除防护完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('x2ccfhwcsj', 'value6','picker6')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker6'
            v-model='value6'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange6'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.yjxcwcsj) }}</h4>
              <p>预计卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('yjxcwcsj', 'value7','picker7')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker7'
            v-model='value7'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange7'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.ggccwcsj) }}</h4>
              <p>更改预计卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('ggccwcsj', 'value8','picker8')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker8'
            v-model='value8'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm='handleChange8'>
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.sjxcwcsj) }}</h4>
              <p>实际卸车完成时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('sjxcwcsj','value9','picker9')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker9'
            v-model='value9'
            :closeOnClickModal='false'
            year-format="{value}"
            month-format="{value}"
            date-format="{value}"
            hour-format="{value}"
            minute-format="{value}"
            second-format="{value}"
            type="datetime"
            @visible-change='handleVisibleChange'
            @confirm='handleChange9'>
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
        ddsj: '',
        dcsj: '',
        hjsj: '',
        hjsm: '',
        x1sfhwcsj: '',
        x2sfhwcsj: '',
        yjxcwcsj: '',
        ggccwcsj: '',
        sjxcwcsj: ''
      },
      detail: {},
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: ''
    }
  },
  computed: {
    setting1: function () {
      if (this.detailData.x1sfhwcsj) {
        return false
      } else {
        return true
      }
    },
    setting2: function () {
      if (this.detailData.yjxcwcsj) {
        return false
      } else {
        return true
      }
    },
    setting3: function () {
      if (this.detailData.ggxcwcsj) {
        return false
      } else {
        return true
      }
    },
    setting4: function () {
      if (this.detailData.sjxcwcsj) {
        return false
      } else {
        return true
      }
    },
    setting5: function () {
      if (this.detailData.x1ccfhwcsj) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    open (selectedValue, dateVal, picker) {
      if (this.detailData[selectedValue]) {
        this[dateVal] = new Date(this.detailData[selectedValue])
      } else {
        this[dateVal] = new Date()
      }
      this.$refs[picker].open()
    },
    handleVisibleChange (isVisible) {
      console.log('弹窗是否展示:', isVisible)
    },
    handleChange (key, value) {
      this.$set(this.detailData, key, value.getTime())
    },
    handleChange1 (value) {
      this.handleChange('ddsj', value)
      // this.setting1 = false
    },
    handleChange2 (value) {
      this.handleChange('dcsj', value)
      // this.setting2 = false
    },
    handleChange3 (value) {
      this.handleChange('x1sfhwcsj', value)
      // this.setting3 = false
    },
    handleChange4 (value) {
      this.handleChange('x2sfhwcsj', value)
      // this.setting4 = false
    },
    handleChange5 (value) {
      this.handleChange('x1ccfhwcsj', value)
      // this.setting5 = false
    },
    handleChange6 (value) {
      this.handleChange('x2ccfhwcsj', value)
    },
    handleChange7 (value) {
      this.handleChange('yjxcwcsj', value)
    },
    handleChange8 (value) {
      this.handleChange('ggccwcsj', value)
    },
    handleChange9 (value) {
      this.handleChange('sjxcwcsj', value)
    },
    handleToFormat (val) {
      // console.log(val)
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
          ddsj: this.detailData.ddsj,
          dcsj: this.detailData.dcsj,
          hjsj: this.detailData.hjsj,
          hjsm: this.detailData.hjsm,
          x1sfhwcsj: this.detailData.x1sfhwcsj,
          x2sfhwcsj: this.detailData.x2sfhwcsj,
          yjxcwcsj: this.detailData.yjxcwcsj,
          ggccwcsj: this.detailData.ggccwcsj,
          sjxcwcsj: this.detailData.sjxcwcsj
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
    // console.log(this.detailData)
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
          .flex
            display flex
            align-items center
            justify-content space-between
            p
              width 4rem
            input
              width 8rem
              border 1px solid #999
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
