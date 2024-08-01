<script lang="ts" setup>
import { newInfo } from "@/api/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
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
  const res: any = await newInfo({
    id: route.query.id,
  });
  console.log(res);

  if (res.code === 200) {
    list.value = res.data;
    console.log(list);
    loading.value = false;
  }
};
</script>

<template>
  <div class="w">
    <div class="contact" v-if="!loading">
      <div class="contact_descride">
        <h6>徽金网络有限公司专注于区块链开发16年，是互联网行业的践行者</h6>
        <i> </i>
        <p>今朝我欲乘风去，大战雄才高万仞！</p>

      </div>
    </div>
  </div>
</template>

<style style lang="scss" scoped>
.contact_descride {
  margin: 6.2% auto 5.5%;
  padding: 0 20px;
  text-align: center;

  h6 {
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
  }

  i {
    content: "";
    display: inline - block;
    width: 150px;
    height: 4px;
    margin-top: 1.6%;
    background: #0b59dd;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: #5e5e5e;
  }

  p:nth-child(3) {
    margin-top: 1.5%;
  }

  @media (max-width: 820px) {
    h6 {
      font-size: 20px;
      line-height: 25px;
    }

    i {
      width: 100px;
      height: 3px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 460px) {
    h6 {
      font-size: 16px;
      line-height: 21px;
    }

    i {
      width: 80px;
      height: 3px;
    }

    p {
      font-size: 13px;
      line-height: 16px;
    }
  }
}
</style>
