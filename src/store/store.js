import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    state: {
        feature_id:null,
        feature_complete:false,
        project_id:null,
        user_object: null,
        token: null,
        user: null,
        isUserLoggedIn: false,
        usertype: null,
        projectedit_id:null


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
        setProjectedit(state, projectedit_id) {
            state.projectedit_id = projectedit_id
        },
        setToken(state, token) {
            state.token = token
            state.isUserLoggedIn = !!(token)

        },
        setUser(state, user) {
            state.user = user
        },
        setCandidate(state, candidate) {
            state.candidate = candidate
        },
        setAuthenticated(state, isAuthenticated) {
            state.isUserLoggedIn = isAuthenticated
        },

        setUser_object(state, user_object) {
            state.user_object = user_object
        },
        setUsertype(state, usertype) {
            state.usertype = usertype
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
        setProjectedit({commit}, projectedit_id) {
            commit('setProjectedit', projectedit_id)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setisLoggedIn({commit}, isAuthenticated) {
            commit('setisLoggedIn', isAuthenticated)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },



        setUser_object({commit}, user_object) {
            commit('setUser_object', user_object)
        },
        setUsertype({commit}, usertype) {
            commit('setUsertype', usertype)
        },



    },
    getters: {

    },
    plugins: [
        createPersistedState(),

    ],
})
