<script setup lang="ts">
import { ref } from 'vue';
// import {useStore} from 'vuex'
import { useStore } from '@/store/index';
defineProps<{ msg: string }>();

const store = useStore();
console.log(store);
function increment() {
  store.dispatch('increment');
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="increment">
    count is: {{ store.state.count }}
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
