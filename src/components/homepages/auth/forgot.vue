<template>
  <a-layout>

    <Pageheader/>
    <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

      <div :style="{ background: '#fff', minHeight: '81vh' }">
        <a-row style="padding: 3%">
          <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                 :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
            <a-card  title="Forgot password" :style="{width:'21rem'}">




              <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit.prevent="login"

              >

                <a-form-item>

                  <a-input
                      v-model="password"
                      placeholder="New Password"
                      style="z-index: 0"
                      type="password"
                      name="password"

                  >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>



                </a-form-item>
                <a-form-item>

                  <a-input
                      v-model="password"
                      placeholder="New Password repeat"
                      style="z-index: 0"
                      type="password"
                      name="password"

                  >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>



                </a-form-item>
                <a-form-item>





                </a-form-item>
                <a-form-item v-if="loading === false">






                  <a-button @click="login"
                            type="primary"
                            class="login-form-button"

                  >
                    Submit
                  </a-button>


                </a-form-item>
                <a-form-item v-else>


                  <div style="text-align: center;">
                    <a-spin/>
                  </div>


                </a-form-item>
              </a-form>

            </a-card>
          </a-col>
        </a-row>


      </div>


    </a-layout-content>

    <Footer/>
  </a-layout>
</template>

<script>
import Pageheader from '@/components/homepages/layout/Header'
import Footer from '@/components/homepages/layout/Footer'
export default {
name: "forgot",
  components: {

    Pageheader,
    Footer,

  },
  data() {
    return {
      email: '',
      password: '',
      emailnull: null,
      passwordnull: null,
      error: null,
      usertype: null,
      currentUserProfile: {},
      loading: false,
      form: this.$form.createForm(this),
    }
  },

  methods: {
    login() {


    },


  }
}
</script>
<style scoped>


#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.alert {
  padding: 8px;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
}

</style>
