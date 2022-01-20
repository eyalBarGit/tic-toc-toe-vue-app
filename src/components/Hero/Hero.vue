<template>
  <div class="hero">
    <div class="text">
      <div class="text-5xl text-white font-bold">
        Play in real time with friends
      </div>
      <div class="text-5xl text-white font-bold">
        or against Ai
      </div>
    </div>
    <div class="buttons flex justify-center margin-center">
      <button
        class="btn"
        @click="playAi"
      >
        Play against Ai
      </button>
      <button class="btn">
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
            this.$router.push({ name: 'AiGame', params: { roomId: 123 } });
        },
    },
};
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 1px solid black;
  .text {
    p {
      font-size: 3rem;
      line-height: 3.5rem;
      font-weight: 700;
      color: #fff;
    }
    margin-bottom: 20px;
  }
  .buttons {
    max-width: 500px;
    button {
      margin-left: 10px;
    }
  }
  a {
    width: 100%;
  }
}
</style>
