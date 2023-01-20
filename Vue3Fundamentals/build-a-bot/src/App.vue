<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Build'}">
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'BrowseParts'}">
            Browse Parts
          </router-link>
        </li>
        <li>
          User: {{ user.userName }}
          <button @click="changeUserName()">Change</button>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" to="/cart">
            Cart
          </router-link>
          <div class="cart-items">
            {{ cart.length }}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <aside class="aside">
      <router-view name="sidebar"/>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.robots.cart
    }
  },
  data() {
    return {
      user: { userName: 'Jim' }
    }
  },
  provide() {
    return { user: this.user }
  },
  methods: {
    changeUserName() {
      this.user.userName = 'Fred'
    }
  }
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style  lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
  &.cart {
    position: relative;
    margin-left: auto;
    border-right: none;
  }
}

.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
