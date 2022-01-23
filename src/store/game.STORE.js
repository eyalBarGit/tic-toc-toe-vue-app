import {checkWin, selectAiPosition} from '@/service/gameService';
import service from '@/service/utils';

const state = service.loadFromStorage('gameData')?.gameStore || {
    isModal: false,
    activeShape: 'X',
    players: {
        X: {
            name: '',
            positions: []
        },
        O: {
            name: '',
            positions: []
        }
    },
    winner: '',
    isAiTurn: false
};
const actions = {
    toggleModal({commit}) {
        commit('toggleModal');
    },
    addPlayerMoves({commit}, playerMoves) {
        commit('addMove', playerMoves);
    },

    addAiMoves({commit}, aiMoves) {
        commit('addMove', aiMoves);
    },
    checkWin({commit}, {shape, positions}) {
        const winner = checkWin(shape, positions);
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
    }


};
const mutations = {
    toggleModal(state) {
        state.isModal = !state.isModal;
    },
    addMove(state, playerMoves) {
        state.players[playerMoves.shape].positions.push(playerMoves.clickedPosition);
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
                positions: []
            },
            O: {
                name: '',
                positions: []
            }
        };
    }
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
    getStore(state) {
        return state;
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
};
