import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import { mapState } from "vuex";
import api from '@/api';
export default {
  name: 'Tab2',
  components: {
    NavMenu,Card
  },
  data() {
    return {
      activeIndex: '2',
      type: '',
      target: '',
      country: '',
      category: '',
      categoryId: [],
      year: '',
      searchCount: 0,
      money: 0,
      dialogVisible: false,
      tableDataBrand: [{
      }],
      tableDataChannel: [{
      }],
      tableDataCompany: [{
      }],
      tableDataCategory: [{
      }],
      checkList: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapState({
      userNo: state => state.userNo ? state.userNo : window.localStorage.getItem('userNo'),
      userName: state => state.userName ? state.userName : window.localStorage.getItem('userName'),
    })
  },
  methods: {   
    back() {
      this.$router.push({
        path:'/tab1',
        query:{
          from: 'tab2',
          type: this.type,
          target: this.target,
          country: this.country,
          category: this.$route.query.category,
          categoryId: this.categoryId,
          year: this.$route.query.year,
          count: this.count,
          money: this.money,
          tableDataCategory : this.tableDataCategory,
          tableDataCompany:  this.tableDataCompany,
          tableDataBrand : this.tableDataBrand,
          tableDataChannel:  this.tableDataChannel,
        }
      });
    },
    buyData() {
      api.insertPaidMarketData({userId: this.userNo, country: this.country, type: this.type, target: 
        this.target, category: this.category, year: this.year,money: this.money}).then(res => {
          if (res.statusCode == '200') {
            this.$message({
              message: '購入成功しました。',
              type: 'success'
            });
            this.dialogVisible = true;
          } else {
            this.$message({
              message: '購入失敗しました。',
              type: 'error'
            });
          }
      })
    },
    buyHistryShow() {
      this.dialogVisible = false;
      this.$router.push({
        path:'/tab3',
        query:{
          from: 'tab2'
        }
      });
    }
  },
  created() {
    this.type = this.$route.query.type;
    this.target = this.$route.query.target;
    this.country = this.$route.query.country;

    var categorys = '';
    this.$route.query.category.forEach(function (value) {
      categorys += value + ", ";
    });
    this.category = categorys.substring(0,categorys.length -2);

    this. categoryId = this.$route.query.categoryId;

    var years = '';
    this.$route.query.year.sort().forEach(function (value) {
      years += value + ", ";
    });
    this.year = years.substring(0,years.length -2);
    this.tableDataCategory = this.$route.query.tableDataCategory;
    this.tableDataCompany = this.$route.query.tableDataCompany;
    this.tableDataBrand = this.$route.query.tableDataBrand;
    this.tableDataChannel = this.$route.query.tableDataChannel;
    this.count = this.$route.query.count;
    this.money = this.$route.query.money;
    this.checkList = this.$route.query.checkList;
  }
}