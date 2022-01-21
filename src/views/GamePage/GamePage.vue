<template>
  <div class="h-screen flex flex-col justify-between text-center md:px-20">
    <div>
      <div class="text-6xl text-white">Welcome to Game Page</div>
      <div class="text-xl mt-5">
        Current Turn:
        <span class="text-3xl text-white"> {{ getCurrentShapeTurn }}</span>
      </div>
    </div>

    <div class="h-full w-full flex justify-center align-center">
      <GameBoard
        class="game-board h-4/5 lg:h-2/4 w-4/4 lg:w-2/4 flex flex-grow-0 bg-indigo-100 bg-opacity-25 rounded-2xl"
      />
    </div>

    <div class="h-20 w-full" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const GameBoard = () => import('../../components/GameBoard/GameBoard.vue');

export default {
  name: 'GamePage',
  components: { GameBoard },

  computed: {
    ...mapGetters('gameStore', [
      'getCurrentShapeTurn',
      'getPlayers',
      'getWinner'
    ])
  }
};
</script>

<style scoped lang="scss">
.game-board {
  max-width: 1000px;
  max-height: 1000px;
}
</style>
