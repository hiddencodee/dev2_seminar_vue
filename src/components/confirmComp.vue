<template>
  <div class="alert" v-if="confirm.state === true" @click="cancel()">
    <div class="alert" @click.stop="">
      <header>{{ confirm.title }}</header>
      <content>{{ confirm.question }}</content>
      <footer>
        <v-btn @click="done()">{{ confirm.okText }}</v-btn>
        <v-btn @click="cancel()">{{ confirm.cancelText }}</v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirm: this.$confirm.sConfrimData,
    };
  },
  methods: {
    done() {
      this.confirm.done();
      this.confirm.state = false;
    },
    cancel() {
      this.$confirm.cancel();
    },
  },
};
</script>
