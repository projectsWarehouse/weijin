<script lang="ts" setup>
//
</script>
<template>
  <div class="show">
    <!-- 横幅模块 -->
    <div class="banner">
      <ul>
        <li class="color_fff_bold">
          <i>100<span>+</span></i>
          <p>项目开发</p>
        </li>
        <li class="color_fff_bold">
          <i>100<span>+</span></i>
          <p>项目开发</p>
        </li>
        <li class="color_fff_bold">
          <i>100<span>+</span></i>
          <p>项目开发</p>
        </li>
        <li class="color_fff_bold">
          <i>100<span>+</span></i>
          <p>项目开发</p>
        </li>

      </ul>
    </div>
    <!-- 主体内容模块 -->
    <div class="show_main">
      <ul>
        <li>
          <img src="@/assets/img/web-build-one-img-1.png" alt="">
          <div class="content_box">
            <div class="content">
              <h3>交易所源码</h3>
              <i></i>
              <p class="color_A0A1A3_4">OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币 预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定</p>
            </div>
          </div>
        </li>
        <li>
          <div class="content_box">
            <div class="content">
              <h3>交易所源码</h3>
              <i></i>
              <p class="color_A0A1A3_4">OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币 预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定</p>
            </div>
          </div>
          <img src="@/assets/img/web-build-one-img-1.png" alt="">
        </li>
        <li>
          <img src="@/assets/img/web-build-one-img-1.png" alt="">
          <div class="content_box">
            <div class="content">
              <h3>交易所源码</h3>
              <i></i>
              <p class="color_A0A1A3_4">OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币 预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定</p>
            </div>
          </div>
        </li>
        <li>
          <div class="content_box">
            <div class="content">
              <h3>交易所源码</h3>
              <i></i>
              <p class="color_A0A1A3_4">OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币 预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定</p>
            </div>
          </div>
          <img src="@/assets/img/web-build-one-img-1.png" alt="">
        </li>
        <li>
          <img src="@/assets/img/web-build-one-img-1.png" alt="">
          <div class="content_box">
            <div class="content">
              <h3>交易所源码</h3>
              <i></i>
              <p class="color_A0A1A3_4">OTC-C2C-台约-秒合约-永续合约-量化智能K线 合系统挂单充提币 预警系统安全系统行情多功能版本,多终端设备,源码部署,最快7天上线,安全稳定</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- bottom按钮模块 -->
    <v-btn class="color_A0A1A3_4">
      查看更多
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.show {
  /* 横幅模块 */
  .banner {
    background: url(@/assets/img/show_banner.png);
    background-size: cover;
    background-position: center center;
    opacity: 0.73;
    height: 244px;
    width: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 12%;

      @media (max-width:1900px) {
        padding: 0 0;

        @media (max-width:600px) {
          flex-wrap: wrap;
          padding: 0 20%;

          @media (max-width:450px) {
            padding: 0 8%;

          }

          li {
            width: 50%;
            align-items: center;
          }


        }

      }
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 120px;
      gap: 28px;

      i {
        font-size: 44px;
        line-height: 44px;

        span {
          position: relative;
          bottom: 4px;
        }

      }

      p {
        font-size: 30px;
        line-height: 30px;
      }

      @media (max-width:1000px) {
        gap: 10px;

        i {
          font-size: 30px;
          line-height: 30px;
        }

        p {
          font-size: 20px;
          line-height: 20px;
        }


      }
    }
  }
/* 主体内容模块 */
  .show_main {
    ul {
      display: grid;
      margin-top: 2.5%;
      @media (max-width:900px) {
        row-gap: 0;
      }
    }

    li {
      display: grid;
      grid-template-columns: (1fr 1fr);
      margin: 0 auto 4.5%;
      @media (max-width:1850px) {
        margin: 0 3% 4.5%;

        @media (max-width:900px) {
          display: flex;
          flex-wrap: wrap-reverse;
          ;
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
          background-color: #0B59DD;


        }

        p {
          margin-top: 15px;
          max-width: 427px;
          font-size: 18px;
          line-height: 32px;



        }

        @media (max-width:1200px) {
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
            background-color: #0B59DD;


          }

          p {
            max-width: 90%;
            margin-top: 12px;
            line-height: 22px;
            font-size: 16px;
          }

          @media (max-width:900px) {
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
      @media (max-width:900px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-items: center;
        margin: 0 auto;
        padding: 0 20px;
      }
    }
  }
/* bottom按钮模块 */
  .v-btn--size-default {
    font-size: 20px;
    width: 211px;
    height: 52px;
    border-radius: 0;
    border: 1px solid #ccc;
    margin: 130px auto 148px;
    display: block;

    @media screen and (max-width:1100px) {
      margin: 5% auto 4%;

      @media screen and (max-width:800px) {
        font-size: 90%;
        width: 20%;
        height: 35px;
        padding: 0 15%;
      }
    }
  }

}
</style>