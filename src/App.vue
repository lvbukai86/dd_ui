<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup(){
    const menuVisable= ref(false)
    provide('xxx',menuVisable) //设值值
  }
}
</script>
