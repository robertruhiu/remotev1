<template>


  <a-card title="All Chats">

<div v-for="chat in chats" v-bind:key="chat">
  <a-card :style="{ marginTop: '16px' }">

    {{chats}}
    <a-button type="primary" @click="$router.push('ViewChat')">Open Chat</a-button>
    <br>
    <br>
      <a-button type="primary" @click="createChannel('david')">Start New Chat</a-button>
      <br>

    </a-card>
</div>

  </a-card>

</template>

<script>

import SendBird from 'sendbird';
import * as axios from "axios";

var sb = new SendBird({appId: '96D6AA91-434B-41D6-8541-2F9B9096E4B2'});

export default {
  name: "Chat",
  data() {
    return {
      chats: {},
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

  computed: {},
  async mounted() {
    let self = this;
     // var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
     //  channelListQuery.includeEmpty = true;
     //  channelListQuery.order = 'latest_last_message'; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'
     //  channelListQuery.limit = 15;    // The value of pagination limit could be set up to 100.
     //
     //  if (channelListQuery.hasNext) {
     //    channelListQuery.next(function (groupChannels, error) {
     //      if (error) {
     //        return;
     //      }
     //
     //      // console.log(groupChannels);
     //      self.myChannels = groupChannels;
     //    });
     //  }
      axios.get("http://localhost:8000/remote/v1/projects/chat/all",
           {
             params:{
               user: 'philisiah',
             }
           })
       .then(response =>
         this.chats = response.data
       ).catch(function (error) { console.log(error); });

      console.log(self.chats);
  },
  methods: {
    createChannel(USER_ID) {
      console.log('pressed');
       axios.get("http://localhost:8000/remote/v1/projects/chat/with",
           {
             params:{
               user: 'philisiah',
               other_user: USER_ID,
             }
           })
       .then(response => console.log(response.data))
           .catch(function (error) { console.log(error); });

    },
    sendMessage(MESSAGE) {
      sb.GroupChannel.getChannel('sendbird_group_channel_63269494_bb5a7597b3a9ca55256c52a54369359317e7a0b4',
          function (openChannel, error) {
            if (error) {
              return;
            }


            openChannel.sendUserMessage(MESSAGE, function (message, error) {
              if (error) {
                return;
              }
            });

          });
    },

  }

}
</script>

<style scoped>

</style>