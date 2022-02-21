<template>
<div>
  <div class="layout">
    <Topnav toggleMenuButtionVisible class="nav" />
  <div class="content">
    <aside v-if="memuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">
          Switch组件
          </router-link>
        </li>
        <li>
          <router-link to="/doc/button">
            Button组件
          </router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">
            Dialog组件
          </router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">
            Tags组件
          </router-link>
        </li>
      </ol>
    </aside>
    <main><router-view/></main>
  </div>
</div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject,Ref} from 'vue';
export default {
  name: 'Doc',
  components: {Topnav},
  setup(){
    const memuVisible=inject<Ref<boolean>>('xxx') //获取值
    return  {memuVisible};
  }
};
</script>

<style lang="scss" scoped>
.router-link-active{
  text-decoration: none;
  border-bottom:5px solid green;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside{
  background: lightblue;
  width: 150px;
  padding: 70px 16px 1px 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

  > h2{
    margin-bottom: 4px;
    font-size:20px;
    font-weight: bolder;
  }
  > ol{
      >li{
        padding: 4px 0;
      }
  }
}
main {
  overflow: auto;
}
</style>
