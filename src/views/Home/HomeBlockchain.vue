<script lang="ts" setup>
//
</script>
<template>
  <div class="blockchain_box">
    <div class="text_center">
      <h3>区块链开发服务范围</h3>
      <p>专业开发区块链16年实体公司 百人团队2000+成熟案例</p>
    </div>
    <div class="blockchain_box2">
      <div class="blockchain_header">
        <div>
          <h3 class="color_fff_bold ">区块链开发项目包装一条龙服务商</h3>
          <p>
            支持全终端+全场景区块链系统应用开发，以服务为核心，为客户持续创造价值
          </p>
        </div>
        <img class="img" src="@/assets/img/6932180f9febde74e499c2f2a9b8a75645d8d220f668-LbmMqk_fw1200.png" />
      </div>
      <div class="blockchain_body">
        <ul>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>
          <li>
            <h5 class="color_000_5">交易所开发</h5>
            <i class="color_A0A1A3_4">
              合约交易所-市币交易所-秒合约交易所-永续合
              约交易所-C2C交易所-OTC交易所-现货交易
            </i>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
.blockchain_box {
  background-color: #f5f6f8;
  width: 100%;
  padding-top: 4%;
  min-height: 819px;

  .text_center {
    text-align: center;

    p {
      margin-top: 14px;
      font-size: 16px;
      line-height: 16px;
      padding: 0 20px;
      color: #A0A1A3;
    }
  }
}

.blockchain_box2 {
  max-width: 1400px;
  margin: 40px auto 0;
  border-radius: 14px;
  background-color: white;
}

@media (max-width:1400px) {
  .blockchain_box {
    padding-top: 2%;
    padding-bottom: 4%;
    min-height: 100%;

    .text_center {
      h3 {
        font-size: 25px;
      }
    }
  }

  .blockchain_box2 {
    margin: 2% 5% 0;

    .blockchain_header {
      padding: 0 2%;
      height: 95px;

      img {
        width: 140px;
        margin-bottom: 0;
        margin-right: 0;
      }

      h3 {
        font-size: 20px;
        line-height: 20px;
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        line-height: 14px;
      }
    }

    .blockchain_body {
      ul {
        grid-template-columns: auto auto;
        grid-gap: 30px 39px;

        li {
          width: 100%;
          padding: 20px 20px 30px;
          min-height: 100%;
        }

        h5 {
          background-image: url(@/assets/img/微信截图_20231114202458.png);
          width: 80%;
          height: 32px;
          font-size: 20px;
          padding-left: 45px;
        }

        i {
          display: inline-block;
          margin-top: 0;
          line-height: 25px;
          font-size: 14px;

        }
      }
    }
  }
}

@media (max-width:920px) {
  .blockchain_box {
    padding-top: 2%;

    .text_center {
      h3 {
        font-size: 20px;
      }

      p {
        margin-top: 5px;
      }
    }
  }

  .blockchain_box2 {
    margin: 2% 20px 0;

    .blockchain_header {
      padding: 0 1%;
      align-items: flex-start;
      height: 85px;


      img {
        width: 110px;
        margin-bottom: 0;
        margin-right: 0;
      }

      h3 {
        margin-top: 10px;
        font-size: 20px;
      }

      p {
        margin-top: 5px;
        padding-bottom: 5px;
        font-size: 15px;
        line-height: 20px;
      }
    }

    .blockchain_body {
      padding: 31px 10px 36px;

      ul {
        grid-template-columns: auto;
        padding: 0 10px;
        grid-gap: 30px;

        li {
          min-height: 100px;
          padding: 30px 20px;

        }
      }
    }
  }
}

@media (max-width:580px) {
  .blockchain_box {
    padding-top: 2%;

    .text_center {
      p {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }

  .blockchain_box2 {
    .blockchain_header {
      padding: 0 1%;
      align-items: flex-start;
      height: 70px;


      img {
        width: 80px;
        margin-top: 3px;
        margin-right: 0;
      }

      h3 {
        margin-top: 10px;
        font-size: 16px;
      }

      p {
        padding-bottom: 5px;
        font-size: 12px;
        line-height: 16px;
      }
    }

    .blockchain_body {
      li {
        h5 {
          background-image: url(@/assets/img/微信截图_20231114202458.png);
          width: 100%;
          height: 32px;
          font-size: 16px;
          line-height: 32px;
          padding-left: 45px;
        }

        i {
          display: inline-block;
          margin-top: 5px;
          line-height: 20px;
          font-size: 12px;

        }
      }

    }
  }

}




.blockchain_header {
  margin: 0 auto;
  height: 128px;
  position: relative;
  background-image: url(@/assets/img/822ba5ec199a1683e95569d4bed9b2a2fac75a01c31b6-bI4Jh0_fw658webp.png);
  background-size: 100% 100%;
  padding: 0 3.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 40px;
    margin-bottom: 15px;
  }
}

p {
  margin-top: 18px;
  padding-bottom: 2%;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
}

.blockchain_body {
  width: 100%;
  padding: 31px 46px 36px;

  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px 39px;
  }

  li {
    min-height: 180px;
    background: #F5F6F8;
    border-radius: 14px;
    padding: 28px 20px 10% 27px;

    h5 {
      background-image: url(@/assets/img/微信截图_20231114202458.png);
      width: 100%;
      height: 32px;
      font-size: 23px;
      padding-left: 45px;
    }

    i {
      display: inline-block;
      margin-top: 10px;
      line-height: 30px;

    }
  }


}
</style>