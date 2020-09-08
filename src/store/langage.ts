import { GetterTree, MutationTree, ActionTree, Module } from 'vuex'
import { RootState, LangageState } from '../types'
import { localize } from 'vee-validate'
import veeValidateFr from 'vee-validate/dist/locale/fr.json'
import veeValidateEn from 'vee-validate/dist/locale/en.json'

const initialState = {
  langage: 'en'
}

export const state: LangageState = initialState

export const getters: GetterTree<LangageState, RootState> = {}

export const mutations: MutationTree<LangageState> = {
  SAVE_LANGAGE(state, langage: string) {
    state.langage = langage

    if (langage === 'fr') {
      localize('fr', veeValidateFr)
    } else {
      localize('en', veeValidateEn)
    }
  },
  EMPTY_STATE(state) {
    Object.assign(state, initialState)
  }
}

export const actions: ActionTree<LangageState, RootState> = {}

export const langage: Module<LangageState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
