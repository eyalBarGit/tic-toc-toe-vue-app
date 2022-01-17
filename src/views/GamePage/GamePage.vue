<template>
  <div class="h-screen flex flex-col justify-between text-center md:px-20">
    <div class="text-5xl">Welcome to Game Page</div>
    <div
        class="p-10 h-full flex flex-col items-center justify-center "
    >
      <GameBoard class="h-4/6 md:h-full w-full game-board flex  flex-grow-0 bg-indigo-100 bg-opacity-25 rounded-2xl"/>
    </div>
    <div class="h-20 w-full"></div>
  </div>
</template>

<script>
const GameBoard = () => import('../../components/GameBoard/GameBoard.vue');

export default {
  name: 'GamePage',
  components: { GameBoard },
};
</script>

<style scoped lang="scss">
.game-board {
  max-width: 800px;
  max-height: 800px;
}
</style>
