<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { indexData } = storeToRefs(appStore);
</script>
<template>
  <div class="system">
    <div class="system_box">
      <div class="header_content">
        <h3>完善的服务体系</h3>
        <p>
          我们承接数字藏品平台/链游系统开发/区块链DAPP开发/合约交易系统/区块链商城系统开发/链上系统开发等项目
        </p>
      </div>
      <div class="body_carousel">
        <el-scrollbar always="false">
          <ol class="scrollbar-flex-content">
            <li v-for="(index, item) in indexData?.service_structure" :key="item" class="scrollbar-demo-item">
              <img :src="index.cover" alt="" />
              <div class="experience">
                <h5>区块链开发</h5>
                <span class="color_A0A1A3_4">16年开发经验,大量案例</span>
              </div>
            </li>
          </ol>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scrollbar-flex-content {
  max-width: 1600px;
  display: flex;
}

.scrollbar-demo-item {
  height: 420px;
  margin-bottom: 20px;
}

@media (max-width: 1000px) {
  .system.system {
    padding: 10% 20px;

    .header_content {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
        line-height: 17px;
        margin: 5px 0;
        width: 85%;
      }
    }

    .system_box {
      h5 {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }
  }
}


@media (max-width:400px) {
  .el-scrollbar__view {
    .scrollbar-flex-content {
      gap: 20px;

      .scrollbar-demo-item {
        margin-bottom: 20px;
        height: 370px;

        img {
          max-width: 300px;
        }
      }
    }
  }





  .body_carousel li .experience {
    max-width: 357px;
    min-height: 117px
  }
}

.system {
  height: 717px;
  max-width: 100%;
  background: url(@/assets/img/system-background.png) no-repeat;
  background-position: center center;
  padding: 3% 20px;
}

.system_box {
  margin: 0 auto;
  max-width: 1580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.header_content {
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    color: #848d9e;
    font-size: 16px;
    line-height: 16px;
    margin: 16px 0;
    width: 85%;
  }
}

.body_carousel {
  width: 100%;

  ol {
    display: flex;
    gap: 50px;
  }

  li {
    img {
      max-width: 357px;
    }

    .experience {
      max-width: 357px;
      min-height: 117px;
      background: #fff;
      padding: 18px 30px 15px;
    }

    h5 {
      font-size: 26px;
      line-height: 26px;
      margin-bottom: 16px;
    }

    span {
      display: inline-block;
      font-size: 18px;
      line-height: 19px;
    }
  }
}

/* @media (max-width:600px) {


    .system_box {
      margin: 0 auto;
      padding: 0 10%;

      h3 {
        font-size: 25px;
        line-height: 25px;
      }

      p {
        margin: 14px 0 33px;
        color: #848D9E;
        font-size: 16px;
        line-height: 20px;
        width: 100%;
      }


      .system_chunk {
        display: block;
        position: relative;

        .arrow {
          width: 100%;
          gap: 0;
          margin-right: 0;
          padding: 0;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          z-index: 1;
          position: absolute;
          top: 32%;

          img {
            width: 40px;
          }


        }

        ol {
          display: block;
          gap: 0;

          .experience {
            width: 100%;
          }


        }

        ol>li:not(:first-child) {
          display: none;
        }

      }

    }
  } */
</style>
