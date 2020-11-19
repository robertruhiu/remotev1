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

var sb = new SendBird({appId: '96D6AA91-434B-41D6-8541-2F9B9096E4B2'});

export default {
  name: "ViewChat",
  data() {
    return {
      myChannels: {},
      message: '',
      messages: {
        "message_id": 273779321,
        "type": "MESG",     // File and admin messages aren't supported by the message auto-translation feature.
        "custom_type": "",
        "channel_url": "sendbird_group_channel_6037267_600ddc81a5e23049c804193370d47217fa2ed5f9",
        "user": {
          "user_id": "Julia",
          "nickname": "Yogini",
          "profile_url": "https://sendbird.com/main/img/profiles/profile_94_512px.png",
          "metadata": {
            "location": "Bali",
            "marriage": "N"
          }
        },
        "mention_type": "users",
        "mentioned_users": [],
        "is_removed": false,
        "message": "Hi, nice to meet you!",
        "translations": {   // The message has been translated into the specified languages.
          "es": "¡Hola, encantado de conocerte!",     // Spanish
          "de": "Hallo, schön, Sie zu treffen!"       // German
        },
        "data": "",
        "created_at": 1544810640267,
        "updated_at": 0,
        "file": {}
      },
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