<template>
  <div
      class="grid grid-cols-3 grid-rows-3 ">
    <Square
        v-for="(square, index) in squares"
        @clickOnSquare="clickOnSquare(index)"
        :key="square.id"
        :curr-square="square"
        class="cursor-pointer rounded"
        :class="`square-${square.id}`"
    />
  </div>
</template>

<script>
const Square = () => import('./Square/Square.vue');

export default {
  name: 'GameBoard',
  components: {Square},
  data() {
    return {
      squares: [
        {id: '0', shape: ''},
        {id: '1', shape: ''},
        {id: '2', shape: ''},
        {id: '3', shape: ''},
        {id: '4', shape: ''},
        {id: '5', shape: ''},
        {id: '6', shape: ''},
        {id: '7', shape: ''},
        {id: '8', shape: ''},
      ],
    };
  },
  methods: {
    clickOnSquare(squareId) {
      const currSquare = this.getSquare(squareId);
      currSquare.shape === 'O'
          ? (currSquare.shape = 'X')
          : (currSquare.shape = 'O');
      console.log('currSquare:', currSquare.id);
    },
    getSquare(squareId) {
      return this.squares[squareId];
    },
    setSquareBorders(squareClass) {
      const squareClasses = {
        ['square-0']: 'border-b-2 md:border-b-4 border-r-4 border-gray-50',
        ['square-1']: 'border-b-2 md:border-b-4 border-r-4 border-gray-50',
        ['square-2']: 'border-b-2 md:border-b-4 border-gray-50',
        ['square-3']: 'border-b-2 md:border-b-4 border-r-4 border-gray-50',
        ['square-4']: 'border-b-2 md:border-b-4 border-r-4 border-gray-50',
        ['square-5']: 'border-r-4 border-gray-50',
        ['square-6']: 'border-4 border-gray-50',
        ['square-7']: 'border-r-4 border-gray-50',
      };
      return squareClasses[squareClass];
    },
  },
};
</script>

<style scoped lang="scss">
.square-0,
.square-1,
.square-3,
.square-4,
{
  border-right: 12px solid white;
  border-bottom: 12px solid white;
  border-radius: 2px;
}

.square-5,
.square-2 {
  border-bottom: 12px solid white;
  border-radius: 2px;

}

.square-6,
.square-7,
{
  border-right: 12px solid white;
  border-radius: 2px;

}

</style>
