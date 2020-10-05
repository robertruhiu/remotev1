<template>
  <div >

    <div>
      <div class="container">
        <div class="col-lg-6 offset-lg-3">

          <div v-if="ready">
            {{CurrentProject}}
          </div>

          <div v-if="!ready">
            <h4>Enter meeting room</h4>

            <form @submit.prevent="enterMeeting">
              <div class="form-group row">
                <input type="text" class="form-control col-9" v-model="meeting_id"
                       placeholder="Enter meeting room here">
                <input type="text" class="form-control col-9" v-model="username"
                       placeholder="Enter your name">
                <input type="submit" value="Join" class="btn btn-sm btn-info ml-1">

              </div>
            </form>
          </div>
          <div v-else>
            <h2 v->{{CurrentProject.meeting_id}}/{{username}}</h2>
            <input type="text" class="form-control col-9" v-model="CurrentProject.title"
                   placeholder="title">
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
var socket = io.connect("http://localhost:3000");
class Project {
  constructor(meeting_id,requirements,title,budget,client_notes,developer_notes) {
    this.meeting_id = meeting_id;
    this.requirements = requirements
    this.title = title
    this.budget = budget
    this.client_notes = client_notes
    this.developer_notes = developer_notes




  }
}

export default {
name: "Videocall",
  components: {

  },
  data() {
    return {

      newMessage: null,
      messages: [],
      typing: false,
      username: null,
      ready: false,
      info: [],
      connections: 0,
      meeting_id:'',
      meeting_data:[],


    }
  },
  created() {
    window.onbeforeunload = () => {
      socket.emit('leave', this.username);
    }

    socket.on('chat-message', (data) => {
      this.messages.push({
        message: data.message,
        type: 1,
        user: data.user,
      });
    });

    socket.on('typing', (data) => {
      this.typing = data;
    });


    socket.on('stopTyping', () => {
      this.typing = false;
    });

    socket.on('joined', (data) => {
      this.info.push({
        username: data,
        type: 'joined'
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on('leave', (data) => {
      this.info.push({
        username: data,
        type: 'left'
      });

      setTimeout(() => {
        this.info = [];
      }, 5000);
    });

    socket.on('connections', (data) => {
      this.connections = data;
    });
  },
  computed:{
    CurrentProject(){
      let currentmeeting = {}
      this.meeting_data.forEach(meeting=>{
        if(meeting.meeting_id === this.meeting_id){
          currentmeeting = meeting
        }
      })
      return  currentmeeting
    }
  },

  watch: {
    newMessage(value) {
      value ? socket.emit('typing', this.username) : socket.emit('stopTyping')
    }
  },
  methods: {
    send() {
      this.messages.push({
        message: this.newMessage,
        type: 0,
        user: 'Me',
      });

      socket.emit('chat-message', {
        message: this.newMessage,
        user: this.username
      });
      this.newMessage = null;
    },

    addUser() {
      this.ready = true;
      socket.emit('joined', this.username)
    },
    enterMeeting() {
      this.ready = true;
      socket.emit('joined_meeting', this.meeting_id)
      let meeting_id = this.meeting_id
      let requirements = {}
      let title =''
      let budget =''
      let projectmeeting = new Project(
          meeting_id,requirements,title,budget

      );
      this.meeting_data.push(projectmeeting)




    }
  },



}

</script>

<style scoped>

</style>
