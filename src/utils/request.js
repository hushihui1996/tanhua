import Axios from 'axios';
import {BASE_URI} from './pathMap';
import Toast from './Toast';
const instance = Axios.create({
  baseURL: BASE_URI,
});
// 添加请求拦截器
Axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Toast.showLoading('请求中');
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
Axios.interceptors.response.use(
  function (response) {
    Toast.hideLoading();
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
export default {
  get: instance.get,
  post: instance.post,
};
