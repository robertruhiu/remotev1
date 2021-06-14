<template>
  <a-layout style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')">Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Myprojects')">Chat</a></a-breadcrumb-item>

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
            <a-col span="4">
              <a-card size="small" :bordered="false">
                <a-button type="primary" shape="circle" icon="plus" style="float: right" />
              </a-card>


              <a-card size="small" >
                <a-row>
                  <a-col span="4">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
                      D
                    </a-avatar>

                  </a-col>
                  <a-col span="20">
                    <p style="font-family: sofia_probold">Dennis Ruhiu</p>
                    <span style="font-family: sofia_prolight">i sent you the email</span>

                  </a-col>
                </a-row>



              </a-card>
              <a-card size="small" >
                <a-row>
                  <a-col span="4">
                    <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
                      R
                    </a-avatar>

                  </a-col>
                  <a-col span="20">
                    <p style="font-family: sofia_probold">Robert Ruhiu</p>
                    <span style="font-family: sofia_prolight">i sent you the email</span>

                  </a-col>
                </a-row>



              </a-card>

              <div style="margin-bottom: 1rem">
                <a-select style="width: 120px" @change="handleChange">
                  <a-select-option value="robertruhiu@gmail.com">
                    robert
                  </a-select-option>
                  <a-select-option value="dennis@codeln.com">
                    dennis
                  </a-select-option>

                </a-select>
                <a-button type="primary" @click="login">
                  load rooms
                </a-button>
              </div>


              <div v-for="roomName in channelList" v-bind:key="roomName">
                <a-card size="small" @click="callChannel(roomName.uniqueName)">
                  <span slot="title">{{ roomName.sid }}</span>
                  <a slot="extra" href="#" @click="deleteChannel(roomName)">delete</a>

                </a-card>


              </div>


            </a-col>
            <a-col span="20">
              <a-card>
                <span slot="title" style="font-family: sofia_probold">Dennis Ruhiu</span>

                <div style="height:35rem;overflow: auto;">

                  <a-row>
                    <a-col :span="8">
                      <a-row :gutter="16">
                        <a-col :span="2">
                          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">
                            U
                          </a-avatar>
                        </a-col>
                        <a-col :span="22">
                          <a-card size="small" class="reciever">


                            <span style="font-family: sofia_prolight">i sent you the email</span>

                          </a-card>
                        </a-col>
                      </a-row>


                    </a-col>

                  </a-row>
                  <a-row>

                    <a-col :span="8" :offset="14">
                      <a-row :gutter="16">

                        <a-col :span="22">
                          <a-card size="small" class="usercard">


                            <span style="font-family: sofia_prolight">i have recieved it</span>

                          </a-card>
                        </a-col>
                        <a-col :span="2">
                          <a-avatar >
                            U
                          </a-avatar>
                        </a-col>
                      </a-row>

                    </a-col>
                  </a-row>



                </div>


                <div>
                  <a-row>
                    <a-col span="22">
                      <a-textarea

                          :auto-size="{ minRows: 1, maxRows: 2 }"
                      />

                    </a-col>
                    <a-col span="2">
                      <a-button type="primary">
                        <a-icon type="form" :rotate="180" />
                        Send
                      </a-button>

                    </a-col>
                  </a-row>


                </div>


                <a-card-meta class="chat-box-body">
                  <template slot="description" style="opacity: 1">
                    <div v-if="channel">
                      <div v-for="message in messages" v-bind:key="message">
                        {{ message }}
                      </div>


                      <a-input style="width: 120px" v-model="text" @change="texttype"/>

                      <a-button type="primary" @click="sendMessage">
                        send
                      </a-button>
                    </div>
                  </template>
                </a-card-meta>

              </a-card>

            </a-col>
          </a-row>
        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>

import Chat from 'twilio-chat'

import ClientSider from "@/components/client/layout/ClientSider";

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
      currentUserId: ''


    }
  },
  components: {ClientSider},
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


    },


  },

  methods: {
    deleteChannel(channel){

      this.channel = channel
      this.channel.deleteChannel(channel.sid)


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

      if (this.email) {
        this.getToken(this.email)
        this.currentUserId = this.email


      }

    },
    getToken(email) {
      Chat.token(email)
          .then(resp => {
            const data = resp.data
            this.token = data.token
            Chat.create(this.token)
                .then(resp => {
                  this.client = resp
                  this.client.on("tokenAboutToExpire", async () => {
                    this.token = await Chat.token(email);
                    this.client.updateToken(this.token);
                  });

                  this.client.on("tokenExpired", async () => {
                    this.token = await Chat.token(email);
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
      this.client.getPublicChannelDescriptors()
          .then(resp => {
            resp.state.items.forEach(channel => {
              this.channelList.push(channel)
            })
            this.rooms = this.channelList
          })

    },

    callChannel(room) {
      if (room) {
        this.client.getChannelByUniqueName(this.room)
            .then(resp => {
              this.channel = resp
              this.joinChannel(this.channel);
            })
            .catch(() => {
              try {
                this.client.createChannel({
                  uniqueName: this.room,
                  friendlyName: this.room,
                })
                    .then(resp => {
                      this.channel = resp
                      this.joinChannel(this.channel);
                    })


              } catch {
                throw new Error("Unable to create channel, please reload this page");
              }

            })


      }


    },

    joinChannel() {
      if (this.channel.channelState.status !== "joined") {
        this.channel.join();
        this.events = this.channel._events
        this.channel.getMessages()
            .then(resp => {
              resp.items.forEach(messageobj => {
                this.messages.push(messageobj.state)
              })



            })

      } else {
        this.channel.getMessages()
            .then(resp => {
              resp.items.forEach(messageobj => {
                this.messages.push(messageobj.state)
              })


            })
      }
      this.loading = false


    },
    sendMessage() {

      if (this.text && this.channel) {
        this.loading = true

        this.channel.sendMessage(String(this.text).trim());
        this.handleMessageAdded(this.text)
        this.text = ''
        this.loading = false

      }
    },
    handleMessageAdded() {
      this.channel.getMessages()
          .then(resp => {
            resp.items.forEach(messageobj => {
              this.messages.push(messageobj.state)
            })


          })


    },



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
  color:white
}
.reciever{
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
