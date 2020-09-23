<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './HomeHeader.vue';

export default {
  name: 'home',
  components: {
    HomeHeader
  }
};
</script>
