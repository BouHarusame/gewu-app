<template>
  <div class="tab-bar">
    <div class="tab-item" @click="handleToTask">
      <div class="icon"><img src="../assets/u8.png" alt=""></div>
      <div class="text">任务</div>
    </div>
    <div class="tab-item" @click="handleToMine">
      <div class="icon"><img src="../assets/u9.png" alt=""></div>
      <div class="text">我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleToTask () {
      this.$router.push({ name: 'task' })
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
      img
        display block
        width 100%
        height 100%
    .text
      font-size 0.6rem
      margin-left 0.2rem
    &:nth-child(1)
      border-right 1px solid #e1e1e1
</style>
