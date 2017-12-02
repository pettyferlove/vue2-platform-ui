import Http from './http'

let baseUrl = 'http://19.15.247.64:8080/InvestPro/minstone/indexAnalysis/'

export default {
  getTableData (params) {
    const res = Http.Post(baseUrl + 'getProjectDataByLevel', params)
    return res
  },
  getBarData0 (params) {
    const res = Http.Post('/get/barData0', params)
    return res
  },
  getBarData1 (params) {
    const res = Http.Post('/get/barData1', params)
    return res
  },
  getBarData2 (params) {
    const res = Http.Post('/get/barData2', params)
    return res
  },
  getGuangdongMap (params) {
    const res = Http.Post(baseUrl + 'getProjectDataFlow', params)
    return res
  },
  getCityMap (params) {
    const res = Http.Post(baseUrl + 'getProjectDataFlow', params)
    return res
  },
  getProjectBarData (params) {
    const res = Http.Post(baseUrl + 'getAreaProjectNum', params)
    return res
  },
  getProcessBarData (params) {
    const res = Http.Post('/get/processBarData', params)
    return res
  },
  getInvestTotalBarData (params) {
    const res = Http.Post('/get/investTotalBarData', params)
    return res
  },
  getInvestOrProjectBarData (params) {
    const res = Http.Post(baseUrl + 'getProjectNumByType', params)
    return res
  },
  getDqTableData (params) {
    const res = Http.Post(baseUrl + 'getAreaProcessNum', params)
    return res
  },
  getBmTableData (params) {
    const res = Http.Post('/get/bmTableData', params)
    return res
  },
  getPieData (params) {
    const res = Http.Post(baseUrl + 'getProjectByIndustry', params)
    return res
  }
}
