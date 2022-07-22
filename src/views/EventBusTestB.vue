<template>
  <div>
    <section>
      카운트 : {{ receivedClickCount }}
    </section>
  </div>
</template>

<style scoped>
</style>



<script>
import {EventBus} from '../lib/event-bus';
export default {
  data(){
    return{
      receivedClickCount : 0
    }
  },
  created(){
    EventBus.$on("eventbus",clickedCount => {
      this.receivedClickCount = clickedCount;
    })
  }
};

</script>
