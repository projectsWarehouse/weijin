<script lang="ts" setup>
//
</script>
<template>
  <div class="strength">
    <h3 class="text_center">服务优势</h3>
    <i></i>
    <ul>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
          </p>
        </div>
      </li>
      <li>
        <div class="strength_itme text_center">
          <h5>服务优势</h5>
          <p>
            直销软件开发周期只需5到12个工作日，高效高质是对技术的追求也是对客户的承诺
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
            line-height: 20px;
            padding: 74px 0 10px 0;
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

  }


  .strength_itme {
    width: 258px;
    height: 178px;
    background: url(@/assets/img/组43.png) center top no-repeat;
  }

  h5 {
    font-size: 20px;
    line-height: 20px;
    padding: 74px 0 10px 0;
  }

  p {
    line-height: 26px;
    font-size: 16px;
  }

}
</style>