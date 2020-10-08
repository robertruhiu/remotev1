import Api from '@/services/Api'
export default {

    fetchallissues(user_id) {
        return Api().get(`projects/projects/${user_id}`)
    },

}
