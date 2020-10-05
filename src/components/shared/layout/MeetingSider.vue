<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible
                  style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: #F4F7FC;">
    <router-link to="/">

      <img v-bind:style="logo"
           style=";height: 2rem;margin-top: 1rem;margin-bottom: 1rem;margin-left: 1rem"
           v-bind:src="defaultlogo"
      >

    </router-link>
    <a-menu mode="inline" :default-selected-keys=key style="font-family: sofia_proregular;background-color: #F4F7FC">
      <a-menu-item key="1" @click="$router.push('Dashboard')">
        <a-icon type="dashboard"/>
        <span>Home</span>
      </a-menu-item>




      <a-menu-item key="4">
        <a-icon type="logout"/>
        <span>logout</span>
      </a-menu-item>
    </a-menu>

  </a-layout-sider>

</template>

<script>
import Smalllogo from '@/assets/cropped.png'





export default {
  name: "MeetingSider",

  data() {
    return {
      collapsed: true,
      defaultlogo: Smalllogo,


    }
  },


  methods: {



  }
}
</script>

<style scoped>

</style>
