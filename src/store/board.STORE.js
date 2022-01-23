import {createBoard} from '@/service/gameService';

const state = {
  board:[]

};
const actions = {
  onUpdateBoard({commit}, playerMoves){
    commit('updateBoardOnPlayerMove', playerMoves);
  },
  onCreateBoard({commit}) {
    const board = createBoard();
    commit('createBoard', board);
  }
};

const mutations = {
  updateBoardOnPlayerMove(state, playerMoves) {
    const newBoard = _.cloneDeep(state.board);
    newBoard.splice(playerMoves.clickedPosition, 1, playerMoves);
    state.board = newBoard;
  },
  createBoard(state, payload) {
    state.board = payload;
  }
};
const getters = {
  getBoard(state) {
    return state.board;
  }
};



export default {
  namespaced:true,
  state,
  mutations,
  getters,
  actions
};
