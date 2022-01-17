<template>
  <div
      class="grid grid-cols-3 grid-rows-3 ">
    <Square
        v-for="(square) in getBoard"
        @clickOnSquare="clickOnSquare"
        :key="square.clickedPosition"
        :curr-square="square"
        class="cursor-pointer"
        :square-class="`square-${square.clickedPosition}`"
        :class="setSquareBorders( `square-${square.clickedPosition}`)"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

const Square = () => import('./Square/Square.vue');

export default {
  name: 'GameBoard',
  components: {Square},
  computed: {
    ...mapGetters(['getCurrentShapeTurn', 'getBoard']),

  },

  methods: {
    ...mapActions(['onCreateBoard', 'addPlayerMoves', 'onChangeCurrentShapeTurn']),
    clickOnSquare(currSquare) {
      this.addPlayerMoves(currSquare);
      this.onChangeCurrentShapeTurn();
    },
    setSquareBorders(squareClass ) {
      const squareClasses = {
        'square-0': 'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-1': 'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-2': 'border-b-2 lg:border-b-4 border-gray-50',
        'square-3': 'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-4': 'border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-gray-50',
        'square-5': 'border-b-2 lg:border-b-4 border-gray-50',
        'square-6': 'border-r-2 lg:border-r-4 border-gray-50',
        'square-7': 'border-r-2 lg:border-r-4 border-gray-50',
      };
      return squareClasses[ squareClass];
    },
  },
  created() {
    this.onCreateBoard();
  },

};

</script>

<style scoped lang="scss">

</style>
