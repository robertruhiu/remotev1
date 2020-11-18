<template>
  <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC"
  >
    <hide-at :breakpoints="{small: 425, medium: 768}" breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
             style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
             v-bind:src="defaultlogo"
        >

      </router-link>
    </hide-at>
    <show-at  breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
            style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
            v-bind:src="defaultlogo"
        >

      </router-link>
    </show-at>
    <a-menu  mode="inline"   style="font-family: sofia_proregular;background-color: #F4F7FC">
      <a-menu-item key="9" @click="$router.push('/Admindashboard')">
        <a-icon type="dashboard" />
        <span>Home</span>
      </a-menu-item>
      <a-menu-item key="1" @click="$router.push('/AdminProjects')">
        <a-icon type="appstore" />
        <span>Manage Projects</span>
      </a-menu-item>
      <a-menu-item key="2" @click="newproject">
        <a-icon type="plus" />
        <span>Create a Project</span>
      </a-menu-item>
      <a-menu-item key="3" @click="$router.push('/AdminEscrow')">
        <a-icon type="bank" />

        <span>Escrow Management</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="calendar" />
        <span>My Meetings</span>
      </a-menu-item>
      <a-menu-item key="5" @click="$router.push('/AdminIssues')">
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
import { hideAt,showAt} from 'vue-breakpoints'
import Largelogo from '@/assets/logobg.svg'
export default {
name: "Adminsider",
  data() {
    return {
      collapsed: false,
      defaultlogo: Largelogo,
      top:0
    }

  },
  components: {
    hideAt,showAt
  },
  methods:{
    onCollapse(collapsed, type) {
      return type;
    },
    onBreakpoint(broken) {
      return broken;
    },
    newproject(){
      this.$store.dispatch('setProject', null)
      this.$router.push({
        name: 'AdminCreateEditProject'
      })
    },
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
