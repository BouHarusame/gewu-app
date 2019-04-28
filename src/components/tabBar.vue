<template>
  <div class="tab-bar">
    <div class="tab-item" :class="current === 0 ? 'active': ''" @click="handleToUnLoadTask">
      <div class="icon"><i class="fa fa-train"></i></div>
      <div class="text">卸车登记</div>
    </div>
    <div class="tab-item" :class="current === 1 ? 'active': ''" @click="handleToTruckTask">
      <div class="icon"><i class="fa fa-subway"></i></div>
      <div class="text">装车登记</div>
    </div>
    <div class="tab-item" :class="current === 2 ? 'active': ''" @click="handleToMine">
      <div class="icon"><i class="fa fa-user-circle-o"></i></div>
      <div class="text">我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    current: Number
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleToUnLoadTask () {
      this.$router.push({ name: 'task' })
    },
    handleToTruckTask () {
      this.$router.push({ name: 'truckTask' })
    },
    handleToMine () {
      this.$router.push({ name: 'mine' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.tab-bar
  width 15rem
  height 1.6rem
  background #fff
  position fixed
  bottom 0rem
  left 0
  z-index 99
  display flex
  justify-content space-between
  align-items center
  // border-top 1px solid #999
  .tab-item
    flex 1
    display flex
    justify-content center
    align-items center
    height 1.6rem
    .icon
      width 1rem
      height 1rem
      .fa
        display block
        width 100%
        height 100%
        font-size 0.6rem
        text-align center
        padding 0.2rem 0
    .text
      font-size 0.6rem
      margin-left 0.2rem
    &:nth-child(n+2)
      border-left 1px solid #e1e1e1
  .active
    background: #26a2ff
    color: #ffffff
</style>
