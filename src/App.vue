<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth;//获取设备宽度
    const menuVisable= ref( width<=500? false:true)
    provide('xxx',menuVisable) //设值值
    router.afterEach(()=>{ //每次切换关闭
      if(width<=500){
        menuVisable.value=false;
      }
    })
  }
}
</script>
