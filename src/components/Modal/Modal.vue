<template>
  <div class="win-modal-background">
    <div class="modal-window flex justify-center">
      <div class="modal flex flex-col justify-between">
        <h1>Game Over!</h1>
        <p class="winner">
          Winner is: <span>{{ getWinner }}</span>
        </p>
        <div>
          <button
            class="bg-green-400 font-semibold text-xl text-white rounded w-full"
            @click="onRestartGame"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Modal',
  computed: {
    ...mapGetters('gameStore',['getWinner']),
  },
  methods: {
    ...mapActions('gameStore',['restartGame', 'onResetSquare','']),
    ...mapActions('boardStore',[ 'onCreateBoard']),
    onRestartGame(){
      this.restartGame();
      this.onCreateBoard();
    }
  },
};
</script>

<style scoped lang="scss">
.win-modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.356);
  .modal-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vh;
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    -webkit-box-shadow: 2px 4px 15px -3px #000000;
    box-shadow: 2px 4px 15px -3px #000000;
    text-align: center;
    .modal {
      height: 100%;
      padding: 35px 0;
      width: 70%;
      button {
        height: 45px;
        &:hover {
          background-color: #a3ffa3;
        }
      }
    }
    @media (max-width: 769px) {
      width: 75vw;
      .modal {
        h1 {
          font-size: 30px;
        }
      }
    }
    @media (max-width: 540px) {
      width: 75vw;
      .modal {
        h1 {
          font-size: 30px;
        }
      }
    }
    @media (max-width: 325px) {
      width: 75vw;
      .modal {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
