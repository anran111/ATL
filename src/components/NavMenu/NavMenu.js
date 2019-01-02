import api from '@/api'
import { mapState, mapActions } from "vuex";

export default {
  props: ['activeIndex'],
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      userNo: state => state.userNo ? state.userNo : window.localStorage.getItem('userNo'),
      userName: state => state.userName ? state.userName : window.localStorage.getItem('userName'),
      status: state => !state.status ? state.status : window.localStorage.getItem('status'),
    })
  },
  methods: {
    ...mapActions(['setUserNo']),
    ...mapActions(['setUserName']),
    ...mapActions(['setStatus']),
    handleSelect(key, keyPath) {
      if (key == 1) {
        this.$router.push('/')
      }
      if (key == 2) {
        this.$router.push('/tab1')
      }
      if (key == 7) {
        this.$router.push('/login')
      }
      if (key == 8) {
        this.setUserNo({userNo:''})
        window.localStorage.setItem("userNo",'');
        this.setUserName({userName:''})
        window.localStorage.setItem("userName",'');
        this.setStatus({status:'logout'})
        window.localStorage.setItem("status",'');
        this.$router.push('/login')
      }
    }
  }
};