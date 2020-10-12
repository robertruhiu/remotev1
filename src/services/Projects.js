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
    fetchfeaturetask(feature_id){
        return Api().get(`projects/projects/${feature_id}`)
    },
    featuretaskpatch(task_id){
        return Api().patch(`projects/projects/${task_id}`)

    },
    newfeaturetask(){
        return Api().post(`projects/projects/`)

    }

}
