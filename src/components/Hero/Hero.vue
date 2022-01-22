<template>
  <div class="p-5">
    <div class="text mb-5">
      <div class="text-5xl text-white font-bold">
        Play in real time with friends
      </div>
      <div class="text-5xl text-white font-bold">
        or against Ai
      </div>
    </div>
    <div class="buttons flex justify-center margin-center">
      <button
        class="btn ml-5"
        @click="playAi"
      >
        Play against Ai
      </button>
      <button class="btn ml-2">
        Play with friends
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHomePage',
  methods: {
    playAi() {
      this.$router.push({
        name: 'AiGame', params: {
          roomId: 123 
        } 
      });
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  .buttons {
    max-width: 500px;
  }
}
</style>
