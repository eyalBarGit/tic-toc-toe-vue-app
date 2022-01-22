<template>
  <div id="app">
    <div
      :style="getStyle"
      class="min-h-screen "
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import './style/style.scss';

const backgroundImg = require('./assets/gradient_background.jpg');

export default {
  name: 'App',
  data() {
    return {
      background: backgroundImg
    };
  },
  computed: {
    getStyle() {
      return {
        backgroundImage: `url(${this.background})`,
        'background-size': 'cover'
      };
    }
  }
};
</script>

<style lang="scss">
</style>
