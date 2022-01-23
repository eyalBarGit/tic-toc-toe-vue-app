<template>
    <div class="flex justify-center" @click="onSquareClick">
        <div v-if="!currSquare.isClicked" class="h-24 w-24" />
        <img v-else class="w-2/5 object-contain" :src="imgSrc" alt="imgSrc" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

const SQUARE_TYPE = {
    X: 'X',
    O: 'O'
};

export default {
    name: 'SquareItem',
    props: {
        currSquare: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            imgSrc: ''
        };
    },

    computed: {
        ...mapGetters('gameStore', ['getCurrentShapeTurn']),
        getImgSrc() {
            return this.currSquare.shape === SQUARE_TYPE.X
                ? this.setImgSrc(SQUARE_TYPE.X)
                : this.setImgSrc(SQUARE_TYPE.O);
        },
        createClickedSquare() {
            const currSquare = JSON.parse(JSON.stringify(this.currSquare));
            return {
                ...currSquare,
                shape: this.getCurrentShapeTurn,
                isClicked: true
            };
        }
    },
    watch: {
        currSquare: {
            handler(n, o) {
                return this.getImgSrc;
            }
        }
    },
    mounted(){
    },
    methods: {
        onSquareClick() {
            if (this.currSquare.isClicked) return;
            this.$emit('clickOnSquare', this.createClickedSquare);
        },
        setImgSrc(shape) {
            return (this.imgSrc = require(`@/assets/${shape}.png`));
        }
    }
};
</script>

<style scoped lang="scss">
.square-fade-enter {
  opacity: 0;
}
.square-fade-enter-active {
  transition: opacity 0.2s ease-in-out;
}
.square-fade-leave-to {
  opacity: 0;
}
.square-fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
</style>
