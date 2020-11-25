<template>


  <a-card title="All Chats">

<!--<div v-for="conversation in chats.conversations" v-bind:key="conversation">-->
  <a-card :style="{ marginTop: '16px' }">
    <h2>Existing chats</h2>

    {{chats.conversations}}
    <a-button type="primary" @click="$router.push('ViewChat')">Open Chat</a-button>
    <br>
    <br>
    </a-card>

    <br>
    <br>
    <br>
     <!-- pass the user.username when calling this function-->
      <a-button type="primary" @click="startChat('david')">Chat New User</a-button>
<!--</div>-->

  </a-card>

</template>

<script>

import SendBird from 'sendbird';
import * as axios from "axios";



export default {
  name: "Chat",
  data() {
    return {
      chats: {},
    };
  },
  components: {},
  beforeCreate() {

  },

  computed: {},
  async mounted() {
    let self = this;

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
    startChat(USER_ID) {
      console.log('pressed');
       axios.get("http://localhost:8000/remote/v1/projects/chat/with",
           {
             params:{
               user: 'philisiah',
               other_user: USER_ID,
             }
           })
       .then(response => console.log(response.data)
       //    redirect to view chat

       )
           .catch(function (error) { console.log(error); });
    },
  }

}
</script>

<style scoped>

</style>