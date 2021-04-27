<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <div>

          <a-row>


            <a-col span="6">
              <a-card title="All Chats" style="height: 90vh">
                <span slot="extra">
                  <a-button type="primary" v-if="newchat" @click="newChat">back</a-button>
                  <a-button type="primary" v-else @click="newChat">New Chat</a-button>

                </span>
                <div v-if="newchat">
                  <p>should be preferably ones from projects</p>
                  <div v-for="user in users" v-bind:key="user">
                    <a-row class="hero1" style="margin-bottom: 1rem">
                      <a @click="startChat(user)" style="color: black">
                        <a-col span="4">
                          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf;">
                            {{ user }}
                          </a-avatar>
                        </a-col>
                        <a-col span="18">
                          <span>{{ user }}</span><br>


                        </a-col>
                      </a>

                    </a-row>


                  </div>

                </div>
                <div v-else>

                  <div v-for="chat in chatmod" v-bind:key="chat">
                    <a-card size="small" :title="chat.other_user" style="width: 300px;margin-bottom: 1rem">

                      <p>{{ chat.messages[chat.messages.length - 1].messagelist.message }}</p>
                      <a-button type="primary" @click="fetchmessages(chat.other_user,chat.channel_url)">
                        chat
                      </a-button>


                    </a-card>


                  </div>
                </div>


              </a-card>
            </a-col>
            <a-col span="18">
              <div v-if="currentchat === null && loading === false" style="padding: 5%">
                <a-result
                    title="Welcome to the chat.You can start or continue converation .Please click on the person u want to chat with to start">
                  <template #icon>
                    <a-icon type="smile" theme="twoTone"/>
                  </template>

                </a-result>
              </div>

              <a-card v-else>
                <span slot="title">
                  {{ currentchat.other_user }}
                </span>
                <div style="position: relative;height: 79vh">
                  <div id="out" style="overflow-y: auto;position: absolute;width: 100%;height: 75vh">
                    <div v-if="loading">
                      <a-skeleton active/>
                    </div>
                    <div v-else style="margin-bottom: 1rem">

                      <div v-for="onemessage in currentchat.chat" v-bind:key="onemessage">


                        <div class="chat-msg owner" v-if="onemessage._sender.userId === user">
                          <div class="chat-msg-profile">

                            <div class="chat-msg-date">{{ onemessage.created | momentformat }}</div>
                          </div>
                          <div class="chat-msg-content">
                            <div class="chat-msg-text">{{ onemessage.message.message }}</div>

                          </div>
                        </div>
                        <div class="chat-msg" v-else>
                          <div class="chat-msg-profile">

                            <div class="chat-msg-date">{{ onemessage.created | momentformat }}</div>
                          </div>
                          <div class="chat-msg-content">
                            <div class="chat-msg-text">{{ onemessage.message.message }}
                            </div>

                          </div>
                        </div>
                      </div>


                    </div>

                  </div>

                  <div style="position: absolute;bottom: 0;width: 100%">
                    <a-textarea v-model="message" placeholder="Basic usage" :rows="4"/>
                    <br>
                    <br>
                    <a-button type="primary" @click="sendMessage()">Send Message</a-button>


                  </div>

                </div>


              </a-card>

            </a-col>
          </a-row>

        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>
import ClientSider from "@/components/client/layout/ClientSider";
import Chat from '@/services/Chat'
import moment from "moment";
import * as axios from "axios";

import 'vue-advanced-chat/dist/vue-advanced-chat.css'

class ChatObj {
  constructor(id, ids, users, channel_url, messages, other_user) {
    this.id = id;
    this.ids = ids;
    this.users = users;
    this.channel_url = channel_url;
    this.messages = messages;
    this.other_user = other_user


  }
}





export default {
  name: "Chat",
  data() {
    return {
      chats: {},
      chatmod: [],
      user: '',
      other_user: '',
      users: ['dennis', 'admin'],
      message: '',
      groupchannel: '',
      loading: false,
      newchat: false,
      currentchat: null,
      currentchatmod: [],
      sendlink: '',



    };
  },
  components: {ClientSider},
  beforeCreate() {
  },
  filters: {
    parseHi: function (value) {

      return JSON.parse(value)
    },
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    momentformat: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },

  },
  computed: {},
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    }
    this.user = this.$store.state.user.username
    this.currentUserId =this.$store.state.user.pk
    Chat.getuserchats(this.$store.state.user.username, auth)
        .then(response => {
          this.chats = response.data
          if (this.chats.length > 0) {


            this.chats.forEach(chat => {
              let id = chat.id
              let ids = chat.ids
              let users = chat.users
              let channel_url = chat.channel_url

              let other_user = ''
              users.forEach(user => {
                if (user !== this.user) {
                  other_user = user

                }
              })

              let messagesparse = JSON.parse(chat.messages)
              messagesparse.forEach(fullmessageobj => {


                let onemessage = JSON.parse(fullmessageobj.message)

                fullmessageobj.messagelist = onemessage


              })
              let messages = messagesparse





              let onechat = new ChatObj(id, ids, users, channel_url, messages, other_user)
              this.chatmod.push(onechat)


            })
          }


        })


  },
  methods: {

    fetchmessages(other_user, channel_url) {

      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.groupchannel = channel_url
      this.other_user = other_user
      this.currentchat = null
      this.loading = true
      Chat.chatwith(this.user, other_user, auth)
          .then(response => {
            this.messages = response.data
            this.currentchat = response.data
            this.currentchat.chat = JSON.parse(response.data.chat)
            this.currentchat.chat.forEach(onechat => {
              onechat.message = JSON.parse(onechat.message)
            })

            this.loading = false


          })


    },

    newChat() {
      this.newchat = !this.newchat
    },


    sendMessage() {

      this.sendlink = process.env.VUE_APP_PATH


      var params = {
        message: this.message,
      }
      axios.post(`${this.sendlink}/remote/v1/projects/chat/send_message/${this.user}/' +
          '${this.other_user}/${this.groupchannel}`, params)
          .then(function (response) {
            this.currentchat = null
            this.currentchat = response.data
            this.currentchat.chat = JSON.parse(response.data.chat)
            this.currentchat.chat.forEach(onechat => {
              onechat.message = JSON.parse(onechat.message)
            })
            this.messages = response.data['messages']
            this.loading = false
          })
          .catch(function (error) {
            console.log(error);
          });
    },



  }
}
</script>

<style scoped>
.hero {
  padding: 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background-color: white;
  height: 6rem;
}

.hero1 {
  padding: 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background-color: white;
  height: 4rem;
}


.chat-msg-text {
  background-color: #F1F2F6;
  padding: 15px;
  border-radius: 20px 20px 20px 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
}

.chat-area {
  flex-grow: 1;
}


.chat-area {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.chat-area-header {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

}

.chat-area-title {
  font-size: 18px;
  font-weight: 600;
}

.chat-area-main {
  flex-grow: 1;
}


.chat-msg-profile {
  flex-shrink: 0;
  margin-top: auto;
  margin-bottom: -20px;
  position: relative;
}

.chat-msg-date {
  position: absolute;
  left: calc(100% + 12px);
  bottom: 0;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.chat-msg {
  display: flex;
  padding: 0 20px 45px;
}

.chat-msg-content {
  margin-left: 12px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.chat-msg-text + .chat-msg-text {
  margin-top: 10px;
}

.owner {
  flex-direction: row-reverse;
}

.owner .chat-msg-content {
  margin-left: 0;
  margin-right: 12px;
  align-items: flex-end;
}

.owner .chat-msg-text {
  background-color: #0086FF;
  color: #fff;
  border-radius: 20px 20px 0 20px;
}

.owner .chat-msg-date {
  left: auto;
  right: calc(100% + 12px);
}

.chat-msg-text img {
  max-width: 300px;
  width: 100%;
}

.chat-area-footer {
  display: flex;

  width: 100%;
  padding: 10px 20px;
  align-items: center;

  position: sticky;
  bottom: 0;
  left: 0;
}

.chat-area-footer {
  display: flex;
  border-top: 1px solid #EEF2F4;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  background-color: white;
  position: sticky;
  bottom: 0;
  left: 0;
}

.chat-area-footer input {
  border: none;
  color: black;
  background-color: #F8F8FA;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  margin: 0 12px;
  width: 100%;
}


</style>
