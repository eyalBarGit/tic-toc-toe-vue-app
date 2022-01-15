import Vue from 'vue';
import Vuex from 'vuex';
import gameStore from './game.STORE';
// import gameSquares from './game.squares.STORE'
Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    gameStore,
    // gameSquares
  },
});
