<template>
  <div class="topnav" @click="toggleMenu">
    <div class="logo">LOGO</div>
    <ul class="menu" >
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue';

export default {
  name: 'Topnav',
  setup(){
   const memuVisible=inject<Ref<boolean>>('xxx') //获取值
   const toggleMenu=()=>{
     memuVisible.value= !memuVisible.value

   }

    return  {toggleMenu}
  }

}
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
