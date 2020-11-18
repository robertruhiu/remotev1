<template>
  <div style="background-color: #F4F7FC;">
    <show-at breakpoint="mediumAndBelow">
      <KanbanSider/>
    </show-at>
    <hide-at breakpoint="mediumAndBelow">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="background-color: #F4F7FC">
        <router-link to="/">

          <img
               style=";height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
               v-bind:src="defaultlogo"
          >

        </router-link>
        <a-menu  mode="inline"  style="font-family: sofia_proregular;background-color: #F4F7FC;border-right: hidden">
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
    </hide-at>
  </div>

</template>

<script>
import Smalllogo from '@/assets/cropped.png'
import { hideAt,showAt} from 'vue-breakpoints'
import KanbanSider from '@/components/admin/adminkanban/layout/smallsider'
export default {
name: "kanbanside",
  components: {KanbanSider,hideAt,showAt,},
  data() {
    return {
      collapsed:true,
      defaultlogo: Smalllogo,


    }
  },
  async mounted() {





  },
  methods: {
    newproject(){
      this.$store.dispatch('setProjectedit', null)
      this.$router.push({
        name: 'AdminCreateEditProject'
      })
    }


  }
}
</script>

<style scoped>

</style>
