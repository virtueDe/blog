// "@vuepress/theme-blog": "^2.3.3",
const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
module.exports = {
  base: '/blog/',
  lang: "zh-CN",
  title: '前端笔记',
  description: 'virtue的前端笔记',
  head: [
    [
      'link', { rel: 'icon', href: '/images/favicon.ico' }
    ]
  ],
  theme: defaultTheme({
    logo: '/images/moon.png',
    sidebar,
    navbar,
    sidebarDepth: 2, // 侧边栏显示2级;
    repo: 'https://github.com/virtueDe/blog',
    repoLabel: 'github',
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
}