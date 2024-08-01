<script lang="ts" setup>
import HomeNeed from "./Home/HomeNeed.vue";
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
  loading.value = true;

  const res: any = await projectList({ cate: 1 });
  if (res.code === 200) {
    list.value = res.data;
    loading.value = false;
  }
};
</script>
<template>
  <div class="w">
    <div class="card-list" v-if="!loading">
      <div>
        <div class="card" v-for="itme in list" :key="itme.id">
          <img :src="itme.cover" alt="" />
          <div class="key">{{ itme.title }}</div>
          <div class="val" v-html="itme.content"></div>
        </div>
      </div>
    </div>
  </div>
  <CardList />
  <HomeNeed />
</template>

<style lang="scss" scoped>
.card-list {
  margin-bottom: 10%;
  margin-top: 5%;

  >div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px 92px;

  }

  .card {
    max-width: 714px;

    img {
      max-width: 100%;
    }

    .key {
      font-size: 26px;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 500;
      color: #000000;
      position: relative;
      margin-top: 26px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -12px;
        width: 24px;
        height: 2px;
        background: #0b59dd;
      }
    }

    .val {
      font-size: 20px;
      font-family: Source Han Sans CN, Source Han Sans CN;
      font-weight: 400;
      color: #a0a1a3;
      line-height: 36px;
      margin-top: 35px;
    }
  }
}

@media (max-width: 1400px) {
  .card-list {
    display: block;
    padding: 0 20px;

    .card {
      margin: 8% auto;
    }
  }
}
</style>
