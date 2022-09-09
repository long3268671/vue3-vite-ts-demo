<template>
  <div class="login">
    <a-button @click="login">登录</a-button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router';
import { userStore } from '@/store/modules/user'
export default defineComponent({
  setup(){
    const user_store = userStore();
    const $router = useRouter();
    function login() {
      let userInfo = {
        userName:'李四',
        tel:'123456789',
        passWord:'123456'
      }
      localStorage.setItem('token', 'afjskafjksafjsk');
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      user_store.$patch({
        userInfo:userInfo,
        token:'afjskafjksafjsk'
      })
      $router.push('/')
    }
    return {
      login
    }
  }
})
</script>
