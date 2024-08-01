<script lang="ts" setup>
import { aboutList } from '@/api/api'
import { onMounted, ref } from 'vue';

const list = ref([{
  id: Number,
  title: String,
  content: String,
  created_at: String
}])
const loading = ref(true)
onMounted(() => {
  initData()
})
const initData = async () => {
  const res: any = await aboutList()
  if (res.code === 200) {
    list.value = res.data
    loading.value = false
    console.log(list);

  }

}

</script>

<template>
  <div class="w">
    <div class="descride" v-if="!loading">
      <div v-for="itme in list" :key="itme.id">
        <h6>{{ itme.title }}</h6>
        <i></i>
        <p v-html="itme.content"></p>
      </div>
    </div>
    <!-- <div class="descride_bg_dtp">
      <div>
        <h3>DESIGN IDEA</h3>
        <span>设计理念</span>
      </div>
      <div class="dtp">
        <div v-for="item in 3" :key="item">
          <img src="@/assets/img/aboutprep_img/dtp_1.png" alt="">
          <div class="the">
            <h6>精益求精</h6>
            <p>如果您让我们做一个网站，我们所想的是：有没有比网站效果更好的建议？除了网站还可以做什么？在网站之后应该做什么？我们将提出行之有效的可执行的解决方案。</p>
            <i></i>
          </div>
        </div>
      </div>
    </div> -->
    <div class="aboutprep">
      <h3 class="text_center">用心成就美好</h3>
      <i>用不同的眼光看世界，均会发现不同的精彩</i>
      <ul>
        <li v-for="itme in 8" :key="itme">
          <div class="aboutprep_itme text_center">
            <h5>7*24h客服</h5>
            <p>
              徽金网络客服7*24h客服在线咨询沟通，确保客户需求对接
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.descride {
  /* margin: 120px auto 126px; */
  margin: 6.2% auto 6.7%;
  padding: 0 20px;
  text-align: center;

  h6 {
    font-size: 30px;
    line-height: 44px;
    font-weight: bold;
  }

  i {
    content: "";
    display: inline-block;
    width: 150px;
    height: 4px;
    /* margin-top: 37px; */
    margin-top: 2%;
    background: #0b59dd;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    color: #5E5E5E;
  }

  p:nth-child(3) {
    /* margin-top: 49px; */
    margin-top: 2.5%;
  }

  @media (max-width:820px) {
    h6 {
      font-size: 20px;
      line-height: 30px;
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

  @media (max-width:460px) {
    h6 {
      font-size: 16px;
      line-height: 20px;
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


@media (max-width:1920px) {
  .descride_bg_dtp.descride_bg_dtp {
    .dtp {
      margin: 0 10px;
    }


  }


}

@media (max-width:1620px) {
  .w .descride_bg_dtp {
    align-items: flex-start;

    >div:nth-child(1) {
      padding-left: 3.8%;
      padding-right: 0;
    }
  }
}

@media (max-width: 1200px) {
  .w .descride_bg_dtp {
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    h3 {
      font-size: 6.1vw;
      line-height: 6.1vw;
      margin: 2vw 0;

    }

    span {
      text-align: center;
      font-size: 3vw;
      line-height: 30px;
      margin: 2vw 0;
    }


    >div:nth-child(1) {
      padding-left: 3.8%;
      text-align: center;
    }

    .dtp {
      display: flex;
      flex-direction: column;
      height: 100%;

      >div {
        display: block;
      }

      .the {
        max-width: 778px;

        min-height: 100%;

        h6 {
          margin-top: 10px;
        }

        i {
          margin-bottom: 2%;
        }
      }
    }


  }

}

@media (max-width: 800px) {
  .w .descride_bg_dtp {
    .dtp {
      .the {
        h6 {
          font-size: 18px;
          line-height: 18px;
          margin-bottom: 2%;
        }

        p {
          font-size: 13px;
          line-height: 26px;
        }

        i {
          margin-top: 3%;
          height: 2px;
        }
      }
    }


  }
}


.descride_bg_dtp {
  width: 100%;
  height: 1243px;
  background-image: url(@/assets/img/aboutprep_img/descride_bg.png);
  background-size: cover;
  background-position: center;
  /* padding-left: 360px; */
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: #fff;

  >div:nth-child(1) {
    padding-right: 1049px;
  }

  h3 {
    font-size: 74px;
    line-height: 74px;
    margin-bottom: 19px;
  }

  span {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 51px;
    display: block;
  }

  .dtp {
    display: flex;
    flex-direction: column;

    >div {
      display: flex;
    }

    img {
      max-width: 100%;

    }

    .the {
      max-width: 782px;
      min-height: 254px;
      background: #313337;
      /* padding: 40px 40px 40px 56px;  */
      padding: 2.6% 3.1% 3.6%;

      h6 {
        font-size: 22px;
        line-height: 22px;
        /* margin-bottom: 40px; */
        margin-bottom: 5.8%;
      }

      p {
        font-size: 14px;
        line-height: 26px;
      }

      i {
        width: 76px;
        height: 4px;
        background: #0b59dd;
        display: block;
        /* margin-top: 36px; */
        margin-top: 5.5%;
      }
    }

    >div:nth-child(2) {
      flex-direction: row-reverse;

    }
  }

}


















@media (max-width: 1350px) {
  .aboutprep.aboutprep {
    ul {
      grid-template-columns: auto auto auto;
    }

    @media (max-width: 1000px) {
      h3 {
        font-size: 20px;
      }

      ul {
        grid-template-columns: auto auto;
        grid-gap: 10px 50px;

        li {
          h5 {
            font-size: 16px;
            line-height: 20px;
            padding: 100px 0 22px 0;

          }

          p {
            line-height: 20px;
            font-size: 15px;
          }
        }
      }
    }

    @media (max-width: 580px) {
      ul {
        grid-template-columns: auto;
        grid-gap: 10px;

      }
    }
  }


}

.aboutprep {
  width: 100%;
  /* padding: 4.2% 0 6.3%; */
  padding: 4.2% 0 0;

  i {
    text-align: center;
    display: block;
    margin: 2% auto 3.3%;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    grid-gap: 90px 117px;
  }

  .aboutprep_itme {
    width: 236px;
    height: 218px;
    background: url(@/assets/img/aboutprep_img/aboutprep_icon.png) center top no-repeat;
  }

  h5 {
    font-size: 20px;
    line-height: 20px;
    padding: 100px 0 22px 0;
  }

  p {
    line-height: 26px;
    font-size: 16px;
  }

}
</style>