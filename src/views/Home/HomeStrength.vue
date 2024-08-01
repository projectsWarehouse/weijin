<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'
const appStore = useAppStore()
const { indexData } = storeToRefs(appStore)
</script>
<template>
  <div class="strength">
    <h3 class="text_center">服务优势</h3>
    <i></i>
    <ul>
      <li v-for="(index, item) in indexData.service_list" :key="item">
        <div class="strength_itme text_center">
          <img :src="index.cover" alt="">
          <h5>{{ index.title }}</h5>
          <p>
            {{ index.content }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 1350px) {
  .strength.strength {
    ul {
      grid-template-columns: auto auto auto;
    }

    @media (max-width: 1000px) {
      h3 {
        font-size: 20px;
      }

      i {
        width: 90px;
        height: 3px;
        margin-top: 5px;
      }

      ul {
        grid-template-columns: auto auto;
        grid-gap: 10px 30px;

        li {
          h5 {
            font-size: 16px;
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
        grid-gap: 30px;

      }
    }
  }


}

.strength {
  width: 100%;
  padding: 4.2% 0 6.3%;

  i {
    width: 100px;
    height: 5px;
    background-color: #0b59dd;
    display: block;
    margin: 12px auto 4.4%;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    grid-gap: 74px 90px;

    li {
      max-width: 258px;
    }

  }


  img {
    max-width: 100%;
  }

  h5 {
    font-size: 20px;
    line-height: 20px;
    padding: 15px 0 10px 0;
  }

  p {
    line-height: 26px;
    font-size: 16px;
  }

}
</style>