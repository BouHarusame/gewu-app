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
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>调机取送车用时</p>
              <input v-model="detailData.tjqsys"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.kcgbks) }}</h4>
              <p>空车过磅开始时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('kcgbks', 'value1','picker1')">设定</div>
          <!-- <div class='item-right' @click="open('picker1')" v-if='setting1'>设定</div> -->
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker1'
            v-model='value1'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value1,'kcgbks')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.kcgbjs) }}</h4>
              <p>空车过磅结束时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('kcgbjs', 'value2','picker2')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker2'
            v-model='value2'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value2, 'kcgbjs')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>空车过磅用时</p>
              <input v-model="detailData.kcgbys"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.kcsfsj) }}</h4>
              <p>空车设防时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('kcsfsj', 'value3','picker3')" >设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker3'
            v-model='value3'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value3, 'kcsfsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>空车设防用时</p>
              <input v-model="detailData.kcsfys"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.pjzwsj) }}</h4>
              <p>盘卷装完时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('pjzwsj', 'value4','picker4')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker4'
            v-model='value4'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value4, 'pjzwsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.bczwsj) }}</h4>
              <p>棒材装完时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('bczwsj', 'value5','picker5')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker5'
            v-model='value5'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value5, 'bczwsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.gpzwsj) }}</h4>
              <p>钢坯装完时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('gpzwsj', 'value6','picker6')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker6'
            v-model='value6'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange6(value6, 'gpzwsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>全部装完用时</p>
              <input v-model="detailData.qbzwys"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.tzycsj) }}</h4>
              <p>通知验车时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('tzycsj', 'value7','picker7')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker7'
            v-model='value7'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value7, 'tzycsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.zccfsj) }}</h4>
              <p>重车撤防时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('zccfsj', 'value8','picker8')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker8'
            v-model='value8'
            :closeOnClickModal='false'
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value8, 'zccfsj')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>重车验车用时</p>
              <input v-model="detailData.zcycys"  />
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
              <div class='flex'>
                <p>调机准备用时</p>
              <input v-model="detailData.tjzbys"  />
              </div>
            </div>
          </div>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.zcgbks) }}</h4>
              <p>重车过磅开始时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('zcgbks','value9','picker9')">设定</div>
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
            @confirm="handleChange(value9, 'zcgbks')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <h4>{{ handleToFormat(detailData.zcgbjs) }}</h4>
              <p>重车过磅结束时间</p>
            </div>
          </div>
          <div class='item-right' @click="open('zcgbjs','value10','picker10')">设定</div>
          <!-- <div class='item-right1' v-else>设定</div> -->
          <mt-datetime-picker @touchmove.prevent
            ref='picker10'
            v-model='value10'
            :closeOnClickModal='false'
            year-format="{value}"
            month-format="{value}"
            date-format="{value}"
            hour-format="{value}"
            minute-format="{value}"
            second-format="{value}"
            type="datetime"
            @visible-change='handleVisibleChange'
            @confirm="handleChange(value10, 'zcgbjs')">
          </mt-datetime-picker>
        </li>
        <li class='task-detail-item'>
          <div class='item-left'>
            <div class='item-icon'>
            </div>
            <div class='item-text'>
              <!-- <h4>{{ handleToFormat(detailData.ggxcwcsj) }}</h4> -->
              <div class='flex'>
                <p>重车过磅用时</p>
              <input v-model="detailData.zcgbys"  />
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
              <div class='flex'>
                <p>棒材单车用时</p>
              <input v-model="detailData.bcdcys"  />
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
              <div class='flex'>
                <p>钢坯单车用时</p>
              <input v-model="detailData.gbdcys"  />
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
              <div class='flex'>
                <p>整轮单车用时</p>
              <input v-model="detailData.zldcys"  />
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
              <div class='flex'>
                <p>盘卷车数</p>
              <input v-model="detailData.pjcs"  />
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
              <div class='flex'>
                <p>螺纹车数</p>
              <input v-model="detailData.lwcs"  />
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
              <div class='flex'>
                <p>钢坯车数</p>
              <input v-model="detailData.gpcs"  />
              </div>
            </div>
          </div>
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
        tjqsys: '',
        kcgbks: '',
        kcgbjs: '',
        kcgbys: '',
        kcsfsj: '',
        kcsfys: '',
        pjzwsj: '',
        bczwsj: '',
        gpzwsj: '',
        qbzwys: '',
        tzycsj: '',
        zccfsj: '',
        zcycys: '',
        tjzbys: '',
        zcgbks: '',
        zcgbjs: '',
        zcgbys: '',
        bcdcys: '',
        gbdcys: '',
        zldcys: '',
        pjcs: '',
        lwcs: '',
        gpcs: ''
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
      value9: '',
      value10: ''
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
    handleChange (value, key) {
      // console.log(value, key)
      this.$set(this.detailData, key, value.getTime())
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
          tjqsys: this.detailData.tjqsys,
          kcgbks: this.detailData.kcgbks,
          kcgbjs: this.detailData.kcgbjs,
          kcgbys: this.detailData.kcgbys,
          kcsfsj: this.detailData.kcsfsj,
          kcsfys: this.detailData.kcsfys,
          pjzwsj: this.detailData.pjzwsj,
          bczwsj: this.detailData.bczwsj,
          gpzwsj: this.detailData.gpzwsj,
          qbzwys: this.detailData.qbzwys,
          tzycsj: this.detailData.tzycsj,
          zccfsj: this.detailData.zccfsj,
          zcycys: this.detailData.zcycys,
          tjzbys: this.detailData.tjzbys,
          zcgbks: this.detailData.zcgbks,
          zcgbjs: this.detailData.zcgbjs,
          zcgbys: this.detailData.zcgbys,
          bcdcys: this.detailData.bcdcys,
          gbdcys: this.detailData.gbdcys,
          zldcys: this.detailData.zldcys,
          pjcs: this.detailData.pjcs,
          lwcs: this.detailData.lwcs,
          gpcs: this.detailData.gpcs
        },
        'details': []
      }
      this.$post('/zcgl/zcjd/updateApp', query)
        .then(res => {
          if (res.success) {
            Toast({
              message: '您已成功设定',
              position: 'center',
              duration: 3000
            })
          } else {
            Toast({
              message: res.message || '设定失败',
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
