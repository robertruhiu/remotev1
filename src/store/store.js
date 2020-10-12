import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state: {
        feature_id:null


    },
    mutations: {
        setFeature(state, feature_id) {
            state.feature_id = feature_id
        },





    },
    actions: {
        setFeature({commit}, feature_id) {
            commit('setFeature', feature_id)
        },


    },
    getters: {

    },
    plugins: [
        createPersistedState(),

    ],
})
