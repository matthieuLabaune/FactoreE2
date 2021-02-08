import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import API from '../provider/requestsHandler';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: localStorage.id || '',
    nickname: localStorage.nickname || '',
    password: localStorage.password || '',
    isLoggedIn: localStorage.isLoggedIn || false,
  },
  mutations: {
    SET_ID(state, value) {
      state.id = value;
    },
    SET_NICKNAME(state, value) {
      state.nickname = value;
    },
    SET_PASSWORD(state, value) {
      state.password = value;
    },
    SET_IS_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_LOGOUT(state) {
      state.id = '';
      state.nickname = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context, { id, nickname, password, isLoggedIn }) {
      context.commit('SET_ID', id);
      context.commit('SET_NICKNAME', nickname);
      context.commit('SET_PASSWORD', password);
      context.commit('SET_IS_LOGGED_IN', isLoggedIn);
    },
    logout(context) {
      context.commit('SET_LOGOUT');
      localStorage.removeItem('id');
      localStorage.removeItem('nickname');
      localStorage.removeItem('password');
      localStorage.removeItem('isLoggedIn');
    },
  },
  getters: {
    getId: (state) => {
      return state.id;
    },
    getNickname: (state) => {
      return state.nickname;
    },
    getPassword: (state) => {
      return state.password;
    },
    getIsLoggedIn: (state) => {
      return state.isLoggedIn;
    },
  },
});
