<template>
<div>
  <div class="container">
    <h1 class="heading">Room example</h1>
    <p class="note">
      Change Room mode (before join in a room):
      <a href="#">mesh</a> / <a href="#sfu">sfu</a>
    </p>
    <div class="room">
      <div>
        <video id="js-local-stream"></video>
        <span id="js-room-mode"></span>:
        <input type="text" placeholder="Room Name" id="js-room-id">
        <button id="js-join-trigger">Join</button>
        <button id="js-leave-trigger">Leave</button>
      </div>

      <div class="remote-streams" id="js-remote-streams"></div>

      <div>
        <pre class="messages" id="js-messages"></pre>
        <input type="text" id="js-local-text">
        <button id="js-send-trigger">Send</button>
      </div>
    </div>
    <p class="meta" id="js-meta"></p>
  </div>
</div>
</template>

<script>
export default {
name: "Videocall"
}
</script>

<style scoped>

</style>
