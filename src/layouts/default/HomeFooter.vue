<script lang="ts" setup>
import { useAppStore } from "@/store/app"
import { storeToRefs } from 'pinia'
const appStore = useAppStore()
const { indexData } = storeToRefs(appStore)
</script>
<template>
  <div class="footer w">
    <div class="footer_box max_width">
      <div class="contact_left">
        <h4>徽金网络就在您身边</h4>
        <i>我们拥有多年的产品设计经验，在产品功能设计上有独到的见解页面视觉设计风格明显，产品开发代码规范，项目管控严格，保证项目开发周期，按时上线运营</i>
        <el-button type="primary" plain>联系我们</el-button>
      </div>
      <div class="contact_between">
        <div>
          <h5>以区块链的方式重塑产业结构</h5>
          <div class="contact_numder">
            <i>联系电话</i>
            <p>{{ indexData.contact_phone }}</p>
          </div>
        </div>
        <span>2023 STSS Limited. All right reserved.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 6%;
  height: 752px;
  background-image: url(@/assets/img/footer-background.png);
  background-size: cover;
  background-position: center center;
  color: #fff;
}

.footer_box {
  max-width: 1220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
}

@media (max-width:1000px) {
  .footer_box {
    .contact_left {
      h4 {
        font-size: 22px;
        line-height: 25px;
        margin-bottom: 3%;
      }

      i {
        font-size: 12px;
        line-height: 15px;
        width: 90%;
      }

      .el-button--primary {
        font-size: 12px;
        height: 32px;
        width: 120px;
        margin-top: 4%;

      }
    }

    .contact_between {
      h5 {
        font-size: 18px;
        line-height: 20px;
        width: 50%;
      }

      span {
        font-size: 12px;
      }

      .contact_numder {
        width: 100px;
        height: 45px;
        border: 1px solid #fff;
        padding: 2px 10px 0;

        i {
          font-size: 12px;
          line-height: 12px;
        }

        p {
          font-size: 12px;
          line-height: 12px;
        }


      }
    }
  }
}

.contact_left {
  margin-top: 143px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  i {
    font-size: 16px;
    line-height: 25px;
    max-width: 600px;
  }

  h4 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 3%;
  }

  .contact_left .el-button span {
    color: #248af5;
  }

  .el-button--primary {
    height: 52px;
    width: 211px;
    border-radius: initial;
    font-size: 20px;
    --el-button-bg-color: none;
    --el-button-border-color: none;
    --el-color-primary: #248af5;
    margin-top: 4%;
  }

}

.contact_between {
  width: 100%;

  >div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    font-size: 30px;
    line-height: 30px;
  }

  .contact_numder {
    width: 190px;
    height: 66px;
    border: 1px solid #fff;
    padding: 10px 0 0 18px;

    p {
      font-weight: bold;
      font-size: 21px;
      line-height: 21px;
      display: block;
    }
  }

  span {
    font-size: 16px;
    color: #a1a3b2;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 41px;

  }
}
</style>