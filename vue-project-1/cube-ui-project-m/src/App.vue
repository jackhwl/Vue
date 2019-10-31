<template>
  <div class="home">
    <router-link to="/">Home</router-link>
    <router-link to="/course">Course</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-view></router-view>

     <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @change="changeHandler">
  </cube-tab-bar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: '/',
      tabs: [{
        label: 'Home',
        value: '/',
        icon: 'cubeic-home'
      }, {
        label: 'Course',
        value: '/course',
        icon: 'cubeic-like'
      }, {
        label: 'Profile',
        value: '/profile',
        icon: 'cubeic-vip'
      }]
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.selectedLabelDefault = to.path;
        console.log(to, from);
      },
      immediate: true
    }
  },
  methods: {
    // clickHandler(label) {
    //   // if you clicked home tab, then print 'Home'
    //   console.log(label);
    // },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label);
      this.$router.push(label);
    }
  }
};
</script>

<style lang="stylus">

</style>
