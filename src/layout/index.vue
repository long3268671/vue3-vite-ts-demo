<template>
  <a-layout class="h-screen">
    <a-layout-header class="!bg-[#fff] border-b-1 !h-48px !leading-48px flex items-center justify-between text-black">
     <head-vue></head-vue>
    </a-layout-header>
    <a-layout-content>
      <a-layout-content class=" p-24px bg-[#fff] !min-h-full !min-w-1280px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout-content>
<!--    <a-layout-footer>Footer</a-layout-footer>-->
  </a-layout>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import { userStore } from "@/store/modules/user";
import headVue from './modules/head.vue';
export default defineComponent({
  components:{
    headVue
  },
  setup() {
    let user_store = userStore();
    const menuList:any[] = user_store.MenuList;
    let selectedKeys = ref<string[]>(["homeIndex"])
    return{
      selectedKeys,
      menuList
    }
  },
})
</script>

