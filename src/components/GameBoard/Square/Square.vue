<template>

  <div
      class="flex justify-center"
      @click="onSquareClick"
  >
    <div v-if="!currSquareCopy.isClicked" class="h-24 w-24"></div>
    <img v-else class="w-2/4 object-contain" :src="imgSrc" alt="imgSrc"/>
  </div>
</template>
<script>

import {mapGetters} from 'vuex';

const SQUARE_TYPE = {
  X: 'X',
  O: 'O',
};
export default {
  name: 'Square',
  props: {
    currSquare: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgSrc: '',
      currSquareCopy: {...this.currSquare},
    };
  },

  computed: {
    ...mapGetters(['getCurrentShapeTurn']),
    getImgSrc() {
      return this.currSquareCopy.shape === SQUARE_TYPE.O
          ? this.setImgSrc(SQUARE_TYPE.O)
          : this.setImgSrc(SQUARE_TYPE.X);
    },
  },
  methods: {
    onSquareClick() {
      if (this.currSquare.isClicked) return;
      this.currSquareCopy.isClicked = true;
      this.currSquareCopy.shape = this.getCurrentShapeTurn;
      this.$emit('clickOnSquare', this.currSquareCopy);
      this.getImgSrc;
    },
    setImgSrc(shape) {
      return this.imgSrc = require(`@/assets/${shape}.png`);
    },
  },

};
</script>
