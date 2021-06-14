import Api from '@/services/Api'

export default {

    getuserchats(user, auth) {
        return Api().get(`remote/v1/projects/chat/all/${user}`, auth)
    },
    createChat(newchat, auth) {
        return Api().post(`remote/v1/projects/chat/createChat/`,newchat,auth)
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
