import { createStore } from 'vuex'
import robotsModule from './modules/robots'
import usersModule from './modules/users'

export default createStore({
  modules: {
    robots: robotsModule,
    users: usersModule
  }
})
