<template>


  <a-card title="All Chats">

<div v-for="channel in myChannels" v-bind:key="channel">
  <a-card :style="{ marginTop: '16px' }">


      <a-button type="primary" @click="sendMessage('Phil is Calling')">Send Message</a-button>
      <br>
      <a-button type="primary" @click="createChannel('HARRY')">Create Channel</a-button>
      <br>
    <p>Chat between {{ channel.creator.userId }} last message by {{ channel.lastMessage.message}}</p>
      <br>
    <a-button type="primary">Open Chat</a-button>

    </a-card>
</div>

  </a-card>

</template>

<script>

import SendBird from 'sendbird';

var sb = new SendBird({appId: '96D6AA91-434B-41D6-8541-2F9B9096E4B2'});

export default {
  name: "Chat",
  data() {
    return {
      myChannels: {},
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
     var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
      channelListQuery.includeEmpty = true;
      channelListQuery.order = 'latest_last_message'; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'
      channelListQuery.limit = 15;    // The value of pagination limit could be set up to 100.

      if (channelListQuery.hasNext) {
        channelListQuery.next(function (groupChannels, error) {
          if (error) {
            return;
          }

          // console.log(groupChannels);
          self.myChannels = groupChannels;
        });
      }
  },
  methods: {
    createChannel(USER_ID) {
      console.log('pressed');
      var userIds = ['PHIL', USER_ID];


      // When 'distinct' is false
      sb.GroupChannel.createChannelWithUserIds(userIds, true, function (groupChannel, error) {
        if (error) {
          console.log(error);
          return;
        }
        console.log(groupChannel);
      });
    },
    sendMessage(MESSAGE) {
      // var CHANNEL_URL = this.channel;
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