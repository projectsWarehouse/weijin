<script lang="ts" setup>
import { onMounted } from "vue";
import { useAppStore } from "./store/app";
const appStoreStore = useAppStore();
onMounted(() => {
  appStoreStore.setIndex()
});
// const index1 = async () => {
//   const res: any = await index();
//   if (res.code === 200) {
//     appStoreStore.setIndex(res.data);
//   }
// };
</script>

<template>
  <router-view />
</template>
<style scoped></style>
