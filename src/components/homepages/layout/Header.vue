<template>

    <a-layout-header id="components-layout-demo-fixed" :style="{ position: 'fixed', zIndex: 20, width: '100%',
    backgroundColor:'#ffffff',borderBottom: '1px solid #e8e8e8',}">
        <div class="logo">
            <router-link to="/">

                <img src="@/assets/logobg.svg" style="width: 100%;margin-left: 1.5rem">

            </router-link>



        </div>
      <hide-at breakpoint="mediumAndBelow">
      <div class="ant-menu-horizontal " :style="{ lineHeight: '64px',float: 'right',borderBottom: 0}">
        <a href="https://www.codeln.com/" target="_blank" class="ant-menu-item" style="margin-bottom: 0">
          Go to Codeln
        </a>
        <router-link to="/Jobs"   class="ant-menu-item" style="margin-bottom: 0">Gigs board</router-link>




        <router-link to="/Dashboard" class="ant-menu-item" style="margin-bottom: 0"
                     v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='recruiter' && $store.state.user_object.stage ==='complete' ">
          My account
        </router-link>
        <router-link to="/Register" class="ant-menu-item" style="margin-bottom: 0"
                     v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='recruiter' && $store.state.user_object.stage !=='complete' ">
          My account
        </router-link>
        <router-link to="/Register" class="ant-menu-item" style="margin-bottom: 0"
                     v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='developer'&& $store.state.user_object.stage !=='complete'">
          My account
        </router-link>
        <router-link to="/Developer" class="ant-menu-item" style="margin-bottom: 0"
                     v-if="$store.state.isUserLoggedIn && $store.state.user_object.user_type ==='developer'&& $store.state.user_object.stage ==='complete'">
          My account
        </router-link>
        <router-link to="/Login" class="ant-menu-item" style="margin-bottom: 0"
                     v-if="!$store.state.isUserLoggedIn">
          Login
        </router-link>



        <a>
          <a-button
              style="margin-bottom: 0;border: 0;-webkit-box-shadow: 0 0 0 rgba(255,255,255,0.01);color: #1890ff"
              v-if="$store.state.isUserLoggedIn" @click="logout">Logout
          </a-button>
        </a>
      </div>
      </hide-at>
      <show-at breakpoint="mediumAndBelow">
        <div style="float: right">
        <Menusider/>
        </div>
      </show-at>





    </a-layout-header>


</template>

<script>
import {showAt, hideAt} from 'vue-breakpoints'
import Menusider from '@/components/homepages/layout/Menusider'

    export default {
        name: "Header",
        components: {
          hideAt, showAt,Menusider



        },
        data() {
            return {


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

    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;
        margin: 0 24px 16px 0;
        float: left;
    }
</style>
