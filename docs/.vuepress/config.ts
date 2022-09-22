import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { head,navbarzh, sidebar } from "./configs/index.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "软件帮助文档",
  description:
    "官方文档,帮助设计人员快速掌握快表软件的设计方法,通过功能讲解与实战案例轻松实现设计需求！",
  base: "/vhelp/",
  head,


  theme: defaultTheme({
    logo: "/hero.png",

    locales: {
      "/": {
        // navbar
        navbar: navbarzh,
        // sidebar
        sidebar: sidebar,
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: '返回首页',
      },
    },
    //sidebarDepth: 2,

  }),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      maxSuggestions: 50,
    }),
  ],
});
