<template>
  <div style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC;">
    <show-at breakpoint="mediumAndBelow">
      <KanbanSider/>
    </show-at>
    <hide-at breakpoint="mediumAndBelow">
      <a-layout-sider v-model="collapsed" :trigger="null"  style="background-color: #F4F7FC;" >
        <router-link to="/">

          <img
               style=";height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
               v-bind:src="defaultlogo"
          >

        </router-link>
        <a-menu  mode="inline" :default-selected-keys=key  style="font-family: sofia_proregular;background-color: #F4F7FC;border-right: hidden">
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

          <a-menu-item key="5" @click="$router.push('/DevBugs')">
            <a-icon type="exclamation" />
            <span>Bugs & issues</span>
          </a-menu-item>


          <a-menu-item key="8" @click="logout">
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
import KanbanSider from '@/components/developer/layout/Kanbansider'
export default {
name: "DeveloperSmall",
  components: {KanbanSider,hideAt,showAt,},
  data() {
    return {
      collapsed:true,
      defaultlogo: Smalllogo,


    }
  },
  methods:{

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
