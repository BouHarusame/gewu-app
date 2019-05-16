<template>
  <div class="task">
    <div class="task-title">任务</div>
    <div class="task-search">
      <div class="task-search-content">
        <div class="task-search-box"><span class="icon"></span><input type="text" v-model="searchValue" @input="handleSearch" class="task-search-value" placeholder="搜索"/></div>
      </div>
      <span class="text" @click="handleCancelSearch">取消</span>
    </div>
    <div class="page-loadmore-wrapper" ref="wrapper">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="task-content">
          <ul>
            <li class="task-content-item" v-for="item in listData" :key="item.itemid">
              <div class="item-left">
                <div class="item-icon">
                </div>
                <div class="item-text">
                  <h4>{{ item.cpc.substring(0,10) }}</h4>
                  <p>{{ item.cpc.substring(0,10) }} 的装车单，请登记处理！</p>
                </div>
              </div>
              <div class="item-right" @click="handleClickDetail(item)">处理</div>
            </li>
          </ul>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
    <tab-bar :current=2></tab-bar>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import tabBar from '../../components/tabBar'
import { formatDate, deepClone } from '../../utils/utils.js'
export default {
  data () {
    return {
      searchFlag: true,
      listData: [],
      listOldData: [],
      searchValue: '',
      copyListData: [],
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      pageNo: 1,
      pageSize: 20,
      total: 0
    }
  },
  methods: {
    getListData (data = {}) {
      this.$post('/zcgl/zcjd/query', data)
        .then(res => {
          if (res.success) {
            if (res.data && res.data.records) {
              this.listData = res.data.records
              this.total = res.data.total
              this.listOldData = deepClone(this.listData)
              this.copyListData.push(...deepClone(this.listData))
            }
          } else {
            Toast({
              message: res.code,
              position: 'center',
              duration: 3000
            })
          }
        })
    },
    handleClickDetail (item) {
      this.$router.push({name: 'truckProgressDetail', params: { id: item.id, detail: item }})
      // this.$router.push({path: 'taskDetail', query: { id: item.id, detail: item }})
    },
    handleFormatDate (val) {
      let date = new Date(val)
      // date.toLocaleDateString()
      return formatDate(date, 'yyyy-MM-dd')
    },
    handleSearch () {
      // console.log(111)
      this.debounce(this.search(), 200)
    },
    search () {
      let reg = new RegExp(this.searchValue, 'i')
      this.listData = this.listOldData.filter(item => {
        if (item.cpc.match(reg)) {
          // console.log(item)
          return item
        }
      })
    },
    debounce (method, delay) {
      let timer = null
      return function () {
        let self = this
        let args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
          method.apply(self, args)
        }, delay)
      }
    },
    handleCancelSearch () {
      this.listData = this.copyListData
      this.listOldData = deepClone(this.listData)
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      setTimeout(() => {
        if ((this.pageNo * this.pageSize) < this.total) {
          // console.log('allLoaded false')
          let options = {
            pageNo: this.pageNo++,
            pageSize: this.pageSize
          }
          this.getListData(options)
        } else {
          // console.log('allLoaded true')
          this.allLoaded = true
        }
        // this.$refs.loadmore.onBottomLoaded()
      }, 2000)
    }
  },
  created () {
    this.getListData()
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
  },
  components: {
    tabBar,
    Toast
  }
}
</script>
<style lang="stylus" scoped>
.task
  width 100%
  min-height 100vh
  padding-bottom 1.6rem
  box-sizing border-box
  position relative
  background #f4f4f4
  .task-title
    display flex
    align-items center
    justify-content center
    padding 0.4rem 0
    background #b3c0d1
    color #fff
    font-size 0.6rem
    font-weight bold
  .task-search
    display flex
    align-items center
    padding 0.4rem 0.3rem
    text-align center
    background #e1e1e1
    color #000
    .task-search-content
      width 14.4rem
      height 1.4rem
      // border 1.4px solid #424242
      background #fff
      border-radius 0.2rem
      display flex
      align-items center
      justify-content center
      .task-search-box
        flex 1
        display flex
        align-items center
        justify-content center
        .icon
          display block
          width 1rem
          height 1rem
          margin-left 0.2rem
          background url('../../assets/u15.png') no-repeat 50%/100%
        .task-search-value
          display block
          flex 1
          height 1rem
          line-height 1rem
          margin-left 0.2rem
          font-size 0.6rem
          border 0
          outline 0
          &::placeholder
            line-height 0.8rem
    .text
      display block
      font-size 0.6rem
      margin-left 0.2rem
      width 2rem
      height 1.4rem
      line-height 1.4rem
      color #fbb03b
  .task-content
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
    .task-content-item
      width 13.8rem
      height 1.6rem
      display flex
      align-items center
      justify-content space-between
      .item-left
        flex 1
        display flex
        align-items center
        .item-icon
          width 1.2rem
          height 1rem
          background url('../../assets/u11.png') no-repeat center/100%
        .item-text
          flex 1
          margin-left 0.2rem
          h4
            font-size 0.6rem
            line-height 0.5rem
            margin-bottom 0.3rem
          p
            font-size 0.4rem
            line-height 0.4rem
      .item-right
        width 2.4rem
        height 1.6rem
        border-radius 0.2rem
        background rgb(38, 162, 255)
        color #000000
        font-size 0.65em
        text-align center
        line-height 1.6rem
      &:nth-child(n+2)
        border-top 1px solid rgba(210, 210, 210, 1)
  @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      @descendent wrapper {
        overflow: scroll;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
