module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    // 'plugin:vue/vue3-essential',           // Lv1
    "plugin:vue/vue3-strongly-recommended", // Lv2
    // 'plugin:vue/vue3-recommended',         // Lv3
    // js
    // https://eslint.org/docs/rules/
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
