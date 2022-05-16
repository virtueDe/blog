const { defaultTheme } = require('vuepress')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
module.exports = {
  base: '/blog/',
  lang: "zh-CN",
  title: 'blog',
  description: 'virtue的blog',
  theme: defaultTheme({
    sidebar,
    navbar,
    sidebarDepth: 2, // 侧边栏显示2级
  })
}