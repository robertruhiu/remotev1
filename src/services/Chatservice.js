import Api from '@/services/ChatApi'

export default {

    getToken(email) {
        return Api().get(`token/${email}`)
    },
    notify(body) {
        return Api().post(`send-notification`,body)
    },
    chatwith(user, other_user, auth) {
        return Api().get(`remote/v1/projects/chat/with/${user}/${other_user}`, auth)
    },
    sendmessageto(user, other_user, channel_url, message, auth) {
        return Api().post(`remote/v1/projects/chat/send_message/${user}/${other_user}/${channel_url}/${message}`, auth)
    },
    sendmessageto2(user, other_user, channel_url, message, auth) {
        return Api().get(`remote/v1/projects/chat/send_message2/${user}/${other_user}/${channel_url}/${message}`, auth)
    },


}
