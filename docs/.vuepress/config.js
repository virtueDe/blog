const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
module.exports = {
  base: '/blog/',
  lang: "zh-CN",
  title: '前端笔记',
  description: 'virtue的前端笔记',
  theme: defaultTheme({
    sidebar,
    navbar,
    sidebarDepth: 2, // 侧边栏显示2级;
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
}