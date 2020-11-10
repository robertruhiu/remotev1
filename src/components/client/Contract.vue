<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;margin-left: 200px">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col span="12">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')" >Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Myprojects')" >My Projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >Contract stage</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >{{ $route.params.projectSlug }}</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Contract Negotiations</span>
            </a-col>
            <a-col span="6">
              <div style="text-align: center">
                <img src="@/assets/images/contract.svg" style="width: 20%"/>
              </div>


            </a-col>
          </a-row>


        </a-card>
        <div>
          <a-row>

            <a-col span="16">

              <div class="timelinecard">
                <p style="font-family: sofia_probold;font-size: 1.2rem">Here are the elements that you will discuss via the Video call meeting </p>
                <a-timeline>
                  <a-timeline-item>Project details and Parties involved</a-timeline-item>
                  <a-timeline-item>Features</a-timeline-item>
                  <a-timeline-item>Time allocation of features</a-timeline-item>
                  <a-timeline-item>Budget and Escrow disbursment</a-timeline-item>
                  <a-timeline-item>Technologies to be used</a-timeline-item>
                  <a-timeline-item>Codeln Role</a-timeline-item>

                </a-timeline>
                <div>
                  <p style="font-family: sofia_proregular;font-weight: bold">Helper features that we provide to ensure a success meeting discussions</p>
                  <a-row>
                    <a-col span="12">
                      <a-card  style="width: 90%">
                        <span slot="title" style="font-family: sofia_prosemibold;color: black">Contract form
                        <a-icon style="float: right" type="form" />
                        </span>


                        <p>Click on the icon shown above when meeting starts to open the contract form this will have a guided steps
                          to enable a succesful filling on the elements stated above</p>


                      </a-card>
                    </a-col>
<!--                    <a-col span="12">-->
<!--                      <a-card  style="width: 90%">-->
<!--                        <span slot="title" style=";font-family: sofia_prosemibold;color: black">Sketch pad-->
<!--                          <a-icon style="float: right" type="sketch" />-->
<!--                        </span>-->

<!--                        <p>Enables both parties to sketch thus bringing out more understanding of features.We highly recommend using this during the feature discussion-->
<!--                        look for the icon above</p>-->




<!--                      </a-card>-->
<!--                    </a-col>-->
                  </a-row>


                </div>
              </div>



            </a-col>
            <a-col span="6">
              <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  :image-style="{
      height: '60px',
    }"
              >
                <span slot="description"> Contract Meeting  </span>
                <a-button type="primary" @click="$router.push('/Meeting')">
                  Create meeting
                </a-button>
              </a-empty>
            </a-col>
          </a-row>
        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ClientSider from "@/components/client/layout/ClientSider";
import Vue from 'vue'

import Peer from 'skyway-js'


export default {
name: "Contract",
  data() {
    return {




    }

  },
  components: {
    ClientSider,




  },
  computed: {
    snackbar: {
      get() {
        return !!this.errorMessage
      },
      set() {},
    },
  },
  mounted() {
    this.peer = new Peer(this.name, {
      key: '2de21544-d969-411c-9e8d-7bb7056ca62c',
      debug: 3,
    })



    this.peer.on('open', () => {
      this.peerId = this.peer.id
    })

    this.peer.on('close', () => {
      this.close()
    })

    this.peer.on('error', () => {
      this.close()
    })

    this.peer.on('disconnected', () => {
      this.close()
    })

    this.peer.on('call', (call) => {
      this.dialog = true
      this.call = call
    })

    navigator.mediaDevices.enumerateDevices()
        .then((deviceInfos) => {
          deviceInfos.forEach((deviceInfo) => {
            if (deviceInfo.kind === 'audioinput') {
              this.audios.push({
                text: deviceInfo.label
                    || `Microphone ${this.audios.length + 1}`,
                value: deviceInfo.deviceId,
              })
            } else if (deviceInfo.kind === 'videoinput') {
              this.videos.push({
                text: deviceInfo.label
                    || `Camera  ${this.videos.length - 1}`,
                value: deviceInfo.deviceId,
              })
            }
          })
        })
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    onChange() {
      Vue.nextTick(() => {
        // See. https://github.com/vuejs/vue/issues/293#issuecomment-265716984
        if (this.selectedVideo === 'screenShare') {
          if (!this.screenShare.isScreenShareAvailable()) {
            this.errorMessage = 'Screen Share cannot be used. Please install the Chrome extension.'
            return
          }

          this.screenShare.start({
            width: this.width,
            height: this.height,
            frameRate: this.frameRate,
            mediaSource: this.mediaSource,
          }).then((screenStream) => {
            if (this.selectedAudio) {
              const constraints = {
                audio: { deviceId: { exact: this.selectedAudio } },
                video: false,
              }
              navigator.mediaDevices.getUserMedia(constraints).then((audioStream) => {
                const stream = new MediaStream()
                screenStream.getVideoTracks().forEach((track) => stream.addTrack(track.clone()))
                audioStream.getAudioTracks().forEach((track) => stream.addTrack(track.clone()))
                this.replaceStream(stream)
              }).catch((err) => {
                this.errorMessage = err
              })
            } else {
              this.replaceStream(screenStream)
            }
          }).catch((err) => {
            this.errorMessage = err
          })
        } else {
          const constraints = {
            audio: this.selectedAudio ? { deviceId: { exact: this.selectedAudio } } : false,
            video: this.selectedVideo ? { deviceId: { exact: this.selectedVideo } } : false,
          }
          navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            this.replaceStream(stream)
          }).catch((err) => {
            this.errorMessage = err
          })
        }
      })
    },
    callByName() {
      this.receive(this.peer.call(this.callId, this.localStream, {
        videoCodec: this.selectedCodec,
      }))
    },
    connect() {
      this.dialog = false
      this.call.answer(this.localStream, {
        videoCodec: this.selectedCodec,
      })
      this.receive(this.call)
      this.call = null
    },
    disconnect() {
      this.dialog = false
      this.call.close()
      this.call = null
    },
    receive(call) {
      this.close()
      call.on('stream', (stream) => {
        const el = document.getElementById('their-video')
        el.srcObject = stream
        el.play()
      })
      this.existingCall = call
    },
    close() {
      if (this.existingCall) {
        this.existingCall.close()
        this.existingCall = null
      }
    },
    closeSnackbar() {
      this.errorMessage = ''
    },
    replaceStream(stream) {
      document.getElementById('my-video').srcObject = stream
      this.localStream = stream

      if (this.existingCall) {
        this.existingCall.replaceStream(stream)
      }
    },
  },
}
</script>

<style scoped>
.hellocard {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;
  margin-bottom: 1rem;


}
.stepcard {
  padding: 2%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
.timelinecard {
  padding: 3%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: white;
  border-radius: 0;

}
</style>
