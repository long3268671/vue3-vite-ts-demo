module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "airbnb-typescript/base", // 添加 typescript 支持
    "plugin:vue/vue3-recommended", // 添加该行内容，针对 vue3 的规则。如果是 vue2，则是 plugin:vue/recommended
    'plugin:prettier/recommended' // 添加解决冲突插件
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    "vue/no-multiple-template-root": "off", // 启用根层级多个标签
    "vue/script-setup-uses-vars": "error", // 标记 setup 中的变量为 used
    // 解决 prettier 行尾报错
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
