<template>
  <div id="app">
    <div class="snsLoginKakao">
      <div id="aa">
        <img
          src="@/assets/kakaoSimbol.png"
          alt=""
          class="kakaoSimbol" />
        <p id="kakaoText">
        </p>
      </div>
    </div>
    <div class="snsLoginNaver">
      <img
        src="@/assets/naverSimbol.png"
        alt=""
        class="naverSimbol" />
      <p id="naverText">
      </p>
    </div>

    <input
      type="text"
      :value="title"
      @input="titleUpdate" />
    <button>전송!!</button>
  </div>
</template>

<style scoped>
  .snsLoginKakao{
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border-radius: 0.8em;
    background-color:#FEE500;
  }

  .snsLoginNaver{
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border-radius: 0.8em;
    background-color:#03C75A;
  }

  #aa{
    margin: 0 auto;
    float: left;
    width: 30px;
    height: 30px;
  }

  .naverSimbol{
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }

  #kakaoText{
    margin-left: 150px;
    margin-top: 13px;
  }

  #naverText{
    margin-left: 150px;
    margin-top: 13px;
  }


</style>



<script>

export default {
  name: 'App',
  props : {
    title : {
      type : String,
      required : true,
    }
  },

  methods : {
    titleUpdate(e) {
      this.$emit('titleFromChild', e.target.value)
    }
  }
};

</script>
