<template>
  <transition name="fade">
    <slot name="transition-item"></slot>
  </transition>
</template>

<script>
export default {
  name:'FadeTransition'
};
</script>


<style lang="scss" scoped>
.fade-enter{
  opacity: 0;
}.fade-enter-active{
   transition: opacity 0.2s ease-in-out;
 }.fade-leave-to{
    opacity: 0;
  }.fade-leave-active{
     transition: opacity 0.2s ease-in-out;
   }
</style>