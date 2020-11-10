<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC;">
    <router-link to="/">

      <img v-bind:style="logo"
           style=";height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
           v-bind:src="defaultlogo"
      >

    </router-link>
    <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;background-color: #F4F7FC">
      <a-menu-item key="9" @click="$router.push('/Dashboard')">
        <a-icon type="dashboard" />
        <span>Dashboard</span>
      </a-menu-item>
      <a-menu-item key="1" @click="$router.push('/Myprojects')">
        <a-icon type="appstore" />
        <span>Manage my Projects</span>
      </a-menu-item>
      <a-menu-item key="2" @click="$router.push('/Create')">
        <a-icon type="plus" />
        <span>Create a Project</span>
      </a-menu-item>
      <a-menu-item key="3" @click="$router.push('/Escrow')">
        <a-icon type="bank" />
        <span>Escrow Management</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="calendar" />
        <span>My Meetings</span>
      </a-menu-item>
      <a-menu-item key="5" @click="$router.push('/ClientBugs')">
        <a-icon type="exclamation" />
        <span>Bugs & issues</span>
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="message" />
        <span>Chat</span>
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="solution" />
        <span>Edit Profile</span>
      </a-menu-item>
      <a-menu-item key="8" @click="logout">
        <a-icon type="logout" />
        <span>logout</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>

</template>

<script>
import Smalllogo from '@/assets/cropped.png'

export default {
name: "SmallSider",
  components: {




  },
  data() {
    return {
      collapsed:true,
      defaultlogo: Smalllogo,


    }
  },
  async mounted() {





  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setisLoggedIn', false)
      this.$store.dispatch('setUser_object', null)
      this.$store.dispatch('setProjectedit', null)



      this.$router.push({
        name: 'home'
      })
    },


  }
}
</script>

<style scoped>

</style>
