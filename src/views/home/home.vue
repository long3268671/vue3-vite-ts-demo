<template>
  <div
    class="
      p-2
      m-3
      bg-[#986578]
      border-hex-000000 border-2px
      rounded-10px
      border-dashed
      animate-head-shake
    "
  >
    这是home.vue
    <button
      L:sm="bg-red-600 text-red-500 font-bold hover:text-yellow-800"
      L:md="bg-[#ff0000]  text-white hover:text-blue-700"
      class="text-[14px]"
      @click="addcount"
    >
      count+1
    </button>
    <br />
    <p>store.count:{{ count }}</p>
    <p>store.msg:{{ msg }}</p>
    <div class="box">
      <p class="boxText">111111</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { appStore } from "@/store/modules/app";
import {message} from "ant-design-vue";
// import { storeToRefs } from 'pinia'
export default defineComponent({
  setup() {
    console.log(import.meta.env.VITE_APP_BASE_API);
    console.log(import.meta.env.VITE_APP_PROJECT_ENV);
    console.log(import.meta.env.VITE_APP_PLATFORM_NAME);
    const app_store = appStore();
    const addcount = () => {
      app_store.$patch({
        count: (app_store.count += 1),
        msg: (app_store.msg += "!"),
      });
      console.log(222222, app_store);
      message.info('测试')
      // app_store.count += 1;
      // app_store.changeCount()
    };
    interface SAYHI{
        <T>(str:T):T
    }
    interface Persion{
        name:String,
        age:number,
        sayHi:SAYHI
    }

    return {
      ...toRefs(app_store),
      addcount,
    };
  },
});
</script>
<style  lang="less" scoped>
  .box{
    @apply font-bold py-2 px-4 rounded;
    .boxText{
      @apply p-0 m-0 text-red-500;
    }
  }

</style>
