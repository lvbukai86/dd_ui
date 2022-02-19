<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
  <template v-slot:content>内容</template>
  <template v-slot:title>加粗的标题</template>
</Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref,h} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components:{Button, Dialog},

  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1 = () => {

      return false
    }
    const f2 = () => {

    }
    const showDialog = () => {
          openDialog({
            title: h('strong', {}, '标题2'),
            content: '你好2',
            ok() {
              console.log('ok')
            },
            cancel() {
              console.log('cancel')
            }
          })
        }
    return {x,toggle,f1,f2,showDialog}
  }
};
</script>

<style lang="scss" scoped>

</style>
