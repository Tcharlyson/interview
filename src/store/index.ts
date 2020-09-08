import Vue from 'vue'
import Vuex from 'vuex'
import { langage } from './langage'
import { user } from './user'
// import VuexPersistence from 'vuex-persist'
// import { RootState } from '@/types'

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence<RootState>({
//   key: 'interview',
//   storage: window.localStorage
// })

const store = new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    langage,
    user
  }
  // plugins: [vuexLocal.plugin]
})

// Create Vuex Store and register database through Vuex ORM.
export default store
