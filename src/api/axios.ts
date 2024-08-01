import axios from "axios"; // 进行axios二次封装:使用请求与响应拦截器
import { showMessage } from "./status"; // 引入状态码文件
import { ElMessage } from "element-plus"; // 引入el 提示框，这个项目里用什么组件库这里引什么
// 1，创建axios 实例
// 设置接口超时时间30秒-60秒
axios.defaults.timeout = 60000;
// 请求地址，这里是动态赋值的的环境变量，在.env文件夹中:VITE_API_DOMAIN = 'https://api.weijinkj.xyz'
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;
//2，request实例添加请求与响应拦截器
//http request 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 配置请求头
    config.headers = {
      //headers属性请求头，经常给服务器端携带公共参数
      //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
      "Content-Type": "application/json;charset=UTF-8", // 传参方式json
      // token: "80c483d59ca86ad0393cf8a98416e2a1", // 这里自定义配置，这里传的是token
    }; //config配置对象，headers属性请求头，经常给服务器携带公共参数
    return config; //需要返回 config配置对象,否则请求不出去
  },
  (error) => {
    return Promise.reject(error);
  }
);
//http response 响应拦截器
axios.interceptors.response.use(
  (response) => {
    //成功回调
    return response.data;
  },
  (error) => {
    //失败回调
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status); // 传入响应码，匹配响应码对应信息
      return Promise.reject(response.data);
    } else {
      ElMessage.warning("网络连接异常,请稍后再试!");
    }
  }
);

// 封装 GET POST 请求并导出
//设置 url params type 的默认值
export function request(url = "", params = {}, type = "POST") {
  // 1.创建Promise对象，用于表示异步操作最终完成(或失败)及其结果值
  // 如果请求成功，调用 resolve 并传递响应数据
  // 如果请求失败，调用 reject 并传递错误信息
  return new Promise((resolve, reject) => {
    let promise; // 声明一个变量用于存储 axios 请求的 Promise
    // 根据请求类型（GET 或 POST）创建相应的 axios 请求
    if (type.toUpperCase() === "GET") {
      promise = axios({
        url,
        params,
      });
    } else if (type.toUpperCase() === "POST") {
      promise = axios({
        method: "POST",
        url,
        data: params,
      });
    }

    //2.接收结果
    // 成功调用：resolve(值)触发 then()执行
    promise
      .then((res) => {
        resolve(res);
      })
      // 失败调用：catch(值)触发 catch()执行
      .catch((err) => {
        reject(err);
      });
  });
}
