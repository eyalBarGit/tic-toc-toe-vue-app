<template>
  <div class="h-full">
    <div class="text-red-500 text-6xl">
      hi
    </div>
    <div class="flex justify-center h-full items-center">
      <Hero class="w-5/6 border border-green-500" />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero/Hero.vue';
export default {
    name: 'Home',
    components: { Hero },
};
</script>
