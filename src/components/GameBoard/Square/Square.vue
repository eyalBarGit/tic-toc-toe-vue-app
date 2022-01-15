<template>

  <div
      class="flex justify-center"
      @click="onSquareClick"
  >
    <div v-if="!imgSrc" class="h-24 w-24"></div>
    <img v-else class="w-2/4 object-contain" :src="imgSrc" alt="imgSrc"/>
  </div>
</template>
<script>
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
  computed: {
    imgSrc() {
      return this.currSquare.shape === SQUARE_TYPE.O
          ? this.setImgSrc(SQUARE_TYPE.O)
          : this.currSquare.shape === SQUARE_TYPE.X
              ? this.setImgSrc(SQUARE_TYPE.X)
              :
              '';
    },
  },
  methods: {
    onSquareClick() {
      this.$emit('clickOnSquare', this.currSquare);
    },
    setImgSrc(shape) {
      return require(`@/assets/${shape}.png`);
    },
  },
};
</script>


