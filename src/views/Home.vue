<template>
<div>
  <Topnav/>
  <div class="banner">
    <h1>达达UI</h1>
    <h2>一个厉害的UI框架</h2>
    <p class="actions">
      <a>GitHub</a>
      <a>开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  name: 'Home',
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
