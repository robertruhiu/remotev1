<template>
  <a-layout  style="min-height: 100vh;background-color: #F4F7FC;">


    <ClientSider/>

    <a-layout style="background-color: #F4F7FC">

      <a-layout-content
          :style="{  padding: '1% 2%', background: '#FAFBFF', minHeight: '280px', }"

      >
        <a-card class="hellocard">

          <a-row>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 12, offset: 0 }"
                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">
              <a-breadcrumb>
                <a-breadcrumb-item><a @click="$router.push('/Dashboard')" >Home</a></a-breadcrumb-item>
                <a-breadcrumb-item><a @click="$router.push('/Myprojects')" >My Projects</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >Contract stage</a></a-breadcrumb-item>
                <a-breadcrumb-item><a >{{ $route.params.projectSlug }}</a></a-breadcrumb-item>

              </a-breadcrumb>
              <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: black">
                Contract Negotiations</span>
            </a-col>

            <hide-at breakpoint="mediumAndBelow">
              <a-col :xs="{span: 12, offset: 0 }" :sm="{span: 12, offset: 0 }"
                     :md="{span: 12, offset: 0 }"
                     :lg="{span: 8, offset: 0 }" :xl="{span: 6,offset: 0 }">
                <div style="text-align: center">
                  <img src="@/assets/images/contract.svg" style="width: 20%"/>
                </div>


              </a-col>
            </hide-at>
          </a-row>


        </a-card>
        <div>
          <a-row>

            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 16, offset: 0 }"
                   :lg="{span: 16, offset: 0 }" :xl="{span: 16,offset: 0 }">

              <div class="timelinecard">
                <p style="font-family: sofia_probold;font-size: 1.2rem">Here are the elements that you will discuss at the negotiations </p>
                <a-timeline>
                  <a-timeline-item>Project details </a-timeline-item>
                  <a-timeline-item>Project breakdown into features</a-timeline-item>
                  <a-timeline-item>Time allocation of features</a-timeline-item>
                  <a-timeline-item>Budget and Escrow disbursment</a-timeline-item>
                  <a-timeline-item>Technologies to be used</a-timeline-item>
                  <a-timeline-item>Codeln Role</a-timeline-item>

                </a-timeline>

              </div>



            </a-col>
            <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                   :md="{span: 6, offset: 0 }"
                   :lg="{span: 6, offset: 0 }" :xl="{span: 6,offset: 0 }">
              <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  :image-style="{
      height: '60px',
    }"
              >
                <span slot="description"> Contract Meeting  </span>
                <a-button type="primary" @click="$router.push({ name: 'Meeting', params: { projectSlug: $route.params.projectSlug} })" >
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
import { hideAt} from 'vue-breakpoints'



export default {
name: "Contract",
  data() {
    return {




    }

  },
  components: {
    ClientSider,hideAt




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
