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
import * as axios from "axios";
export default {
  name: "ViewChat",
  data() {
    return {
      message: '',
      messages: {},
    };
  },
  components: {},
  beforeCreate() {
  },
  async mounted() {
    axios.get("http://127.0.0.1:8000/remote/v1/projects/chat/with",
        {
          params: {
            user: 'admin',
            other_user: 'jessica',
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
      axios.post('http://127.0.0.1:8000/remote/v1/projects/chat/send_message/admin/' +
          'jessica/sendbird_group_channel_84859220_57084f133d38952f66d2df4ce3ceeb19b130629d', params).then(function (response) {
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
