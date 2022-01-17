import {checkWin, selectAiPosition, createBoard} from '@/service/gameService';
import {loadFromStorage} from '@/service/utils';

const state = loadFromStorage('gameData')?.gameStore || {
  isModal: false,
  activeShape: 'X',
  players: {
    X: {
      name: '',
      positions: [],
    },
    O: {
      name: '',
      positions: [],
    },
  },
  board: [],
  winner: '',
  isAiTurn: false,
};
const actions = {
  toggleModal({commit}) {
    commit('toggleModal');
  },
  addPlayerMoves({commit, state}, playerMoves) {
    commit('addMove', playerMoves);
    commit('updateBoardOnPlayerMove', playerMoves);

  },

  addAiMoves({commit}, aiMoves) {
    commit('addMove', aiMoves);
  },
  checkWin({commit}, playerMoves) {
    const winner = checkWin(playerMoves.shape, playerMoves.positions);
    if (winner) {
      commit('setWinner', winner);
      commit('setModal');
    }
  },
  restartGame({commit}) {
    commit('resetGame');
    commit('toggleModal');
  },
  onSelectAiPosition({commit}, playerMoves) {
    return selectAiPosition(playerMoves);
  },
  onChangeCurrentShapeTurn({commit}) {
    commit('changeCurrentShapeTurn');
  },
  onCreateBoard({commit}) {
    const board = createBoard();
    commit('createBoard', board);
  },
};
const mutations = {
  toggleModal(state) {
    state.isModal = !state.isModal;
  },
  addMove(state, playerMoves) {

    state.players[playerMoves.shape].positions.push(
        playerMoves.clickedPosition,
    );
  },
  setWinner(state, winner) {
    state.winner = winner;
  },
  setModal(state) {
    state.isModal = true;
  },
  changeCurrentShapeTurn(state) {
    if (state.activeShape === 'X') {
      state.activeShape = 'O';
    } else {
      state.activeShape = 'X';
    }
  },
  resetGame(state) {
    state.isModal = false,
        state.winner = null,
        state.activeShape = 'X',
        state.players = {
          X: {
            name: '',
            positions: [],
          },
          O: {
            name: '',
            positions: [],
          },
        };
  },
  createBoard(state, payload) {
    state.board = payload;
  },
  updateBoardOnPlayerMove(state, playerMoves) {
    const newBoard = _.cloneDeep(state.board);
    newBoard.splice(playerMoves.clickedPosition, 1, playerMoves);
    state.board = newBoard;
  },
};
const getters = {
  getPlayers(state) {
    return state.players;
  },
  getWinner(state) {
    return state.winner;
  },
  isModalOpen(state) {
    return state.isModal;
  },
  getCurrentShapeTurn(state) {
    return state.activeShape;
  },
  getBoard(state) {
    return state.board;
  },
  getStore(state) {
    return state;
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
