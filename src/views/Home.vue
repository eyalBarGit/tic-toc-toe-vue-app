<template>
  <div>
    <div class="text-red-500 text-6xl">hi</div>
    <Hero />
  </div>
</template>

<script>
import Hero from '../components/Hero/Hero.vue';
// @ is an alias to /src
export default {
  name: 'Home',
  components: { Hero },
};
</script>
