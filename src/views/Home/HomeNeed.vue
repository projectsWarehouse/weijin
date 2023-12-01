<script lang="ts" setup>
import { ref } from "vue";
const input = ref({
  name: '',
  number: '',
  string: ''
});

</script>
<template>
  <div class="need">
    <div>
      <div class="demand">朋友，请填写您的需求提交给我们</div>
      <el-form>
        <el-form-item><el-input class="angle" v-model="input.name" placeholder="称呼姓名" /></el-form-item>
        <el-form-item><el-input class="phone angle" v-model="input.number" placeholder="联系电话" /></el-form-item>
        <el-form-item><el-input resize="none" type="textarea" class="need_depict angle " v-model="input.string"
            placeholder="简单描述您的项目类型以及需求，如区块链开发、交易所、dapp、公链、钱包、合约等" /></el-form-item>
        <el-form-item>
          <el-button class="submit">提交项目需求</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.need {
  margin-top: 90px;
  max-width: 1200px;
  max-height: 551px;
  margin: 0 auto;
  background: #f8f8f8;
  padding: 4.3% 5.4% 4.4%;

  @media (max-width:1250px) {
    margin: 0 20px;
  }
}

.demand {
  font-size: 26px;
  line-height: 26px;
  margin-bottom: 4.2%;
}

@media (max-width:700px) {
  .need {
    .demand {
      font-size: 20px;
      line-height: 20px;
    }

    .angle {
      height: 43px;
      font-size: 15px;
      margin-bottom: 10px
    }

    .submit.submit {
      height: 45px;
      font-size: 18px;
    }

    div {
      .el-form>.el-form-item:nth-child(-n+2) {
        width: 100%;

      }

      .el-form-item:nth-child(-n+3) {
        margin-bottom: 0;

      }
    }
  }



}
.angle {
  --el-input-border-radius: none;
  font-size: 18px;
  color: #a0a1a3;
  height: 62px;
}
.el-form {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.el-form-item:nth-child(-n+3) {
  margin-bottom: 28px;
}

.el-form>.el-form-item:nth-child(-n+2) {
  width: 49%;
}

.el-form>.el-form-item:nth-child(+n+3) {
  width: 100%;
}

.submit {
  margin: 4.2% 0 0;
  width: 100%;
  height: 66px;
  font-size: 26px;
  --el-button-bg-color: #f8f8f8;
  border-radius: initial;
}</style>