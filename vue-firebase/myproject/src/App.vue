<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar></Navbar>
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  data () {
    return {
      title: 'My app, wooo :)',
      friends: [
          { name: 'Mario', online: true },
          { name: 'Luigi', online: false },
          { name: 'Toad', online: true },
          { name: 'Bowser', online: false }
      ]

    }
  },
  components: {
    Navbar,
    OnlineFriends,
    AllFriends
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
