<template>
  <a-layout>
    <h2> Type your message</h2>
    <br>
    {{ messages }}
    <br>
    <a-textarea v-model="message" placeholder="Basic usage" :rows="4"/>
    <br>
    <br>
    <a-button type="primary" @click="sendMessage()">Send Message</a-button>
  </a-layout>

</template>

<script>

import SendBird from 'sendbird';
import * as axios from "axios";

var sb = new SendBird({appId: '96D6AA91-434B-41D6-8541-2F9B9096E4B2'});

export default {
  name: "ViewChat",
  data() {
    return {
      myChannels: {},
      message: '',
      messages: {},
      channel_url: 'sendbird_group_channel_64386779_4ce2a5ec0bd2650b43d1976c6d2ba32c90377515',

    };
  },
  components: {},
  beforeCreate() {
    sb.connect('PHIL', function (user, error) {
      if (error) {
        return;
      }
    });
  },
  async mounted() {
    axios.get("http://localhost:8000/remote/v1/projects/chat/with",
        {
          params: {
            user: 'philisiah',
            other_user: 'david',
          }
        })
        .then(response => this.messages = response.data).catch(function (error) {
      console.log(error);
    });
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
      axios.post('http://localhost:8000/remote/v1/projects/chat/send_message/philisiah/' +
          'david/sendbird_group_channel_64386779_4ce2a5ec0bd2650b43d1976c6d2ba32c90377515/', params).then(function (response) {
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

</style>