<template>
  <div class="mine-wrapper">
    <div class="userInfo">
      <div class="avatar"></div>
      <div class="userName">{{userName}}</div>
    </div>
    <tab-bar :current=2></tab-bar>
  </div>
</template>
<script>
import tabBar from '../../components/tabBar'
export default {
  data () {
    return {
      userName: ''
    }
  },
  created () {
    this.userName = sessionStorage.getItem('username') || '用户名'
  },
  components: {
    tabBar
  }
}
</script>
<style lang="stylus" scoped>
.mine-wrapper
  width 100%
  height 100vh
  background #f4f4f4
  display flex
  justify-content center
  align-items center
  position relative
  .userInfo
    width 14rem
    height 6rem
    display flex
    align-items center
    justify-content center
    .avatar
      width 2rem
      height 2rem
      background url('../../assets/avatar.jpg')no-repeat center/100%
      border-radius 50%
    .userName
      margin-left 1rem
      font-size 0.6rem
</style>
