<template>
  <div id="app">
    <Navbar></Navbar>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
  data () {
    return {
      title: 'My first Vue app, wooo :)'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
