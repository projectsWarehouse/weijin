<script lang="ts" setup>
import HomeNeed from "./Home/HomeNeed.vue";
</script>
<template>
  <div class="w">
    <div class="card-list">
      <div v-for="v in 8" :key="v">
        <div class="card">
          <img src="@/assets/img/web-build-one-img-1@2x.png" alt="" />
          <div class="key">交易所源码</div>
          <div class="val">
            OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币
            预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定
          </div>
        </div>
      </div>
    </div>
    <div class="card-list-1">
      <div>
        <div v-for="v in 6" :key="v">
          <div class="card">
            <div class="name">
              <img src="@/assets/img/_81@2x.png" alt="" />
              商务立项对接项目
            </div>
            <div class="val">
              商务人员对项目有整体把控,明确产品类型和开发周期,
              以及时间节点.确定项目组的人员安排.
            </div>
            <div class="key">01</div>
          </div>
        </div>
      </div>
    </div>
    <HomeNeed />
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 92px;
  .card {
    margin: 0 auto;
    max-width: 714px;
    img {
      width: 100%;
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
.card-list-1 {
  background: #2b2a30;
  padding: 5% 0;
  margin-top: 10%;
  margin-bottom: 8%;
  & > div {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 128px 0;
    color: #ffffff;
    .card {
      max-width: 330px;
      margin: 0 auto;
      .name {
        display: flex;
        align-items: center;
        font-size: 22px;
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        img {
          width: 69px;
          margin-right: 24px;
        }
      }
      .val {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN;
        font-weight: 400;
        color: #a0a1a3;
        line-height: 26px;
        margin-top: 10px;
      }
      .key {
        margin-top: 49px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -24px;
          width: 25px;
          height: 4px;
          background: #248af5;
        }
      }
    }
  }
}
@media (max-width: 1400px) {
  .card-list {
    display: block;
    .card {
      margin: 8% 5%;
    }
  }
  .card-list-1 {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 960px) {
  .card-list-1 {
    & > div {
      display: block;
      .card {
        /* margin: 0 5%; */
        margin-bottom: 10%;
      }
    }
  }
}
</style>
