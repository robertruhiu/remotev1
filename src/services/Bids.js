import Api from '@/services/Api'
export default {
    submitapplication() {
        return Api().get(`projects/projects/`)
    },
    currentprojectbids(){
        return Api().get(`projects/projects/`)
    },
    shortlistcandidate(){
        return Api().patch(`projects/projects/`)
    },
    acceptbid(){
        return Api().patch(`projects/projects/`)
    }

}
