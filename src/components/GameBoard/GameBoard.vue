<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <SquareItem
      v-for="square in getBoard"
      :key="square.clickedPosition"
      :curr-square="square"
      :square-class="`square-${square.clickedPosition}`"
      :class="setSquareBorders(`square-${square.clickedPosition}`)"
      class="cursor-pointer"
      @clickOnSquare="clickOnSquare"
    />
    <FadeTransition>
      <template #transition-item>
        <Modal v-if="getWinner" />
      </template>
    </FadeTransition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FadeTransition from '@/components/FadeTransition';
const SquareItem = () => import('./SquareItem/SquareItem.vue');
const Modal = () => import('@/components/Modal/Modal');
import {selectAiPosition} from '@/service/gameService';

export default {
  name: 'GameBoard',
  components: {
    FadeTransition, Modal, SquareItem 
  },

  computed: {
    ...mapGetters('boardStore', ['getBoard']),
    ...mapGetters('gameStore', [
      'getCurrentShapeTurn',
      'getPlayers',
      'getWinner'
    ])
  },

  created() {
    this.onCreateBoard();
  },

  methods: {
    ...mapActions('gameStore', [
      'addPlayerMoves',
      'onChangeCurrentShapeTurn',
      'checkWin'
    ]),
    ...mapActions('boardStore', ['onCreateBoard', 'onUpdateBoard']),

    clickOnSquare(currSquare) {
      this.addPlayerMoves(currSquare);
      this.onUpdateBoard(currSquare);
      console.log('po:', currSquare);
      this.checkWin({
        shape: this.getCurrentShapeTurn,
        positions: this.getPlayers[this.getCurrentShapeTurn].positions
      });
      this.onChangeCurrentShapeTurn();
    },
    onPlayAiTurn() {
      this.clickOnSquare({
        clickedPositions :this.getPlayers[this.getCurrentShapeTurn].positions
      });
    },
    setSquareBorders(squareClass) {
      const squareClasses = {
        'square-0':
          'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-1':
          'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-2': 'border-b-2 lg:border-b-4 border-gray-50',
        'square-3':
          'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-4':
          'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-5': 'border-b-2 lg:border-b-4 border-gray-50',
        'square-6': 'border-r-2 lg:border-r-4 border-gray-50',
        'square-7': 'border-r-2 lg:border-r-4 border-gray-50'
      };
      return squareClasses[squareClass];
    }
  }
};
</script>

<style scoped lang="scss">
.square-enter {
  opacity: 0;
}
.square-enter-active {
  transition: opacity 0.6s ease-in-out;
}
.square-leave-to {
  opacity: 0;
}
.square-leave-active {
  transition: opacity 0.6s ease-in-out;
}
</style>