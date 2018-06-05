import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

// initial state object
const state = {
    count: 0
}

// define getters that can be accessed to retreive data
const getters = {
}

// define mutations that can be applied to our state
const mutations = {
}

// define actions that can be called to perform mutations
const actions = {
}

// create Vuex instance and export store for use by our components
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})