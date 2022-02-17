<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth;//获取设备宽度
    const menuVisable= ref( width<=500? false:true)
    provide('xxx',menuVisable) //设值值
  }
}
</script>
