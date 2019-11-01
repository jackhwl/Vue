<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <cube-tab-bar
          v-model="selectedLabelDefault"
          :data="tabs"
          @change="changeHandler">
        </cube-tab-bar>
    </div>
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
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction : column;
}
.container {
  flex: 1;
  overflow: scroll;
}
.footer {
  background-color: #ccc;
}
</style>
