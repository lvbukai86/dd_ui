<template>
  <div class="topnav" >
    <div class="logo">
      <svg class="icon" >
        <use xlink:href="#icon-king"></use>
      </svg>

    </div>
    <ul class="menu" >
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg class="toggleAside" @click="toggleMenu" v-if=" toggleMenuButtionVisible">
      <use xlink:href="#icon-memu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue';

export default {
  props:{
    toggleMenuButtionVisible:{
      type:Boolean,
      default:false
    }
  },
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
$color:#007974;
.topnav {
  color:$color;
  display: flex;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }

  }
  >.toggleAside{

    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top:50%;
    transform:translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    >.menu{display: none};
    > .logo{margin: 0 auto}
     >.toggleAside{display: inline-block}

  }
}
</style>
