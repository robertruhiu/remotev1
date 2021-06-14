<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider v-if="$store.state.user_object.user_type ==='recruiter'"/>
    <DevSider v-if="$store.state.user_object.user_type ==='developer'"/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb v-if="$store.state.user_object.user_type ==='developer'">
                <a-breadcrumb-item><a @click="$router.push('/Developer')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item>Chat</a-breadcrumb-item>

              </a-breadcrumb>
              <a-breadcrumb v-else>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')">Home</a></a-breadcrumb-item>

                <a-breadcrumb-item>Chat</a-breadcrumb-item>

              </a-breadcrumb>

              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Chat</span>
            </a-col>
            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                <div style="text-align: center">
                  <img src="@/assets/images/chat2.svg" style="width: 25%"/>
                </div>


              </a-col>
            </hide-at>
          </a-row>


        </a-card>
        <div>
          <a-row>
            <!------chat sider----->
            <a-col span="4">
              <div v-if="!newChat">

                <div v-if="loadingchats">
                  <a-skeleton active/>
                </div>
                <div v-else>
                  <a-card size="small" :bordered="false">
                    <a-button type="primary" shape="circle" icon="plus" @click="fetchUsers" style="float: right"/>
                  </a-card>
                  <div v-if="rooms.length>0">
                    <div v-for="roomName in Rooms" v-bind:key="roomName">
                      <a-card size="small" @click="callChannel(roomName)">
                        <a-row>
                          <a-col span="4">
                            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
                              {{ roomName.ChatName[0] | capitalize }}
                            </a-avatar>

                          </a-col>
                          <a-col span="20">

                            <p style="font-family: sofia_probold">{{
                                roomName.ChatName |capitalize
                              }}</p>
                            <span style="font-family: sofia_prolight">{{ roomName.last }}</span>

                          </a-col>
                        </a-row>


                      </a-card>


                    </div>
                  </div>
                  <div v-else>
                    <a-empty
                        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                        :image-style="{ height: '60px',  }"
                    >
                      <span slot="description"> Create new Chat </span>
                      <a-button type="primary" @click="fetchUsers">
                        Create Now
                      </a-button>
                    </a-empty>
                  </div>
                </div>


              </div>
              <div v-else>
                <a-card size="small" :bordered="false">
                  <a-button type="primary" icon="left" @click="closeNewChat" size="small">
                    back
                  </a-button>
                </a-card>

                <div v-if="loadingusers">
                  <a-skeleton active/>
                </div>
                <div v-else>
                  <div v-for="user in users" v-bind:key="user">
                    <a-card size="small" @click="createChannel(user)">

                      <p style="font-family: sofia_probold">{{ user.first_name }} {{ user.last_name }} </p>

                    </a-card>
                  </div>
                </div>


              </div>


            </a-col>
            <!------chat body----->
            <a-col span="20">
              <a-card v-if="channel">
                <span slot="title"
                      style="font-family: sofia_probold">{{ currentroom.ChatName |capitalize }}


                </span>
                <span slot="extra" v-if="channel"><a slot="extra" href="#" @click="deleteChannel">delete</a></span>

                <div style="height:35rem;overflow: auto;" class="container" ref="container">
                  <div v-for="message in messages" v-bind:key="message.sid">

                    <a-row v-if="message.author !== $store.state.user.email" style="margin-bottom: 1rem">
                      <a-col :span="8">
                        <a-row :gutter="16">
                          <a-col :span="2">
                            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
                              {{ currentroom.ChatName[0] |capitalize }}
                            </a-avatar>
                          </a-col>
                          <a-col :span="22">
                            <a-card size="small" class="reciever">


                              <span style="font-family: sofia_prolight">{{ message.body }}</span>


                            </a-card>
                            <span
                                style="font-family: sofia_proextralight;font-size: 12px">{{ message.timestamp |format }}</span>
                          </a-col>
                        </a-row>


                      </a-col>

                    </a-row>

                    <a-row v-else style="margin-bottom: 1rem">

                      <a-col :span="8" :offset="14">
                        <a-row :gutter="16">

                          <a-col :span="22">
                            <a-card size="small" class="usercard">


                              <span style="font-family: sofia_prolight">{{ message.body }}</span>

                            </a-card>
                            <span
                                style="font-family: sofia_proextralight;font-size: 12px">{{ message.timestamp |format }}</span>
                          </a-col>
                          <a-col :span="2">
                            <a-avatar>
                              {{ $store.state.user.username[0] | capitalize }}
                            </a-avatar>
                          </a-col>
                        </a-row>

                      </a-col>
                    </a-row>


                  </div>


                </div>


                <div>
                  <a-row>
                    <a-col span="22">
                      <a-textarea v-model="text" v-on:keyup.enter="sendMessage"

                                  :auto-size="{ minRows: 3, maxRows: 5 }"
                      />

                    </a-col>
                    <a-col span="2">
                      <a-button type="primary" @click="sendMessage">
                        <a-icon type="form" :rotate="180"/>
                        Send
                      </a-button>

                    </a-col>
                  </a-row>


                </div>


              </a-card>
              <a-result title="Welcome to the chat room." v-else>
                <template #icon>
                  <a-icon type="message" theme="twoTone"/>
                </template>
                <template #extra>

                  <p>Pick an active chat on the left or start a new one by clicking on the plus icon</p>
                </template>
              </a-result>

            </a-col>
          </a-row>
        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>

import Chat from 'twilio-chat'
import User from '@/services/UsersService'
import DevSider from '@/components/developer/layout/DevSider'
import Chatservice from "@/services/Chatservice";
import ClientSider from "@/components/client/layout/ClientSider";
import UsersService from "@/services/UsersService";
import ChatBackendservice from "@/services/Chat";
import firebase from 'firebase';
import moment from "moment";

var config = {
  apiKey: "AIzaSyAlabTmxaMo0v5jZat9M3bvzRHPpfQiSnU",
  authDomain: "lnchat-70913.firebaseapp.com",
  projectId: "lnchat-70913",
  storageBucket: "lnchat-70913.appspot.com",
  messagingSenderId: "77210339001",
  appId: "1:77210339001:web:8f46bd2a1db66c88d17d68"

};
firebase.initializeApp(config);
firebase.messaging().requestPermission()
    .then(function () {
      console.log('Notification permission granted.');
    })
    .catch(function (err) {
      console.log('Unable to get permission to notify.', err);
    });

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
let fcm = ''
firebase.messaging().getToken()
    .then(function (currentToken) {
      if (currentToken) {
        fcm = currentToken
        console.log('Token received: ', currentToken);

      } else {
        var errMsg = 'No Instance ID token available. Request permission to generate one.';
        alert(errMsg);

      }
    })
    .catch(function (err) {
      console.log('An error occurred while retrieving token. ', err);
    });
export default {
  name: "Chat",
  data() {
    return {

      email: '',
      room: '',
      text: '',
      messages: [],
      channel: '',
      loading: false,
      token: '',
      client: null,
      typer: '',
      channelList: [],
      rooms: [],
      currentUserId: '',
      users: [],
      chats: [],
      loadingusers: false,
      newChat: false,
      currentChats: [],
      loadingchats: false,
      currentroom: null,
      ParamUser: null


    }
  },
  components: {ClientSider, DevSider},
  watch: {
    channel: function () {

      this.channel.on('messageAdded', () => {


        this.channel.getMessages()
            .then(resp => {
              this.messages = []
              resp.items.forEach(messageobj => {
                this.messages.push(messageobj.state)
              })


            })

      })
      this.channel.on('typingStarted', function (member) {
        console.log(member.identity + 'is currently typing.');
      });


    },
    text: function () {
      this.channel.typing()


    },


  },
  computed: {
    Rooms() {
      let uniq = [...new Set(this.rooms)];
      return uniq
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    format: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm ');
    }
  },
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    }


    this.login()
    if (this.$route.params.member) {
      User.currentuser(this.$route.params.member, auth)
          .then(resp => {
            this.ParamUser = resp.data
          })
    }


  },
  updated() {
    this.scrollToEnd();
  },

  methods: {
    moment,
    firestart() {

    },
    scrollToEnd() {
      var content = this.$refs.container;
      content.scrollTop = content.scrollHeight;
    },


    texttype() {
      this.channel.typing(this.email);

    },
    showTypingStarted(member) {
      this.$message.info(`${member} is typing.`);


    },
    handleChange(value) {
      this.email = value;
    },
    login() {
      this.loadingchats = true

      this.getToken(this.$store.state.user.email)


    },

    callChannel(room) {
      this.currentroom = room

      this.client.getChannelBySid(room.sid)
          .then(resp => {
            this.channel = resp
            this.joinChannel(this.channel);
          })


    },
    createChannel(user) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let newEntry = {
        'ids': [this.$store.state.user.pk, user.id].join(),
        'users': [this.$store.state.user.username, user.username],
        'messages': '',
        'name': [this.$store.state.user.username, user.username].join()

      }
      ChatBackendservice.createChat(newEntry, auth)
          .then((resp) => {
            this.client.createChannel({
              uniqueName: resp.data.name,
              friendlyName: resp.data.name,
            })
                .then(resp => {
                  this.channel = resp
                  this.rooms.push(this.channel)
                  this.computeChannels()
                  this.newChat = false
                  this.joinChannel(this.channel);

                })


          }).catch(() => {
        console.log('error')
      })


    },

    joinChannel() {
      if (this.channel.channelState.status !== "joined") {
        this.channel.join();
        this.messages = []
        this.events = this.channel._events
        this.channel.getMessages()
            .then(resp => {
              resp.items.forEach(messageobj => {
                this.messages.push(messageobj.state)
                this.scrollToEnd()
              })


            })

      } else {
        this.messages = []
        this.channel.getMessages()
            .then(resp => {
              resp.items.forEach(messageobj => {

                this.messages.push(messageobj.state)
                this.scrollToEnd()
              })


            })
      }

      this.loading = false


    },
    sendMessage() {

      if (this.text && this.channel) {
        this.channel.sendMessage(String(this.text).trim());
        this.handleMessageAdded(this.text)

        firebase.messaging().onMessage(payload => {
          this.client.handlePushNotification(payload);

        });

        this.text = ''


      }
    },
    handleMessageAdded(last) {
      this.rooms.forEach(room => {
        if (room.sid === this.channel.sid) {
          room.last = last
        }
      })


    },
    getToken(email) {
      Chatservice.getToken(email)
          .then(resp => {
            const data = resp.data


            this.token = data.token


            Chat.create(this.token)
                .then(resp => {
                  this.client = resp
                  this.client.setPushRegistrationId('fcm', fcm)


                  this.client.on("tokenAboutToExpire", async () => {
                    this.token = await this.getToken(email);
                    this.client.updateToken(this.token);
                  });

                  this.client.on("tokenExpired", async () => {
                    this.token = await this.getToken(email);
                    this.client.updateToken(this.token);
                  });
                  this.allChannels()


                })
                .catch(err => {

                  console.log(err)
                })
          })


    },
    allChannels() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.loadingchats = true


      ChatBackendservice.getuserchats(this.$store.state.user.username, auth)
          .then(backendresp => {
            this.client.getPublicChannelDescriptors()
                .then(resp => {
                  this.rooms = []
                  backendresp.data.forEach(myChats => {

                    resp.state.items.forEach(channel => {
                      if (channel.uniqueName === myChats.name) {
                        console.log(channel)
                        this.channelList.push(channel)
                      }


                    })

                  })
                  // console.log(this.channelList)

                  this.Checker()
                  this.channelList.forEach(room => {

                    this.client.getChannelBySid(room.sid)
                        .then(resp => {
                          let channel = resp

                          channel.getMessages().then(function (messages) {
                            if (messages.items.length > 0) {
                              channel["last"] = messages.items[messages.items.length - 1].body;
                            } else {
                              channel["last"] = '';
                            }
                          });
                          let members = channel.uniqueName.toLowerCase().split(',')
                          const index = members.indexOf(this.$store.state.user.username);
                          if (index > -1) {
                            members.splice(index, 1);
                          }
                          channel['ChatName'] = members[0]
                          this.rooms.push(channel)


                        })


                  })


                  this.loadingchats = false


                })

          })


    },
    computeChannels() {
      this.loadingchats = true

      this.rooms.forEach(room => {
        console.log(room)
        let members = room.uniqueName.toLowerCase().split(',')
        const index = members.indexOf(this.$store.state.user.username);
        if (index > -1) {
          members.splice(index, 1);
        }
        room.uniqueName = members[0]

      })
      this.loadingchats = false

    },
    deleteChannel() {
      this.channel.delete()
          .then(channel => {
            console.log('Deleted channel: ' + channel.sid);
            this.channel = ''
            let index
            this.rooms.forEach(room => {
              if (room.sid === channel.sid) {
                index = this.rooms.indexOf(room);
              }

            })
            if (index > -1) {
              this.rooms.splice(index, 1);
            }
          });


    },
    Checker() {
      if (this.ParamUser && this.$route.params.member) {
        let roomname = [this.$store.state.user.username, this.ParamUser.user.username].join()
        let altroomaname = [this.ParamUser.user.username,this.$store.state.user.username].join()
        let allroomnames = []
        if (this.channelList) {

          this.channelList.forEach(room => {
            allroomnames.push(room.uniqueName)
            if (room.uniqueName === roomname || altroomaname) {
              let members = room.uniqueName.toLowerCase().split(',')
              const index = members.indexOf(this.$store.state.user.username);
              if (index > -1) {
                members.splice(index, 1);
              }
              room['ChatName'] = members[0]
              this.callChannel(room)
            }


          })
        }
        if (allroomnames.includes(roomname) === false && allroomnames.includes(altroomaname)=== false) {
          this.createChannel(this.ParamUser.user)
        }

      }


    },
    fetchUsers() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.newChat = true
      this.loadingusers = true
      this.users = []

      UsersService.allusers(auth)
          .then(resp => {
            let index
            resp.data.forEach(user => {
              if (user.id === this.$store.state.user.pk) {
                index = resp.data.indexOf(user);
              }

            })
            if (index > -1) {
              resp.data.splice(index, 1);
            }
            let currentChats = []
            this.rooms.forEach(room => {
              let members = room.uniqueName.split(',')
              const index = members.indexOf(this.$store.state.user.username);
              if (index > -1) {
                members.splice(index, 1);
              }
              currentChats.push(members[0])
            })

            this.users = resp.data

            this.users.forEach(user => {
              currentChats.forEach(activemember => {
                if (user.username === activemember) {
                  const index = this.users.indexOf(user);
                  if (index > -1) {
                    this.users.splice(index, 1);
                  }

                }
              })
            })


            this.loadingusers = false

          })
          .catch(() => {
            this.loadingusers = false
          })

    },
    fetchMyChats() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      ChatBackendservice.getuserchats(this.$store.state.user.pk, auth)
          .then(resp => {
            this.chats = resp.data

          })
    },
    closeNewChat() {
      this.newChat = false
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;


}

.usercard {
  border-radius: 5px;
  background: #1F81CE;
  color: white
}

.container {
  overflow-y: scroll;
  height: 200px;
  padding: 5px;

}

.reciever {
  border-radius: 5px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}


</style>
