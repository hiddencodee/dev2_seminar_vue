import BaseConfirm from "@/components/confirmComp.vue";
const _initConfirmData = {
  title: "",
  text: "",
  okText: "Ok",
  persistent: false,
  confirmColor: "",
  cancelText: "Cancel",
  hideCancel: false,
  hideOk: false,
  done() {},
  cancel() {},
};
const confirm = {
  sConfirmData: { state: false },
  show(dialogData = {}) {
    this.sConfirmData.state = true;
    Object.assign(this.sConfirmData, {
      ..._initConfirmData,
      ...dialogData,
    });
  },
  cancel() {
    this.sConfirmData.state = false;
    this.sConfirmData.cancel();
    setTimeout(() => {
      Object.assign(this.sConfirmData, _initConfirmData);
    }, 500);
  },
};

export default {
  install(Vue, pluginName = "$confirm") {
    Vue.prototype[pluginName] = confirm;
    Vue.component("plugin-confirm", BaseConfirm);
  },
};
export { confirm };
