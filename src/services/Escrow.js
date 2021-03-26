import Api from '@/services/Api'
export default {
    lookupescrow(project_id,auth) {
        return Api().get(`remote/v1/projects/payments/get/${project_id}`,auth)
    },
    newescrow(payment,auth){
        return Api().post(`remote/v1/projects/payments/create/`,payment,auth)
    },


}
