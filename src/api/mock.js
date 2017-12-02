/* eslint-disable no-unused-vars */
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  return {
    tableData: [
      {areaLev: '省级', projectNum: '1125', investTol: '1125'},
      {areaLev: '市级', projectNum: '1125', investTol: '1125'},
      {areaLev: '县级', projectNum: '1125', investTol: '1125'},
      {areaLev: '总计', projectNum: '1125', investTol: '1125'}
    ]
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/get/tableData', 'post', produceNewsData)
