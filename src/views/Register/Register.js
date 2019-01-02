import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import api from '@/api';

export default {
  name: 'Register',
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
    const validatePass2 = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('パースワードを正しく入力してください！'))
      } else if (value != this.password) {
        callback(new Error('二回目のパースワード不一致です！'))
      } else {
        callback()
      }
    }
    return {
      userid: '',
      emailAddress: '',
      telephone: '',
      userName: '',
      password: '',
      password2: '',
      company: '',
      industry: '',
      role: '',
      country: '',
      telNo: '',
      address: '',
      postCode: '',
      card_no: '',
      card_user_name: '',
      card_valid_date: '',

      loginRules: {
        userid: [{ required: true, trigger: 'blur', validator: validateUsername }],
        emailAddress: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }],
        password2: [{ required: true, trigger: 'blur', validator: validatePass2 }],
      }
    }
    
  },
  methods: {
    handleResigter() {
      api.register({userid: this.userid, emailAddress:  this.emailAddress, telephone: this.telephone, userName: this.userName, password: this.password, 
        company: this.company, industry: this.industry, role: this.role, country: this.country, telNo: this.telNo, 
        address: this.address, postCode: this.postCode, card_no: this.card_no, card_valid_date: this.card_valid_date, card_user_name: this.card_user_name}).then(res => { 
          if (res.statusCode == '200') {
            this.$router.push('/login');
            this.$message({
              message: '登録成功しました。',
              type: 'success'
            });
          } else {
            this.$message({
              message: '登録失敗しました。',
              type: 'error'
            });
          }
      })
    }
  }
}