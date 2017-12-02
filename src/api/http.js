import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  } else if (response && (response.status === 404)) {
    Message.error('Service No Found!')
  } else if (response && (response.status === 500)) {
    Message.error('Service Exception!')
  }
  return response
}

export default {
  Post (url, data) {
    return axios.post(url, qs.stringify(data)).then(
      (response) => {
        return checkStatus(response)
      }
    )
  },
  Get (url, data) {
    return axios.get(url, data).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }
}
