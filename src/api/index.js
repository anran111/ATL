import Axios from '@/api/config.js'

export default {
	getCategory: cateGoryInfo => Axios.get('/category/getCategoryInfo'),
	getAllCountry: countryInfo => Axios.get('//country/getCountryInfo'),
	getYearsInfo: yearInfo => Axios.get('/year/getYearsInfo'),

	getMarketByBrand: marketInfoByBrand => Axios.post('/market/getMarketDataByBrand',  { 
		year: marketInfoByBrand.yearNodeValue,
		country: [marketInfoByBrand.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketInfoByBrand.categoryNodeValue,
		indicator: [marketInfoByBrand.targetNodeValue]
	}),

	getMarketByCategory: marketInfoByCategory => Axios.post('/market/getMarketDataByCategory',  { 
		year: marketInfoByCategory.yearNodeValue,
		country: [marketInfoByCategory.countryNodeValue],
		//categoryId: ['10','03100701','031007'],
		categoryId: marketInfoByCategory.categoryNodeValue,
		indicator: [marketInfoByCategory.targetNodeValue]
	}),

	getMarketByChannel: marketInfoByChannel => Axios.post('/market/getMarketDataByChannel',  { 
		year: marketInfoByChannel.yearNodeValue,
		country: [marketInfoByChannel.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketInfoByChannel.categoryNodeValue,
		indicator: [marketInfoByChannel.targetNodeValue]
	}),

	getMarketByCompany: marketInfoByCompany => Axios.post('/market/getMarketDataByCompany',  { 
		year: marketInfoByCompany.yearNodeValue,
		country: [marketInfoByCompany.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketInfoByCompany.categoryNodeValue,
		indicator: [marketInfoByCompany.targetNodeValue]
	}),

	getMarketSearchByCategory: marketSearchInfoByCategory => Axios.post('/market/getMarketSearchDataByCategory',  { 
		year: marketSearchInfoByCategory.yearNodeValue,
		country: [marketSearchInfoByCategory.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketSearchInfoByCategory.categoryNodeValue,
		indicator: [marketSearchInfoByCategory.targetNodeValue]
	}),
		
	getMarketSearchByCompany: marketSearchInfoByCompany => Axios.post('/market/getMarketSearchDataByCompany',  { 
		year: marketSearchInfoByCompany.yearNodeValue,
		country: [marketSearchInfoByCompany.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketSearchInfoByCompany.categoryNodeValue,
		indicator: [marketSearchInfoByCompany.targetNodeValue]
	}),
		
	getMarketSearchByBrand: marketSearchInfoByBrand => Axios.post('/market/getMarketSearchDataByBrand',  { 
		year: marketSearchInfoByBrand.yearNodeValue,
		country: [marketSearchInfoByBrand.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketSearchInfoByBrand.categoryNodeValue,
		indicator: [marketSearchInfoByBrand.targetNodeValue]
	}),
		
	getMarketSearchByChannel: marketSearchInfoByChannel => Axios.post('/market/getMarketSearchDataByChannel',  { 
		year: marketSearchInfoByChannel.yearNodeValue,
		country: [marketSearchInfoByChannel.countryNodeValue],
		//categoryId: ['8310','9310','10'],
		categoryId: marketSearchInfoByChannel.categoryNodeValue,
		indicator: [marketSearchInfoByChannel.targetNodeValue]
	}),

	insertPaidMarketData: paidMarketData => Axios.post('/paidMarket/insertPaidMarketData',  {
		userId: paidMarketData.userId,
		country: paidMarketData.country,
		indicator: paidMarketData.type + " " + paidMarketData.target,
		industry: paidMarketData.category,
		year: paidMarketData.year,
		price: paidMarketData.money
	}),

	getBuyHistory: buyHistoryData => Axios.post('/paidMarket/getPaidMarketData',  { 
		userId: buyHistoryData.userId
	}),

	register: registerInfo => Axios.post('/userInfo/insertUserInfoData', {
		userId: registerInfo.userid,
		emailAddress: registerInfo.emailAddress, 
		telephone: registerInfo.telephone, 
		userName: registerInfo.userName, 
		password: registerInfo.password, 
	  	company: registerInfo.company, 
	 	industry: registerInfo.industry, 
	  	role: registerInfo.role, 
	  	country: registerInfo.country, 
	  	telNo: registerInfo.telNo, 
		address: registerInfo.address, 
		postCode: registerInfo.postCode, 
		card_no: registerInfo.card_no, 
		card_valid_date: registerInfo.card_valid_date, 
		card_user_name: registerInfo.card_user_name
	}),

	login: user => Axios.post('/userInfo/getUserInfoData',{
		userId: user.userId,
		password: user.password
	}),
	// logout: user => Axios.post('/logout',user),
	
	getMarketByCategoryForCsv: marketInfoByCategoryForCsv => Axios.post('/market/getMarketDataByCategoryForCsv',  { 
		userName: [marketInfoByCategoryForCsv.userName],
		indicator: [marketInfoByCategoryForCsv.target],
		country: [marketInfoByCategoryForCsv.country],
		categoryName: marketInfoByCategoryForCsv.category,
		year: marketInfoByCategoryForCsv.year
	}),

	getMarketByBrandForCsv: marketInfoByBrandForCsv => Axios.post('/market/getMarketDataByBrandForCsv',  { 
		userName: [marketInfoByBrandForCsv.userName],
		indicator: [marketInfoByBrandForCsv.target],
		country: [marketInfoByBrandForCsv.country],
		categoryName: marketInfoByBrandForCsv.category,
		year: marketInfoByBrandForCsv.year
	}),
	
	getMarketByCompanyForCsv: marketInfoByCompanyForCsv => Axios.post('/market/getMarketDataByCompanyForCsv',  { 
		userName: [marketInfoByCompanyForCsv.userName],
		indicator: [marketInfoByCompanyForCsv.target],
		country: [marketInfoByCompanyForCsv.country],
		categoryName: marketInfoByCompanyForCsv.category,
		year: marketInfoByCompanyForCsv.year
	}),
	
	getMarketByChannelForCsv: marketInfoByChannelForCsv => Axios.post('/market/getMarketDataByChannelForCsv',  { 
		userName: [marketInfoByChannelForCsv.userName],
		indicator: [marketInfoByChannelForCsv.target],
		country: [marketInfoByChannelForCsv.country],
		categoryName: marketInfoByChannelForCsv.category,
		year: marketInfoByChannelForCsv.year
	}),
}