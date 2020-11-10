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

        <img v-bind:style="logo"
             style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
             v-bind:src="defaultlogo"
        >

      </router-link>
    </hide-at>
    <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;background-color: #F4F7FC">
      <a-menu-item key="9" @click="$router.push('/Developer')">
        <a-icon type="dashboard" />
        <span>Dashboard</span>
      </a-menu-item>
      <a-menu-item key="1" @click="$router.push('/DeveloperProjects')">
        <a-icon type="appstore" />
        <span>Manage my Projects</span>
      </a-menu-item>

      <a-menu-item key="3" @click="$router.push('/DeveloperEscrow')">
        <a-icon type="bank" />
        <span>Escrow Management</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="calendar" />
        <span>My Meetings</span>
      </a-menu-item>
      <a-menu-item key="5" @click="$router.push('/DevBugs')">
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
import { hideAt} from 'vue-breakpoints'
import Largelogo from '@/assets/logobg.svg'
export default {
  name: "DevSider",
  data() {
    return {
      collapsed: false,
      defaultlogo: Largelogo,
      key:['9']
    }

  },
  components: {
    hideAt,



  },
  computed: {
    getRoute(){
      let routename =this.$route
      console.log(routename)
      return routename
    }

  },
  methods:{
    onCollapse(collapsed, type) {
      return type;
    },
    onBreakpoint(broken) {
      return broken;
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
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
