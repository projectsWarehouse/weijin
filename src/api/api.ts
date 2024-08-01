import { request } from "./axios";
//接口
export function index() {
  return request("/api/index/index", {}, "post");
}
// 新闻
export function newCate() {
  return request("api/new/cate", {}, "post");
}
export function newList(data: any) {
  return request("api/new/list", data, "post");
}
export function newInfo(data: any) {
  return request("/api/new/info", data, "post");
}
// 项目
export function projectList(data: any) {
  return request("/api/project/list", data, "post");
}

export function projectInfo(data: any) {
  return request("api/project/info", data, "post");
}
// 关于我们
export function aboutList(data: any) {
  return request("api/about/list", data, "post");
}
//联系我们
export function contact(data: any) {
  return request("api/contact/contact", data, "post");
}
