<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="continue">
      <div class="outsilde-box box-sizing">
          <div class="user-face-box box-sizing"></div>
          <h3 class="website-name">影谜</h3>
          <p class="page-desc">骚年，组织需要你的加入！</p>
          <div class="insilde-box">
            <lb-input placeholder="用户名"
                      id="username"
                      name="username"
                      type="text"
                      class="margin-bottom-20"
                      :required='true'
                      requiredMessage="请输入用户名"
                      :rangeLen="[6,12]"
                      rangeMessage="6~12位用户名"
                      ref="username"
                      v-on:setValue="getInputValue"
            ></lb-input>
            <lb-input placeholder="密码"
                      id="userpwd"
                      name="userpwd"
                      type="password"
                      class="margin-bottom-20"
                      :required="true"
                      requiredMessage="请输入密码"
                      ref="userpwd"
                      v-on:setValue="getInputValue"
            ></lb-input>
            <lb-input placeholder="重复密码"
                      type="password"
                      class="margin-bottom-20"
                      name="reuserpwd"
                      id="reuserpwd"
                      ref="reuserpwd"
                      :required="true"
                      requiredMessage="请重复密码"
                      :equalTo="userpwd"
            ></lb-input>

            <button class="btn" tabindex="4" v-on:click="doRegister" onselectstart="return false">注册</button>
            <p class="bottom-p">已有账号，
                <router-link to="/login">去登录</router-link>
            </p>
          </div>
      </div>
  </div>
</template>
<script>
import LbInput from '../../components/LbInput.vue'
import { mapState } from 'vuex'

export default {
  name: 'register',
  components: {
    LbInput
  },
  data () {
    return {
      username: '',
      userpwd: '',
      reuserpwd: ''
    }
  },
  computed: mapState([
    'count'
  ]),
  methods: {
    getInputValue () {
      let refarry = this.$refs
      for (let item in refarry) {
        this[item] = this.$refs[item].currentValue
      }
    },
    doRegister () {
      if (this.validateForm()) {
        let $this = this
        let data = 'username=' + $this.username
        this.$http.post('/register/submit',
          data
        ).then(function (result) {
          console.log(result)
        }).catch(function (e) {
          console.log('访问异常:' + e)
        })
      } else {
        console.log('验证不通过')
      }
      /*    */
    },
    validateForm () {
      let refarry = this.$refs
      for (let item in refarry) {
        if (!refarry[item].validate()) {
          return false
        }
      }
      return true
    }
  }
}
</script>
<style scoped>
@import "../../assets/login_regist.css";
</style>
