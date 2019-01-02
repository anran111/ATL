import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import api from '@/api';
import { isvalidUsername } from '@/utils/validate'
import { mapActions } from "vuex";
import { setToken } from '@/utils/auth'
import store from '@/store'

export default {
  name: 'Login',
  components: {
    NavMenu,Card
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('ユーザーIDを正しく入力してください！'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('パースワードを正しく入力してください！'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin@163.com',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      inputDisabled: '',
      userNo: ''
    }
  },
  methods: {
    ...mapActions(['setUserNo']),
    ...mapActions(['setUserName']),
    ...mapActions(['setStatus']),
    handleLogin() {
      api.login({userId: this.loginForm.username, password: 
        this.loginForm.password}).then(res => { 
          if (res.statusCode == '200') {
            this.setUserNo({userNo:res.userNo})
            this.setUserName({userName:res.userName})
            this.setStatus({status:'login'})
            this.$router.push({
              path:'/tab1',
              query:{
              }
            });
          } else {
            this.$message({
              message: 'ユーザー名とパスワードを正しく入力してください。',
              type: 'error'
            });
            
          }
      })
    },
    handleRegister() {
      this.$router.push('/register');
    }
  }
}