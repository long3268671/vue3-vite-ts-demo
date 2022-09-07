import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

export interface State {
  // TODO: 根据 state 实际内容修改
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol('store_key'); // key 内容随便填

export default createStore<State>({
  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment');
    }
  },
  modules: {}
});
export function useStore() {
  return baseUseStore(key);
}
