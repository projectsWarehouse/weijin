<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
const timer = ref(false);
const tab = ref("0");

// 视口宽度
const vieWidth = ref(
  document.documentElement.clientWidth || document.body.clientWidth
);
onMounted(() => {
  window.onresize = async () => {
    vieWidth.value =
      document.documentElement.clientWidth || document.body.clientWidth;
  };
});
//监听并更新视口宽度
watch(vieWidth, () => {
  // 为了避免频繁触发导致页面卡顿，使用定时器
  if (!timer.value) {
    vieWidth.value = document.body.clientWidth;
    timer.value = true;
    setTimeout(function () {
      timer.value = false;
    }, 200);
  }
});
</script>
<template>
  <div class="header">
    <img src="@/assets/img/header.png" alt="" />
    <div class="header_box">
      <div class="nav">
        <div class="icon"></div>
        <v-tabs v-if="vieWidth > 1000" v-model="tab">
          <v-tab @click="$router.push('/')" value="1">首页</v-tab>
          <v-tab @click="$router.push('/blockchain')" value="2"
            >区块链系统</v-tab
          >
          <v-tab value="3">商城系统</v-tab>
          <v-tab value="4">成功案列</v-tab>
          <v-tab value="5">关于我们</v-tab>
          <v-tab value="6">新闻中心</v-tab>
          <v-tab value="7">联系方式</v-tab>
        </v-tabs>
        <div class="nav1" v-else>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" icon="mdi-menu" v-bind="props"> </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>首页</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>区块链系统</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>商城系统</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>成功案列</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>关于我们</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>新闻中心</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>联系方式</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
  }
}

.header_box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.v-btn {
  --v-theme-primary: initial !important;
  box-shadow: none;
}

@media (max-width: 1400px) {
  .header_box {
    .nav {
      padding: 0 50px;
      padding: 0 4%;
    }

    .icon {
      margin-left: 50px;
      margin-left: 4.5%;
    }
  }
}

@media (max-width: 700px) {
  .header_box {
    .nav {
      margin-top: 2%;
      .v-btn--icon.v-btn--density-default {
        width: 30px;
        height: 30px;
      }

      .v-list-item-title {
        font-size: 12px;
        line-height: 14px;
      }

      .v-list-item {
        padding: 2px 5px;
      }

      .v-list-item--density-default.v-list-item--one-line {
        min-height: 35px;
      }

      .icon {
        width: 20px;
        height: 20px;
        background-color: white;
      }
    }
  }
}

.nav {
  margin: 0 auto;
  margin-top: 1.6%;
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 40px;
    height: 40px;
    background-color: white;
  }

  .v-tab.v-tab {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
