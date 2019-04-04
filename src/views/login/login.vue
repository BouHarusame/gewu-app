<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-content-item">
        <span class="login-content-label">用户名：</span><input class="login-content-value" type="text" placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="login-content-item">
        <span class="login-content-label">密码：</span><input type="password"  class="login-content-value" placeholder="请输入密码" v-model="passWord">
      </div>
      <div class="login-content-item">
        <button class="login-content-btn" @click="toLoginIn">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    toLoginIn () {
      let pwd = md5(`${this.userName}USER${this.passWord}PASSWORD`)
      let options = {
        'userid': this.userName,
        'password': pwd
      }
      if (this.userName && pwd) {
        this.$post('/login', options)
          .then(res => {
            console.log(res)
            if (res.success) {
              sessionStorage.setItem('auth-token', res.data.token)
              sessionStorage.setItem('username', res.data.username)
              this.$router.push({ name: 'task' })
            } else {
              Toast({
                message: res.code,
                position: 'center',
                duration: 3000
              })
            }
          })
          .catch(err => {
            Toast({
              message: err,
              position: 'center',
              duration: 3000
            })
          })
      } else {
        Toast({
          message: '请输入用户名和密码',
          position: 'center',
          duration: 3000
        })
      }
    }
  },
  components: {
    Toast
  }
}
</script>
<style lang="stylus" scoped>
.login-wrapper
  width 100%
  height 100vh
  background #f4f4f4 url('../../assets/bg.png')no-repeat center/100%
  display flex
  align-items center
  justify-content center
  .login-content
    width 15rem
    height 8rem
    background rgba(255,255,255,0.8)
    padding 1rem
    .login-content-item
      margin 1rem auto
      display flex
      align-items center
      .login-content-label
        width 2rem
        font-size 0.5rem
        color #000000
        text-align right
      .login-content-value
        font-size 0.5rem
        color #000000
        flex 1
        height 1rem;
        border 0
        outline 0
        border-bottom: 1px solid #999
        text-indent 10px
        background transparent
        &::placeholder
          font-size 0.28rem
      .login-content-btn
        dispaly block
        width 13rem
        height 1.6rem
        line-height 1.6rem
        border-radius 0.2rem
        background rgb(38, 162, 255)
        font-size 0.6rem
        color #fff
        border 0
        margin 0 auto
</style>
