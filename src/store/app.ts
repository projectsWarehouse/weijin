// Utilities
import { defineStore } from "pinia";
import { index } from "@/api/api"; //导入请求的api接口

export const useAppStore = defineStore("app", {
  // 数据
  state: () => ({
    indexData: {
      contact_phone: String,
      banner_list: [],
      service_range: [
        {
          id: Number,
          title: String,
          cover: String,
          content: String,
          created_at: String,
        },
      ],
      service_list: [
        {
          id: Number,
          title: String,
          cover: String,
          content: String,
          created_at: String,
        },
      ],
      service_structure: [
        {
          id: Number,
          title: String,
          cover: String,
          content: String,
          created_at: String,
        },
      ],
      new_list: [
        {
          id: Number,
          title: String,
          cover: String,
          content: String,
          created_at: String,
        },
      ],
    },
  }),
  //修改数据的方法
  actions: {
    // async 关键字用于声明一个函数是异步的。异步函数会返回一个 Promise 对象。
    // 在函数体内，可以使用 await 来等待一个 Promise 解决（或拒绝）后的结果。
    async setIndex() {
      //res: any:任何类型
      const res: any = await index();
      //判断Promise是否成功
      if (res.code === 200) {
        //res.data
        //res是axios文件中的成功调用：resolve(值)触发 then()执行，.data是请求成功到的数据
        //this.indexData
        //this指的是这个文件本身，indexData 是上的state里的对象
        this.indexData = res.data;
      }
    },
  },
});
