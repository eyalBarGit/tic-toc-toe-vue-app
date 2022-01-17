<template>

  <div
      class="flex justify-center"
      @click="onSquareClick"
  >
    <div v-if="!currSquare.isClicked" class="h-24 w-24"></div>
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
    };
  },
  watch: {
    currSquare: {
      handler(n, o) {
        this.getImgSrc;
      },
    },
  },
  computed: {
    ...mapGetters(['getCurrentShapeTurn']),
    getImgSrc() {
      return this.currSquare.shape === SQUARE_TYPE.X
          ? this.setImgSrc(SQUARE_TYPE.X)
          : this.setImgSrc(SQUARE_TYPE.O);
    },
    createClickedSquare() {
      return {
        ..._.cloneDeep(this.currSquare),
        shape: this.getCurrentShapeTurn,
        isClicked: true,
      };
    },
  },
  methods: {
    onSquareClick() {
      if (this.currSquare.isClicked) return;
      this.$emit('clickOnSquare', this.createClickedSquare);
    },
    setImgSrc(shape) {
      return this.imgSrc = require(`@/assets/${shape}.png`);
    },
  },

};
</script>
