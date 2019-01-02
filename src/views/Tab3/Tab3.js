import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import { mapState } from "vuex";
import api from '@/api';

export default {
  name: 'Tab3',
  components: {
    NavMenu,Card
  },
  data() {
    return {
      activeIndex: '2',
      buyHistoryData:[{
      }],
    }
  },
  computed: {
    ...mapState({
      userNo: state => state.userNo ? state.userNo : window.localStorage.getItem('userNo'),
      userName: state => state.userName ? state.userName : window.localStorage.getItem('userName'),
    })
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    fileDownload(index, row) {
      var categoryData = this.buyHistoryData[index].category.split(",");
      var yearData = this.buyHistoryData[index].year.split(",");

      if (this.buyHistoryData[index].target.indexOf("category") == 0) {
        var targetData = this.buyHistoryData[index].target.replace("category ", "");
        api.getMarketByCategoryForCsv({userName: this.userName, target: targetData, country: this.buyHistoryData[index].country, 
          category: categoryData, year: yearData}).then(res => {
            window.location.href="http://localhost:8433/file/fileDownload?fileName=" + res.fileName;
        })
      } else if (this.buyHistoryData[index].target.indexOf("brand") == 0) {
        var targetData = this.buyHistoryData[index].target.replace("brand ", "");
        api.getMarketByBrandForCsv({userName: this.userName, target: targetData, country: this.buyHistoryData[index].country, 
          category: categoryData, year: yearData}).then(res => {
            window.location.href="http://localhost:8433/file/fileDownload?fileName=" + res.fileName;
        })
      } else if (this.buyHistoryData[index].target.indexOf("company") == 0) {
        var targetData = this.buyHistoryData[index].target.replace("company ", "");
        api.getMarketByCompanyForCsv({userName: this.userName, target: targetData, country: this.buyHistoryData[index].country, 
          category: categoryData, year: yearData}).then(res => {
            window.location.href="http://localhost:8433/file/fileDownload?fileName=" + res.fileName;
        })
      } else {
        var targetData = this.buyHistoryData[index].target.replace("channel ", "");
        api.getMarketByChannelForCsv({userName: this.userName, target: targetData, country: this.buyHistoryData[index].country, 
          category: categoryData, year: yearData}).then(res => {
            window.location.href="http://localhost:8433/file/fileDownload?fileName=" + res.fileName;
        })
      }
      
    }
  },
  created() {
    api.getBuyHistory({userId: this.userNo}).then(res => {
      this.buyHistoryData = res.searchResult;
    })
  }
}