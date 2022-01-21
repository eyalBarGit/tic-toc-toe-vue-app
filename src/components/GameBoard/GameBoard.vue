<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <transition name="square"
      v-for="square in getBoard"
      :key="square.clickedPosition"
    >
    <SquareItem
      :curr-square="square"
      :square-class="`square-${square.clickedPosition}`"
      :class="setSquareBorders(`square-${square.clickedPosition}`)"
      class="cursor-pointer"
      @clickOnSquare="clickOnSquare"
    />
    </transition>
    <transition name="fade">
          <Modal v-if="getWinner" />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
const SquareItem = () => import('./SquareItem/SquareItem.vue');
const Modal = () => import('@/components/Modal/Modal');

export default {
  name: 'GameBoard',
  components: { Modal, SquareItem },

  computed: {
    ...mapGetters('boardStore', ['getBoard']),
    ...mapGetters('gameStore', [
      'getCurrentShapeTurn',
      'getPlayers',
      'getWinner',
    ]),
  },

  created() {
    this.onCreateBoard();
  },

  methods: {
    ...mapActions('gameStore', [
      'addPlayerMoves',
      'onChangeCurrentShapeTurn',
      'checkWin',
    ]),
    ...mapActions('boardStore', ['onCreateBoard', 'onUpdateBoard']),

    clickOnSquare(currSquare) {
      this.addPlayerMoves(currSquare);
      this.onUpdateBoard(currSquare);
      this.checkWin({
        shape: this.getCurrentShapeTurn,
        positions: this.getPlayers[this.getCurrentShapeTurn].positions,
      });
      this.onChangeCurrentShapeTurn();
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
        'square-7': 'border-r-2 lg:border-r-4 border-gray-50',
      };
      return squareClasses[squareClass];
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter{
  opacity: 0;
}.fade-enter-active{
  transition: opacity 0.2s ease-in-out;
}.fade-leave-to{
  opacity: 0;
}.fade-leave-active{
  transition: opacity 0.2s ease-in-out;
}
.square-enter{
  opacity: 0;
}.square-enter-active{
  transition: opacity 0.6s ease-in-out;
}.square-leave-to{
  opacity: 0;
}.square-leave-active{
  transition: opacity 0.6s ease-in-out;
}



</style>
