import Api from '@/services/Api'
export default {
    bidstageprojects() {
        return Api().get(`projects/projects/`)
    },
    myprojects() {
        return Api().get(`projects/projects/`)
    },
    createproject() {
        return Api().get(`projects/projects/`)
    },
    editproject() {
        return Api().get(`projects/projects/`)
    },
    fetchallprojects(user_id) {
        return Api().get(`projects/projects/${user_id}`)
    },
    fetchallfeatures(user_id) {
        return Api().get(`projects/projects/${user_id}`)
    },

}
