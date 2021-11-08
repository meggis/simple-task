import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCurrencies: {},
  },
  mutations: {
    setCurrencyValues(state, { currency, exchangeRate }) {
      state.allCurrencies[currency] = exchangeRate
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    // getAllValues: state => state.allCurrencies.map(currency => currency)
  }
})
