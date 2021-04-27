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
                  <div v-for="chat in chats" v-bind:key="chat.id">
                    <a-row class="hero" style="margin-bottom: 1rem">
                      <a @click="fetchmessages('admin')" style="color: black">
                        <a-col span="4">
                          <a-avatar style="color: #f56a00; backgroundColor: #fde3cf;margin-top: 1rem">
                            U
                          </a-avatar>
                        </a-col>
                        <a-col span="18">
                          <span>Name{{ chat }}</span><br>
                          last message

                        </a-col>
                      </a>

                    </a-row>


                  </div>
                </div>


              </a-card>
            </a-col>
            <a-col span="18">
              <div v-if="other_user ===''" style="padding: 5%">
                <a-result
                    title="Welcome to the chat.You can start or continue converation .Please click on the person u want to chat with to start">
                  <template #icon>
                    <a-icon type="smile" theme="twoTone"/>
                  </template>

                </a-result>
              </div>

              <a-card v-else>
                <span slot="title">
                  {{ other_user }}
                </span>
                <div style="position: relative;height: 79vh">
                  <div id="out" style="overflow-y: auto;position: absolute;width: 100%;height: 75vh">
                    <div v-if="loading">
                      <a-skeleton active/>
                    </div>
                    <div v-else>
                      {{ messages }}
                      <div class="chat-msg">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.45pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante
                            ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia curae😊
                          </div>

                        </div>
                      </div>
                      <div class="chat-msg owner">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.50pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>

                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">
                          <div class="chat-msg-date">3.16pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.45pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante
                            ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia curae😊
                          </div>

                        </div>
                      </div>
                      <div class="chat-msg owner">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.50pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>

                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">
                          <div class="chat-msg-date">3.16pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.45pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante
                            ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia curae😊
                          </div>

                        </div>
                      </div>
                      <div class="chat-msg owner">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.50pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>

                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">
                          <div class="chat-msg-date">3.16pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.45pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante
                            ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia curae😊
                          </div>

                        </div>
                      </div>
                      <div class="chat-msg owner">
                        <div class="chat-msg-profile">

                          <div class="chat-msg-date">2.50pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>

                        </div>
                      </div>
                      <div class="chat-msg">
                        <div class="chat-msg-profile">
                          <div class="chat-msg-date">3.16pm</div>
                        </div>
                        <div class="chat-msg-content">
                          <div class="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div style="position: absolute;bottom: 0;width: 100%">
                    <a-row>
                      <a-col span="22">
                        <a-textarea placeholder="Type something here..." :auto-size="{ minRows: 2, maxRows: 6 }"
                                    v-model="message" v-on:click.enter="sendMessage"/>

                      </a-col>
                      <a-col span="2">
                        <a-button type="primary" @click="sendMessage">Send</a-button>
                      </a-col>
                    </a-row>


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

import * as axios from "axios";

import ClientSider from "@/components/client/layout/ClientSider";

export default {
  name: "Chat",
  data() {
    return {
      chats: {},
      user: 'dennis',
      other_user: '',
      users: ['dennis',  'admin'],
      message: '',
      messages: {},
      loading: false,
      newchat: false
    };
  },
  components: {ClientSider},
  beforeCreate() {

  },

  computed: {},
  async mounted() {
    axios.get("http://localhost:9000/remote/v1/projects/chat/all",
        {
          params: {
            user: this.user,
          }
        })
        .then(response =>
            this.chats = response.data
        ).catch(function (error) {
      console.log(error);
    });


  },
  methods: {
    fetchmessages(user) {
      var objDiv = document.getElementById("out");
      objDiv.scrollTop = objDiv.scrollHeight;
      if (user !== this.other_user) {
        this.other_user = user
        this.loading = true
        axios.get("http://localhost:9000/remote/v1/projects/chat/with",
            {
              params: {
                user: this.user,
                other_user: this.other_user,
              }
            })
            .then(response => {
                  this.messages = response.data
                  this.loading = false

                }
            )
      }


    },

    newChat() {
      this.newchat = !this.newchat
    },
    startChat(USER_ID) {
      console.log('pressed');
      axios.get("http://localhost:8000/remote/v1/projects/chat/with",
          {
            params: {
              user: this.user,
              other_user: USER_ID,
            }
          })
          .then(response => console.log(response.data)
              //    redirect to view chat

          )
          .catch(function (error) {
            console.log(error);
          });
    },
    sendMessage() {
      const self = this;


      // var MESSAGE = this.message;
      // var url = this.channel_url;
      //todo: use passed channel url from chat list
      var params = {
        message: this.message,
      }
      axios.post('http://localhost:8000/remote/v1/projects/chat/send_message/dennis/' +
          'admin/sendbird_group_channel_64617788_0a254aec2957b80c11d1cb411040f5277dd01074/', params).then(function (response) {
        self.messages = response.data['messages'];

      })
          .catch(function (error) {
            console.log(error);
          });
      this.message = ''
    }
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
