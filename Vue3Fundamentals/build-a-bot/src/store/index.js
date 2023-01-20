import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cart: [],
    parts: null
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
    updateParts(state, parts) {
      state.parts = parts
    }
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error)
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    }
  }
})
