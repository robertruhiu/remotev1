<template>
  <a-layout-sider
      breakpoint="xl"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="background-color: #F4F7FC"
  >
    <show-at  breakpoint="mediumAndBelow">
      <router-link to="/">

        <img
            style="width: 9rem;height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
            v-bind:src="defaultlogo"
        >

      </router-link>
    </show-at>


    <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;background-color: #F4F7FC;border-right: hidden">
      <a-menu-item key="9" @click="$router.push('/Admindashboard')">
        <a-icon type="dashboard" />
        <span>Home</span>
      </a-menu-item>
      <a-menu-item key="1" @click="$router.push('/AdminProjects')">
        <a-icon type="appstore" />
        <span>Manage my Projects</span>
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
      <a-menu-item key="8">
        <a-icon type="logout" />
        <span>logout</span>
      </a-menu-item>
    </a-menu>

  </a-layout-sider>
</template>

<script>
import { showAt} from 'vue-breakpoints'
import Largelogo from '@/assets/logobg.svg'
export default {
name: "smallsider",
  data() {
    return {
      collapsed: false,
      defaultlogo: Largelogo,


    }

  },
  components: {
    showAt




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
