<template>

    <div>

      <a-menu  mode="inline" :default-selected-keys="['1']" style="font-family: sofia_proregular;background-color: #F4F7FC">
        <a-menu-item key="1">
          <a-icon type="appstore" />
          <span>Manage my Projects</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="form" />
          <span>Create a Project</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="bank" />
          <span>Escrow Management</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="calendar" />
          <span>My Meetings</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="flag" />
          <span>Conflict resolution</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="message" />
          <span>Chat</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="solution" />
          <span>Edit Profile</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="logout" />
          <span>logout</span>
        </a-menu-item>
      </a-menu>
    </div>



</template>

<script>
export default {
  name: "CLientSider",
  data() {
    return {
      collapsed: false,
    };
  },
}
</script>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>