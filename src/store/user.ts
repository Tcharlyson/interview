import { GetterTree, MutationTree, ActionTree, Module } from 'vuex'
import { RootState, UserState, UserFields } from '../types'

const initialState = {
  user: {
    country: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  }
}

export const state: UserState = initialState

export const getters: GetterTree<UserState, RootState> = {}

export const mutations: MutationTree<UserState> = {
  SAVE_INFOS(state, infos: UserFields) {
    state.user = infos
  },
  EMPTY_STATE(state) {
    Object.assign(state, initialState)
  }
}

export const actions: ActionTree<UserState, RootState> = {}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
