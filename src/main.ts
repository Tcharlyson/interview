import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { ArrayToMap } from './types'
import InputError from '@/components/InputError.vue'
import PhoneNumber from 'awesome-phonenumber'

// Vee Validate
Object.keys(rules).forEach(rule => {
  extend(rule, (rules as ArrayToMap)[rule])
})

extend('phone', {
  message(fieldName) {
    return `${fieldName} is not a valid phone number` // TODO translate this one on langage update
  },
  validate(value) {
    return new Promise(resolve => {
      const phone = new PhoneNumber(value)
      resolve({ valid: phone.isValid() })
    })
  }
})

Vue.component('input-error', InputError)

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'production' ? false : true

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
