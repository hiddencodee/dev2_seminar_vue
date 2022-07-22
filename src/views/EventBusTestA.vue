<template>
  <div>
    <EventBusTestB />
    <button @click="handleGlobalClickButton">
      카운트 증가하는 버튼!
    </button>
  </div>
</template>

<style scoped>
</style>



<script>
import {EventBus} from '../lib/event-bus';
import EventBusTestB from '../views/EventBusTestB.vue';
export default {
  data(){
    return{
      clickedCount : 0
    }
  },
  methods: {
    handleGlobalClickButton(){

      console.log("클릭 : " + this.clickedCount);
      this.clickedCount++;
      EventBus.$emit("eventbus", this.clickedCount);
    }
  },
  components:{
    EventBusTestB
  },
};

</script>
