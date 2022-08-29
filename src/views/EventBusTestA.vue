<template>
  <div>
    <button @click="handleGlobalClickButton">
      카운트 증가하는 버튼!
    </button>
  </div>
</template>

<style scoped>
</style>



<script>
import {EventBus} from '../lib/event-bus';
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
};

</script>
