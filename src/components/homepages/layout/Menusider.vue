
<template>


  <a-dropdown :trigger="['click']" placement="bottomCenter">
    <a class="ant-dropdown-link" href="#">

      <a-icon type="menu-fold" />
    </a>
    <a-menu slot="overlay">



      <a-menu-item key="8">
        <router-link to="/jobs">

          <span>Job board </span>
        </router-link>

      </a-menu-item>

      <a-menu-item key="1" v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='recruiter'">
        <router-link to="/Dashboard">

          <span>My account</span>
        </router-link>
      </a-menu-item>



      <a-menu-item key="2" v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='developer'">
        <router-link to="/Developer">

          <span>My account</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="3" v-if="!$store.state.isUserLoggedIn">
        <router-link to="/login">

          <span>Login</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4" v-if="!$store.state.isUserLoggedIn">
        <router-link to="/register">

          <span>Register</span>
        </router-link>
      </a-menu-item>


      <a-menu-item key="5" v-if="$store.state.isUserLoggedIn">

        <a @click="logout">Logout</a>
      </a-menu-item>



    </a-menu>
  </a-dropdown>
</template>

<script>

export default {
  name: "Menusider",
  data() {

    return {
      currentUserProfile: null,


    }

  },
  async mounted() {





  },
  methods: {

    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setisLoggedIn', false)
      this.$store.dispatch('setUsertype', null)
      this.$store.dispatch('setUser_id', null)
      this.$store.dispatch('setNext',null)

      this.$router.push({
        name: 'home'
      })
    },
  }
}
</script>

<style scoped>

</style>
