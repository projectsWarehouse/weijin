<script lang="ts" setup>
import HomeNeed from "./Home/HomeNeed.vue";
</script>

<template>
  <div class="w">
    <div class="contact">
      <div class="contact_descride">
        <h6>徽金网络有限公司专注于区块链开发16年，是互联网行业的践行者</h6>
        <i> </i>
        <p>今朝我欲乘风去，大战雄才高万仞！</p>
        <p>徽金网络如今已突破领域，成为千万级的互联网技术外包公司。</p>
        <p>不远万里，亲力亲为，用主动周到的服务， 努力将项目做到贴近完美</p>
      </div>
      <div class="manner">
        <div>
          <h5>Solution</h5>
          <p>有问题要解决？找我们</p>
          <i></i>
          <div>
            <img src="@/assets/img/contact_img/icon1.png" alt="" />
            <img src="@/assets/img/contact_img/icon2.png" alt="" />
          </div>
        </div>
      </div>
      <HomeNeed />
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

@media (max-width: 700px) {
  .contact .manner {
    /* height: 430px; */
    /* padding-top: 90px; */

    >div div {
      width: 40vw;

      img:nth-child(1) {
        width: 8.3vw;
      }

      img:nth-child(2) {
        width: 10.5vw;
      }

    }

    h5 {
      font-size: 10.8vw;
      line-height: 10.8vw;
    }

    p {
      margin-top: 5.1vw;
      font-size: 4.5vw;
      line-height: 4.5vw;
    }

    i {
      width: 30px;
      height: 2px;
      margin: 26px auto 67px;
    }
  }

}

.manner {
  height: 689px;
  width: 100%;
  background: url(@/assets/img/contact_img/contact_bg.png);
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding-top: 181px;

  >div div {
    width: 280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    img {
      height: 100%;
    }
  }

  h5 {
    font-size: 76px;
    line-height: 76px;
  }

  p {
    margin-top: 36px;
    font-size: 32px;
    line-height: 32px;
  }

  i {
    width: 30px;
    height: 4px;
    background: #fff;
    display: block;
    margin: 26px auto 67px;
  }
}
</style>
