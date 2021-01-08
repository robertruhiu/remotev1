<template>
  <a-layout>

    <Pageheader/>
    <a-layout-content :style="{ padding: '0 0px', marginTop: '4rem' }">

      <div :style="{ background: '#fff', minHeight: '81vh' }">
        <a-row style="padding: 3%">
          <a-col :xs="{span: 18, offset: 0 }" :sm="{span: 12, offset: 6 }" :md="{span: 12, offset: 6 }"
                 :lg="{span: 12, offset: 8 }" :xl="{span: 12, offset: 9 }">
            <a-card title="Login" :style="{width:'21rem'}">


              <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit.prevent="login"

              >
                <a-form-item>

                  <a-input
                      v-model="email"
                      placeholder="Email"
                      style="z-index: 0"
                      name="email"

                  >
                    <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0,0,0,.25)"
                    />
                  </a-input>


                </a-form-item>
                <a-form-item>

                  <a-input
                      v-model="password"
                      placeholder="Password"
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
                <a-form-item v-if="loading === false">


                  <a
                      class="login-form-forgot"

                  >


                  </a>


                  <a-button @click="login"
                            type="primary"
                            class="login-form-button"

                  >
                    Log in
                  </a-button>


                  Or
                  <a @click="register">
                    register now!
                  </a>
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
        <a-modal v-model="visible" title="User unverified" :footer="null" >
          <a-result title="Unfortunately your profile has not been cleared for Remote Codeln">

          </a-result>
        </a-modal>


      </div>


    </a-layout-content>

    <Footer/>
  </a-layout>
</template>

<script>
import Pageheader from '@/components/homepages/layout/Header'
import Footer from '@/components/homepages/layout/Footer'
import AuthService from '@/services/AuthService'
import User from '@/services/UsersService'

export default {
  name: "login",
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
      visible:false
    }
  },

  methods: {
    login() {

      this.$validator.validateAll().then((values) => {
        if (values) {
          this.loading = true
          AuthService.login({
            email: this.email,
            password: this.password

          })
              .then(resp => {
                this.$store.dispatch('setToken', resp.data.token)
                this.$store.dispatch('setUser', resp.data.user)
                const auth = {
                  headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                User.currentuser(this.$store.state.user.pk, auth)
                    .then(response => {

                      this.$store.dispatch('setUser_object', response.data)


                      if (response.data.stage === 'complete') {
                        if (this.$store.state.user_object.user.is_staff) {
                          this.$router.push({
                            name: 'Admindashboard'
                          })

                        }
                        else {
                          if (this.$store.state.user_object.user_type === 'developer') {
                            if(this.$store.state.user_object.remote_verified){
                              this.$router.push({
                                name: 'Developer'
                              })
                            }else {
                              this.visible = true
                              this.$store.dispatch('setToken', null);
                              this.$store.dispatch('setUser', null)
                              this.$store.dispatch('setisLoggedIn', false)
                              this.$store.dispatch('setUser_object', null)
                              this.$store.dispatch('setProjectedit', null)
                              this.loading = false
                            }



                          } else {
                            this.$router.push(this.$route.query.redirect || 'Dashboard')



                          }
                        }

                      } else {
                        this.$router.push({
                          name: 'Register'
                        })

                      }

                    })
                    .catch(error => {
                      this.loading = false

                      return error


                    });


              })
              .catch(error => {
                this.loading = false
                console.log(error)
                this.error = 'login details incorrect'
                return error

              });


        } else {
          this.loading = false
        }
      })
    },
    register(){
      if(this.$route.query.redirect){
        this.$router.push({ name: 'Register', query: { redirect: this.$route.query.redirect } });

      }else {
        this.$router.push({
          name: 'Register'
        })
      }

    }


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
