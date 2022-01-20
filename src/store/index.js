import Vue from 'vue';
import Vuex from 'vuex';
import gameStore from './game.STORE';
import boardStore from './board.STORE';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        gameStore,
        boardStore
    },
});
