<script lang="ts" setup>
import HomeNeed from "./Home/HomeNeed.vue";
import { projectList } from "@/api/api";
import { onMounted, ref } from "vue";
const mainList = ref([
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
  const res: any = await projectList({ cate: 3 })
  if (res.code === 200) {
    mainList.value = res.data
    loading.value = false;
    console.log(mainList);
  }
};
</script>

<template>
  <div class="sigrid_main" v-if="!loading">
    <ul>
      <li v-for="(index, itme) in mainList" :key="itme">
        <img :src="index.cover" alt="" />
        <div class="content_box">
          <div class="content">
            <h3>{{ index.title }}</h3>
            <i></i>
            <p class="color_A0A1A3_4" v-html="index.content"></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- <div class="sigrid_list">
    <ul>
      <li v-for="itme in 6" :key="itme">
        <img src="@/assets/img/sigrid_img/sigrid_1.png" alt="" />
      </li>
    </ul>
  </div> -->
  <HomeNeed />
</template>

<style lang="scss" scoped>
.sigrid_main {
  ul>li:nth-child(2n) {
    transform: scaleX(-1) scaleY(1);

    img {
      transform: scaleX(-1) scaleY(1);
    }

    .content {
      transform: scaleX(-1) scaleY(1);
    }
  }

  ul {
    display: grid;
    margin-top: 2.5%;

    @media (max-width: 900px) {
      row-gap: 0;
    }
  }

  li {
    display: grid;
    grid-template-columns: (1fr 1fr);
    margin: 0 auto 4.5%;

    @media (max-width: 1850px) {
      margin: 0 3% 4.5%;

      @media (max-width: 900px) {
        display: flex;
        flex-wrap: wrap-reverse;
        width: 100%;
        justify-items: center;
        margin: 0 auto;
        padding: 0 20px;
      }
    }

    img {
      max-width: 100%;
    }

    .content {
      max-width: 876px;
      padding-left: 16%;
      display: flex;
      flex-direction: column;

      h3 {
        margin-top: 17.5%;
        font-weight: 400;
        line-height: 30px;
        margin-bottom: 17px;
      }

      i {
        display: inline-block;
        width: 30px;
        height: 3px;
        background-color: #0b59dd;
      }

      p {
        margin-top: 15px;
        max-width: 427px;
        font-size: 18px;
        line-height: 32px;
      }

      @media (max-width: 1200px) {
        padding-left: 13%;

        h3 {
          margin-top: 12%;
          font-size: 25px;
          line-height: 30px;
          margin-bottom: 12px;
        }

        i {
          display: inline-block;
          width: 30px;
          height: 3px;
          background-color: #0b59dd;
        }

        p {
          max-width: 90%;
          margin-top: 12px;
          line-height: 22px;
          font-size: 16px;
        }

        @media (max-width: 900px) {
          padding-left: 10px;

          h3 {
            font-size: 20px;
            margin-top: 5%;
            margin-bottom: 5px;
          }

          p {
            margin-bottom: 5%;
          }
        }
      }
    }
  }

  ul>li:nth-child(2n) {
    @media (max-width: 900px) {
      width: 100%;
      justify-items: center;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
}

.sigrid_list {
  max-width: 1200px;
  margin: 0 auto 79px;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 27px;
    row-gap: 32px;

    img {
      width: 100%;
    }
  }
}

@media (max-width: 1250px) {
  .sigrid_list {
    padding: 0 1%;
  }
}
</style>
