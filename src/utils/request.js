import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service
