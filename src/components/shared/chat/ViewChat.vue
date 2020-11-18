<template>
  <a-layout>
    <h2> Type your message</h2>
    <br>
    <br>
    <a-textarea  v-model="message" placeholder="Basic usage" :rows="4"/>
     <br>
    <br>
    <a-button type="primary" @click="sendMessage()">Send Message</a-button>
  </a-layout>

</template>

<script>

import SendBird from 'sendbird';

var sb = new SendBird({appId: '96D6AA91-434B-41D6-8541-2F9B9096E4B2'});

export default {
  name: "ViewChat",
  data() {
    return {
      myChannels: {},
      message: '',
      channel: 'sendbird_group_channel_63269494_bb5a7597b3a9ca55256c52a54369359317e7a0b4',

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
  },
  methods: {
    sendMessage() {
      var MESSAGE = this.message;
      sb.GroupChannel.getChannel('sendbird_group_channel_63269494_bb5a7597b3a9ca55256c52a54369359317e7a0b4',
          function (openChannel, error) {
            if (error) {
              return;
            }


            openChannel.sendUserMessage(MESSAGE, function (message, error) {
              if (error) {
                return;
              }
              // this.$router.push('/chat');
            });


          });
    },
  }

}
</script>

<style scoped>

</style>