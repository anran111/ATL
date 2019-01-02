import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import { mapState } from "vuex";
import api from '@/api';
export default {
  name: 'Tab1',
  components: {
    NavMenu,Card
  },
  data() {
    return {
      from: '',
      activeIndex: '2',
      type: 'category',
      searchCount: 0,
      money: 0,
      searchFlg: 'false',
      targetCheck: '',
      countryCheck: '',
      categoryCheck: '',
      yearCheck: '',
      countryIdArr: [],
      targetNodeValue: '',
      countryNodeValue: '',
      categoryNodeValue: [],
      checked: [],
      yearDisabledFlg: true,
      target: [{
        id: '01',
        label: 'CATEGORY',
        children: [{
          id: '0101',
          label: 'VALUE BY CATEGORY'
        }, {
          id: '0102',
          label: 'VOLUME BY CATEGORY'
        }, {
          id: '0103',
          label: 'SHARE BY VALUE (%)'
        }, {
          id: '0104',
          label: 'SHARE BY VOLUME (%)'
        }]
      }, {
        id: '02',
        label: 'COMPANY',
        children: [{
          id: '0201',
          label: 'VALUE BY COMPANY'
        }, {
          id: '0202',
          label: 'VOLUME BY COMPANY'
        }, {
          id: '0203',
          label: 'SHARE BY VALUE (%)'
        }, {
          id: '0204',
          label: 'SHARE BY VOLUME (%)'
        }]
      }, {
        id: '03',
        label: 'BRAND',
        children: [{
          id: '0301',
          label: 'VALUE BY BRAND'
        }, {
          id: '0302',
          label: 'VOLUME BY BRAND'
        }, {
          id: '0303',
          label: 'SHARE BY VALUE (%)'
        }, {
          id: '0304',
          label: 'SHARE BY VOLUME (%)'
        }]
      }, {
        id: '04',
        label: 'CHANNEL',
        children: [{
          id: '0401',
          label: 'VALUE BY CHANNEL'
        }, {
          id: '0402',
          label: 'VOLUME BY CHANNEL'
        }, {
          id: '0403',
          label: 'SHARE BY VALUE (%)'
        }, {
          id: '0404',
          label: 'SHARE BY VOLUME (%)'
        }]
      }],
      country: [],
      props: {
      },
      checkList: [
        {id: 2000, prop:'year2000', label: '2000'},
        {id: 2001, prop:'year2001', label: '2001'},
        {id: 2002, prop:'year2002', label: '2002'},
        {id: 2003, prop:'year2003', label: '2003'},
        {id: 2004, prop:'year2004', label: '2004'},
        {id: 2005, prop:'year2005', label: '2005'},
        {id: 2006, prop:'year2006', label: '2006'},
        {id: 2007, prop:'year2007', label: '2007'},
        {id: 2008, prop:'year2008', label: '2008'},
        {id: 2009, prop:'year2009', label: '2009'},
        {id: 2010, prop:'year2010', label: '2010'},
        {id: 2011, prop:'year2011', label: '2011'},
        {id: 2012, prop:'year2012', label: '2012'},
        {id: 2013, prop:'year2013', label: '2013'},
        {id: 2014, prop:'year2014', label: '2014'},
        {id: 2015, prop:'year2015', label: '2015'},
        {id: 2016, prop:'year2016', label: '2016'},
        {id: 2017, prop:'year2017', label: '2017'},
        {id: 2018, prop:'year2018', label: '2018'}],

      tableDataBrand: [{
      }],
      tableDataChannel: [{
      }],
      tableDataCompany: [{
      }],
      tableDataCategory: [{
      }],
      count: 1,
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
    targethandleNodeClick(props) {
      this.countryNodeValue = '';
      this.categoryNodeValue = [];
      this.checked = [];
      if (props.id.indexOf('01') == 0) {
        this.type = 'category';
      } else if (props.id.indexOf('02') == 0) {
        this.type = 'company';
      } else if (props.id.indexOf('03') == 0) {
        this.type = 'brand';
      } else if (props.id.indexOf('04') == 0) {
        this.type = 'channel';
      }
      this.targetCheck = 'true';
      this.targetNodeValue = props.label;
      if (props.label == 'VALUE BY CATEGORY' || props.label == 'VOLUME BY CATEGORY'
        || props.label == 'VALUE BY COMPANY' || props.label == 'VOLUME BY COMPANY'
        || props.label == 'VALUE BY BRAND' || props.label == 'VOLUME BY BRAND'
        || props.label == 'VALUE BY CHANNEL' || props.label == 'VOLUME BY CHANNEL'
        || props.label == 'SHARE BY VALUE (%)' || props.label == 'SHARE BY VOLUME (%)') {
        this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
        if (this.type == 'category') {
          api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
            this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
              res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
              this.checkList = res.yearInfo;
              this.props = res.categoryInfo;
              this.country = res.countryInfo;
          })
        } else if (this.type == 'company') {
          api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
            this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
              res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
              this.checkList = res.yearInfo;
              this.props = res.categoryInfo;
              this.country = res.countryInfo;
          })
        } else if (this.type == 'brand') {
          api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
            this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
              res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
              this.checkList = res.yearInfo;
              this.props = res.categoryInfo;
              this.country = res.countryInfo;
          })
        } else if (this.type == 'channel') {
          api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
            this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
              res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
              this.checkList = res.yearInfo;
              this.props = res.categoryInfo;
              this.country = res.countryInfo;
          })
        }

      }
    },
    countryhandleNodeClick(props) {
      this.countryCheck = 'true';
      this.countryNodeValue = props.label;
      this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      }
    },
    categoryhandleNodeClick(props) {
      this.categoryNodeValue = props.id;
    },
    categoryhandleNodeChecked(props) {
      this.categoryCheck = 'true';
      this.categoryNodeValue = this.$refs.categoryTree.getCheckedNodes().map(item => item.id);
      this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.yearDisabledFlg = false;
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      }
    },
    yearhandelChange(props) {
      this.yearCheck = 'true';
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
    },
    resetTargetChecked(event) {
      this.targetNodeValue = '';
      this.$refs.targetTree.setCurrentKey(null);

      this.countryNodeValue = '';
      api.getAllCountry().then(res => {
        this.country = res;
      })

      this.categoryNodeValue = [];
      api.getCategory().then(res => {
        this.props = res;
      })

      this.checked = [];
      this.checkList = [
        {id: 2000, prop:'year2000', label: '2000'},
        {id: 2001, prop:'year2001', label: '2001'},
        {id: 2002, prop:'year2002', label: '2002'},
        {id: 2003, prop:'year2003', label: '2003'},
        {id: 2004, prop:'year2004', label: '2004'},
        {id: 2005, prop:'year2005', label: '2005'},
        {id: 2006, prop:'year2006', label: '2006'},
        {id: 2007, prop:'year2007', label: '2007'},
        {id: 2008, prop:'year2008', label: '2008'},
        {id: 2009, prop:'year2009', label: '2009'},
        {id: 2010, prop:'year2010', label: '2010'},
        {id: 2011, prop:'year2011', label: '2011'},
        {id: 2012, prop:'year2012', label: '2012'},
        {id: 2013, prop:'year2013', label: '2013'},
        {id: 2014, prop:'year2014', label: '2014'},
        {id: 2015, prop:'year2015', label: '2015'},
        {id: 2016, prop:'year2016', label: '2016'},
        {id: 2017, prop:'year2017', label: '2017'},
        {id: 2018, prop:'year2018', label: '2018'}]

      this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.yearDisabledFlg = true;
    },

    resetCountryChecked(event) {
      this.countryNodeValue = '';
      this.categoryNodeValue = [];
      this.checked = [];
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      }

      this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.yearDisabledFlg = true;
    },

    resetCategoryChecked(event) {
      this.categoryNodeValue = [];
      this.checked = [];
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
        })
      }

      this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.yearDisabledFlg = true;
    },
    resetYearChecked(event) {
      this.checked = [];
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
        })
      }

      this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: auto;opacity: 1;cursor: auto;";
      this.yearDisabledFlg = false;
    },

    search(event) {
      this.categoryNodeValue = this.$refs.categoryTree.getCheckedNodes().map(item => item.id);
      var errorMessage = '';
      if (this.targetNodeValue == '') {
        this.targetCheck = 'false';
        errorMessage += '指標、'
      } else {
        this.targetCheck = 'true';
      }
      if (this.countryNodeValue == '') {
        this.countryCheck = 'false';
        errorMessage += '国分、'
      } else {
        this.countryCheck = 'true';
      }
      if (this.categoryNodeValue.length == 0) {
        this.categoryCheck = 'false';
        errorMessage += '業界、'
      } else {
        this.categoryCheck = 'true';
      }
      if (this.checked.length == 0) {
        this.yearCheck = 'false';
        errorMessage += '年分、'
      } else {
        this.yearCheck = 'true';
      }
      if (this.targetCheck == 'false' || this.countryCheck == 'false' || this.categoryCheck == 'false' || this.yearCheck == 'false') {
        this.tableDataCategory = [{}];
        this.tableDataCompany = [{}];
        this.tableDataBrand = [{}];
        this.tableDataChannel = [{}];
        this.searchFlg = 'false';
        this.$message({
          showClose: true,
          message: '＊' + errorMessage.substring(0,errorMessage.length - 1) + 'を選択してください。',
          type: 'error'
        });
        return;
      }
      if (this.type == 'category') {
        api.getMarketByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
          this.tableDataCategory = res.searchResult;
          this.searchCount = res.searchCount;
          this.money =  this.searchCount * 10;
          this.searchFlg = 'true';
        })
      } else if (this.type == 'company') {
        api.getMarketByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
          this.tableDataCompany = res.searchResult;
          this.searchCount = res.searchCount;
          this.money =  this.searchCount * 10;
          this.searchFlg = 'true';
        })
      } else if (this.type == 'brand') {
        api.getMarketByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
          this.tableDataBrand = res.searchResult;
          this.searchCount = res.searchCount;
          this.money =  this.searchCount * 10;
          this.searchFlg = 'true';
        })
      } else {
        api.getMarketByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
          this.tableDataChannel = res.searchResult;
          this.searchCount = res.searchCount;
          this.money =  this.searchCount * 10;
          this.searchFlg = 'true';
        })
      }

    },

    buy(event) {
      if (this.searchFlg == 'true') {
        this.categoryNodeValue = this.$refs.categoryTree.getCheckedNodes().map(item => item.label);
        this.$router.push({
          path:'/tab2',
          query:{
            type: this.type,
            target: this.targetNodeValue,
            country: this.countryNodeValue,
            category: this.categoryNodeValue,
            categoryId: this.$refs.categoryTree.getCheckedNodes().map(item => item.id),
            year: this.checked,
            count: this.searchCount,
            money: this.money,
            checkList: this.checkList,
            tableDataCategory : this.tableDataCategory,
            tableDataCompany:  this.tableDataCompany,
            tableDataBrand : this.tableDataBrand,
            tableDataChannel:  this.tableDataChannel,
          }
        });
      } else {
        this.$message({
          showClose: true,
          message: '条件を選択した後で、検索してください。',
          type: 'error'
        });
      }

    },

  },
  created() {
    this.from = this.$route.query.from;
    if (this.from == 'tab2') {
      this.targetNodeValue = this.$route.query.target;
      this.countryNodeValue = this.$route.query.country;
      this.categoryNodeValue = this.$route.query.categoryId;

      this.checked = this.$route.query.year;
      this.type = this.$route.query.type;
      if (this.type == 'category') {
        api.getMarketSearchByCategory({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'company') {
        api.getMarketSearchByCompany({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'brand') {
        api.getMarketSearchByBrand({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      } else if (this.type == 'channel') {
        api.getMarketSearchByChannel({targetNodeValue: this.targetNodeValue,countryNodeValue:
          this.countryNodeValue, categoryNodeValue: this.categoryNodeValue, yearNodeValue: this.checked}).then(res => {
            res.yearInfo.forEach(item=> item.prop = 'year' +item.id );
            this.checkList = res.yearInfo;
            this.props = res.categoryInfo;
            this.country = res.countryInfo;
        })
      }

      this.tableDataCategory = this.$route.query.tableDataCategory;
      this.tableDataCompany = this.$route.query.tableDataCompany;
      this.tableDataBrand = this.$route.query.tableDataBrand;
      this.tableDataChannel = this.$route.query.tableDataChannel;
      this.count = this.$route.query.count;
      this.money = this.$route.query.money;

      // this.$refs.targetTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      // this.$refs.countryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      // this.$refs.categoryTree.$el.style = "background: white;border:0px;pointer-events: none;opacity: 0.6;cursor: not-allowed;";
      // this.yearDisabledFlg = false;
    } else {
      api.getCategory().then(res => {
        this.props = res;
      })
      api.getAllCountry().then(res => {
        this.country = res;
      })
      $("#yearSearch").attr("disabled",true);
      $("#yearSearch").style = "pointer-events: none;";
    }
  }

}