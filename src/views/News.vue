<script lang="ts" setup>
import { newCate, newList } from "@/api/api";
import { onMounted, ref } from "vue";

const menuList = ref([
  {
    id: Number,
    name: String,
  },
]);
const list = ref([
  [
    {
      id: Number,
      title: String,
      cover: String,
      created_at: String,
      content: String,
    },
  ],
]);
const tab = ref(null);
const loading = ref(true);
onMounted(() => {
  initData();
});
const initData = async () => {
  const res: any = await newCate();
  if (res.code === 200) {
    menuList.value = res.data;
    tab.value = res.data[0]?.id;
    //.map方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
    //j代表函数迭代res.data数组中的每个元素
    //i表示数组中当前元素的索引res.data
    for (let i in res.data) {
      getList(res.data[i], i);
    }
    // res.data.map((j: any, i: any) => {
    //   getList(j, i);
    // });
  }
};

const getList = async (j: any, i: any) => {

  const res: any = await newList({
    page: 1,
    page_num: 100,
    category_id: j.id,
  });
  if (res.code === 200) {
    list.value[i] = res.data;
    loading.value = false;
    console.log(list.value);
  }
};

</script>

<template>
  <div class="w">
    <div class="news" v-if="!loading">
      <v-card style="box-shadow:none">
        <div class="news_appbar">
          <div>
            <v-tabs v-model="tab" color="#0B59DD" bg-color="none" :hide-slider="true">
              <v-tab class="aa" :value="j.id" v-for="(j, i) in menuList" :key="i">{{ j.name
              }}</v-tab>
            </v-tabs>
          </div>
        </div>
        <v-window v-model="tab">
          <v-window-item :value="j.id" v-for="(j, i) in menuList" :key="i">
            <div class="news_list_box" v-for="w in list[i]" :key="w.id" @click="$router.push(`/new?id=${w.id}`)">
              <img :src="w.cover" alt="" />
              <div class="news_caption">
                <h6>{{ w.title }}</h6>
                <p v-html="w.content"></p>
                <span>{{ w.created_at }}</span>
              </div>
              <div class="arrows">
                <img src="@/assets/img/news_img/news_arrows.png" alt="" />
              </div>
            </div>
          </v-window-item>
        </v-window>

      </v-card>
    </div>
    <!-- <div class="laypage">
      <el-pagination ref="#0B59DD" background layout="prev, pager, next" :total="100" />
    </div> -->
  </div>
</template>

<style lang="scss" >
.news_appbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 142px;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;

  >div {
    display: flex;
    font-size: 18px;
    line-height: 18px;
    width: 1200px;

    .v-slide-group__content {
      justify-content: space-around;
    }

    .v-slide-group {
      width: 100%;
    }

    .v-btn--size-default {
      --v-btn-size: none
    }

    .v-btn--size-default {
      padding: 0;
    }

    .v-tab.v-tab {
      min-width: 0;
    }
  }
}

@media (max-width: 1200px) {
  .news {
    .news_appbar {
      height: 120px;

    }

    .news_list_box {
      margin: 0.8% 10px;
    }
  }
}

@media (max-width: 800px) {
  .news {
    .news_appbar {
      height: 15vw;

      .v-tabs--density-default {
        --v-tabs-height: 35px;
      }

      .v-btn--size-default {
        padding: 0px 15px;
      }
    }

    .news_list_box {
      display: flex;
      flex-direction: column;
      max-height: 100%;

      >img {
        max-width: 100%;
      }

      .news_caption {
        width: 100%;
      }

      .arrows img {
        margin-bottom: 20px;
      }
    }
  }
}

.news_list_box {
  margin: 0.8% auto;
  max-width: 1200px;
  max-height: 144px;
  border: 1px solid #f2f2f2;
  display: flex;

  >img {
    max-width: 160px;
    max-height: 100%;
    margin: auto 0;
  }


  .news_caption {
    /* padding: 16px 0 0 24px; */
    padding: 1.3% 2%;
    width: 68%;

    h6 {
      font-size: 18px;
      line-height: 18px;
      /* margin-bottom: 18px; */
      margin-bottom: 2.5%;
      font-weight: bold;
    }

    p,
    span {
      font-size: 14px;
      line-height: 19px;
      color: #a0a1a3;
    }

    span {
      display: block;
      /* margin-top: 15px; */
      margin-top: 2%;
    }
  }

  .arrows {
    flex: 1;
    margin: auto 0;
    text-align: right;
    padding-right: 5.2%;

    img {
      max-width: 100%;
    }
  }
}

.laypage {
  display: flex;
  justify-content: center;
  border: 1px solid red;
  max-width: 1200px;
  margin: 65px auto;

  .el-pagination {
    --el-pagination-button-height: 28px;
    --el-pagination-button-width: 38px;
    --el-pagination-font-size: 12px;
    --el-fill-color: none;
  }

  .el-pager li {
    border: 1px solid red;
  }

  .btn-prev,
  .is-first {
    background-color: none;
    --el-disabled-bg-color: none;
  }
}
</style>
