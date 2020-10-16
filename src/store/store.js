import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state: {
        feature_id:null,
        feature_complete:false,
        project_id:null


    },
    mutations: {
        setFeature(state, feature_id) {
            state.feature_id = feature_id
        },
        setFeaturestatus(state, feature_complete) {
            state.feature_complete = feature_complete
        },
        setProject(state, project_id) {
            state.project_id = project_id
        },





    },
    actions: {
        setFeature({commit}, feature_id) {
            commit('setFeature', feature_id)
        },
        setFeaturestatus({commit}, feature_complete) {
            commit('setFeaturestatus', feature_complete)
        },
        setProject({commit}, project_id) {
            commit('setProject', project_id)
        },



    },
    getters: {

    },
    plugins: [
        createPersistedState(),

    ],
})
