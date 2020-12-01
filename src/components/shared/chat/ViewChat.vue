<template>
  <a-layout>
    <div class="app">

      <div class="wrapper">

        <div class="chat-area">
          <div class="chat-area-header">
            <div class="chat-area-title">CodePen Group</div>
          </div>
          <div class="chat-area-main">

            <div class="chat-msg">
              <div class="chat-msg-profile">

                <div class="chat-msg-date">2.45pm</div>
              </div>
              <div class="chat-msg-content">
                <div class="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae😊</div>

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
          <div class="chat-area-footer">

            <input type="text" v-model="message" placeholder="Type something here..." />
            <a-button type="primary" @click="sendMessage()">Send</a-button>

          </div>
        </div>

      </div>
    </div>






  </a-layout>

</template>

<script>

import * as axios from "axios";
import moment from 'moment';

export default {
  name: "ViewChat",
  data() {
    return {
      message: '',
      messages: {},
      hee: [],
      moment
    };
  },
  components: {},
  beforeCreate() {

  },
  async mounted() {
    axios.get("http://localhost:9000/remote/v1/projects/chat/with",
        {
          params: {
            user: 'jessica',
            other_user: 'dennis',
          }
        })
        .then(response => {
              this.messages = response.data

            }
        )

  },

  methods: {
    sendMessage() {
      const self = this;

      // var MESSAGE = this.message;
      // var url = this.channel_url;
      //todo: use passed channel url from chat list
      var params = {
        message: this.message,
      }
      axios.post('http://localhost:9000/remote/v1/projects/chat/send_message/jessica/' +
          'admin/sendbird_group_channel_64617788_0a254aec2957b80c11d1cb411040f5277dd01074/', params).then(function (response) {
        self.messages = response.data['messages'];
      })
          .catch(function (error) {
            console.log(error);
          });
    }

  }
}

</script>

<style scoped>

.blue {
  background-color: #0086ff;
}

.purple {
  background-color: #9f7aea;
}

.green {
  background-color: #38b2ac;
}

.orange {
  background-color: #ed8936;
}

* {
  outline: none;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

body {
  background-color: var(--body-bg-color);
  font-family: var(--body-font);
  color: var(--body-color);
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.app {
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

.header {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.conversation-area,
.detail-area {
  width: 340px;
  flex-shrink: 0;
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


.user-settings {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}
.user-settings > * + * {
  margin-left: 14px;
}


.user-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}



.conversation-area {
  border-right: 1px solid ;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.msg-profile {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}
.msg-profile.group {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--border-color);
}
.msg-profile.group svg {
  width: 60%;
}

.msg {
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
}

.msg-username {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 15px;
}

.msg-detail {
  overflow: hidden;
}

.msg-content {
  font-weight: 500;
  font-size: 13px;
  display: flex;
}


.msg-date:before {
  content: "•";
  margin-right: 2px;
}



.overlay {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 340px;
  flex-shrink: 0;
  height: 80px;
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
.chat-area-profile {
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.chat-area-title {
  font-size: 18px;
  font-weight: 600;
}
.chat-area-main {
  flex-grow: 1;
}

.chat-msg-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
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
