<template>
  <div>导航栏 | <router-link to="/"> 主页|</router-link>
    <router-link to="/xxx">副业</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
import Frank from './components/Frank.vue'

export default {
  name: 'App',

}
</script>
