<script lang="ts" setup>
import HomeNews from "./Home/HomeNeed.vue";
import CardList from "./Blockchain/CardList-1.vue";
import { projectList } from "@/api/api";
import { onMounted, ref } from "vue";
const list = ref([
  {
    id: Number,
    title: String,
    cover: String,
    content: String,
    created_at: String,
  },
]);
const loading = ref(true);
onMounted(() => {
  initData();
});
const initData = async () => {
  const res: any = await projectList({ cate: 2 });
  if (res.code === 200) {
    list.value = res.data;
    loading.value = false;
    console.log(res);

  }
};

console.log(list.value);
</script>

<template>
  <div class="store w" v-if="!loading">
    <div v-for="i in list" :key="i.id">
      <img :src="i.cover" alt="" />
      <div class="store_box">
        <div class="content_box">
          <h4>DAPP源码</h4>
          <p>交易所开发</p>
          <p>源码+定制+二开,快速部署上线</p>
          <p>OTC-CTC-合约-永续-秒合约-多语言多功能产品等</p>
          <i></i>
          <p>
            成熟交易所架构,负载均衡,动静分离,以提升系统,承载能力和响应速度,高频交易撮合引擎
            系统采用分布式架构，快速简单部署，实现k线、行情、深度数据的极速上线测试,全面支持客户定制化开发,完美贴合不同客户的需求
          </p>
        </div>
      </div>
    </div>
  </div>
  <CardList />
  <HomeNews />
</template>

<style lang="scss" scoped>
.card-list-1 {
  margin-top: 0;
}

.store>div:nth-child(even) {
  transform: scaleX(-1) scaleY(1);

  .content_box {
    transform: scaleX(-1) scaleY(1);
  }
}

.store {
  margin: 53px auto 25px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  >div {
    position: relative;
  }

  img {
    width: 100%;
  }
}

.store_box {
  width: 100%;
  position: absolute;
  top: 0;
}

@media screen and (max-width: 1960px) {
  .store {
    gap: 5.1vw;

    .content_box {
      margin-left: 10vw;
    }
  }
}

@media screen and (max-width: 1700px) {
  .store {
    .content_box {
      margin-left: 5vw;
    }
  }
}

@media screen and (max-width: 1550px) {
  .store {
    .content_box {
      margin-left: 7vw;
      width: 28vw;

      h4 {
        font-size: 2.6vw;
        line-height: 2.6vw;
        margin-bottom: 3.3vw;
        margin-top: 4vw;
      }

      h4::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3.8vw;
        width: 11.5vw;
        height: 0.25vw;
        background: #0b59dd;
      }

      p {
        font-size: 1.5vw;
        line-height: 2.4vw;
      }

      i {
        height: 1.6vw;
      }
    }
  }
}

/* @media screen and (max-width: 1960px) {
  .store {
    font-size: 3.5vw;
    .content_box {
      margin-left: 18.3vw;
      width: 22vw;

      h4 {
        font-size: 2vw;
        line-height: 2vw;
        margin-bottom: 2.4vw;
        margin-top: 6.224vw;
      }

      h4::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 2.9vw;
        width: 8.7vw;
        height: 0.2vw;
        background: #0b59dd;
      }

      p {
        font-size: 1.1vw;
        line-height: 1.8vw;
      }

      i {
        height: 1.1vw;
      }

    }
  }

} */
.content_box {
  margin-left: 19%;
  width: 431px;

  h4 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 50px;
    margin-top: 122px;
    position: relative;
  }

  h4::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 57px;
    width: 172px;
    height: 4px;
    background: #0b59dd;
  }

  p {
    color: #5e5e5e;
    font-size: 22px;
    line-height: 36px;
  }

  i {
    height: 22px;
    display: block;
  }
}
</style>
