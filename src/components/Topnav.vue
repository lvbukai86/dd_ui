<template>
  <div class="topnav" >
    <div class="logo">
      <svg class="icon" >
        <use xlink:href="#icon-king"></use>
      </svg>

    </div>
    <ul class="menu" >
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
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
    background: red;
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
