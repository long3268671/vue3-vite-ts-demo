<template>
  <template v-for="menu in menuList" :key="menu.name">
    <a-sub-menu v-if="menu.children && menu.children?.length" :key="menu.name">
      <template #icon>
        <icon-font :type="menu.meta.icon" />
      </template>
      <template #title>{{ menu.meta.title }}</template>
      <MenuList :menuList="menu.children" />
    </a-sub-menu>
    <a-menu-item :key="menu.name"  class="!mt-0" v-else @click="menuClick(menu.path)">
      <template #icon>
        <icon-font :type="menu.meta.icon" />
      </template>
      <span>{{ menu.meta.title }}</span>
    </a-menu-item>
  </template>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from "vue-router";
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3324866_ycgo953iipo.js',
});
const $router = useRouter()
defineProps({
  menuList: {
    type: Array,
    default: () => []
  }
})
function menuClick(path) {
  $router.push(path)
}
</script>
