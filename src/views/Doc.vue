<template>
<div>
 <Topnav/>
  <div class="content">
    <aside v-if="memuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>Switch组件</li>
        <li>Button组件</li>
        <li>Dialog组件</li>
        <li>Tab组件</li>
      </ol>
    </aside>
    <main>主内容</main>
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
aside{
  background: lightblue;
  width: 150px;
  padding: 70px 16px 0 16px;

  > h2{
    margin-bottom: 4px;
  }
  > ol{
      >li{
        padding: 4px 0;
      }
  }
}
@media (max-width: 500px) {
  aside{
    top: 0;
    left: 0;
    position:fixed;
  }
}
</style>
