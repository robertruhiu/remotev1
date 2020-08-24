<template>

    <a-layout-header id="components-layout-demo-fixed" :style="{ position: 'fixed', zIndex: 20, width: '100%',
    backgroundColor:'#ffffff',borderBottom: '1px solid #e8e8e8',}">
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logobg.svg" style="width: 100%;margin-left: 1.5rem">

            </router-link>



        </div>
      <div class="ant-menu-horizontal " :style="{ lineHeight: '64px',float: 'right',borderBottom: 0}">

        <router-link to="/Dashboard"   class="ant-menu-item" style="margin-bottom: 0">Dashboard</router-link>
      </div>





    </a-layout-header>


</template>

<script>



    export default {
        name: "Header",
        components: {



        },
        data() {
            return {


            }
        },
        async mounted() {





        },
        methods: {


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
