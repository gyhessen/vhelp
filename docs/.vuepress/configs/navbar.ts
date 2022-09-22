import type { NavbarConfig } from '@vuepress/theme-default'
//import { version } from '../meta.js'

export const navbarzh: NavbarConfig = [
  {text: '首页',link: '/'},
  {
      text: '新手入门',
      children: [
          {
              text: '开箱即用', children: [
                  { text: '打开快表', link: '/入门/开箱即用/打开快表.md' },
                  { text: '导入模版', link: '/入门/开箱即用/导入模板.md' }
              ]
          },
          {
              text: '牛刀小试', children: [
                  { text: '画表格', link: '/入门/牛刀小试/画表格.md' },
                  { text: '定义数据项', link: '/入门/牛刀小试/定义数据项.md' },
                  { text: '写公式', link: '/入门/牛刀小试/写公式.md' }
              ]
          },
          {
              text: '渐入佳境', children: [
                  { text: '统计报表', link: '/入门/将入佳境/统计报表.md' },
                  { text: '进行工作流转', link: '/入门/将入佳境/进行工作流转.md' },
                  { text: '在手机使用', link: '/入门/将入佳境/在手机使用.md' },
                  { text: '图表分析', link: '/入门/将入佳境/图表分析.md' }
              ]
          }
      ]
  },
  {
      text: '安装',
      children: [
          {
              text: '服务端安装', children: [
                  { text: '依赖环境', link: '/安装/服务端安装/依赖环境.md' },
                  { text: '主程序安装', link: '/安装/服务端安装/主程序安装.md' },
                  { text: '主程序升级', link: '/安装/服务端安装/主程序升级.md' },
                  { text: '移动端安装与升级', link: '/安装/服务端安装/移动端安装与升级.md' },
                  { text: '环境手动配置', link: '/安装/服务端安装/环境手动配置.md' }
              ]
          },
          {
              text: '客户机使用', children: [
                  { text: '浏览器使用', link: '/安装/客户机使用/浏览器使用.md' },
                  { text: '桌面快捷方式使用', link: '/安装/客户机使用/桌面快捷方式使用.md' }
              ]
          }
      ]
  },
  {
      text: '设计开发',
      children: [
          {
              text: '模板导入与数据导入', children: [
                  { text: '模板导入', link: '/设计/模板导入与数据导入/模板导入.md' },
                  { text: '模板分享导出', link:  '/设计/模板导入与数据导入/模板分享导出.md' },
                  { text: '数据导入', link: '/设计/模板导入与数据导入/数据导入.md' },
                  { text: '数据导出', link: '/设计/模板导入与数据导入/数据导出.md' }
              ]
          },
          {
              text: '表格型模板设计', children: [
                  { text: '新建模板', link: '/设计/表格型模板设计/新建模板.md' },
                  { text: '表格设计与导入', link: '/设计/表格型模板设计/表格设计与导入.md' },
                  { text: '定义数据项', link: '/设计/表格型模板设计/定义数据项.md' },
                  { text: '设置数据规范', link: '/设计/表格型模板设计/设置数据规范.md' },
                  { text: '写表间公式', link: '/设计/表格型模板设计/写表间公式.md' },
                  { text: '加载工作流', link: '/设计/表格型模板设计/加载工作流.md' }
              ]
          },
          {
              text: '表格模板使用', children: [
                  { text: '数据增删改查', link: '/设计/表格模板使用/数据增删改查.md' },
                  { text: '数据界面其他操作', link: '/设计/表格模板使用/数据界面其他操作.md' },
                  { text: '其他模板使用说明', link: '/设计/表格模板使用/其他模板使用说明.md' }
              ]
          },
          {
              text: '移动端模板生成', children: [
                  { text: '移动端开启与字段勾选', link: '/设计/移动端模板生成/移动端开启与字段勾选.md' },
                  { text: '自动生成模板', link: '/设计/移动端模板生成/自动生成模板.md' },
                  { text: '自定义脚本控制', link: '/设计/移动端模板生成/自定义脚本控制.md' }
              ]
          },
          {
              text: '多维分析模板设计', children: [
                  { text: '新建多维分析', link: '/设计/多维分析模板设计/新建多维分析.md' },
                  { text: '多维表间公式', link: '/设计/多维分析模板设计/多维表间公式.md' },
                  { text: '数据多维设置', link: '/设计/多维分析模板设计/数据多维设置.md' },
                  { text: '分析结果查询导出', link: '/设计/多维分析模板设计/分析结果查询导出.md' }
              ]
          },
          {
              text: '图表模板生成', children: [
                  { text: '新建图表模板', link: '/设计/图表模板生成/新建图表模板.md' },
                  { text: '图表设置', link: '/设计/图表模板生成/图表设置.md' },
                  { text: '其他图表展现', link: '/设计/图表模板生成/其他图表展现.md' }
              ]
          },
          {
              text: '视图模板生成', children: [
                  { text: '新建视图模板', link: '/设计/视图模板生成/新建视图模板.md' },
                  { text: '视图公式', link: '/设计/视图模板生成/视图公式.md' },
                  { text: '视图模板的使用', link: '/设计/视图模板生成/视图模板使用.md' }
              ]
          }
      ]
  },
  {
      text: '功能详解',
      children: [
          {
              text: '界面说明', children: [
                  { text: '系统首页', link: '/功能/界面说明/系统首页.md' },
                  { text: '报表界面', link: '/功能/界面说明/报表界面.md' },
                  { text: '模板设计界面', link: '/功能/界面说明/模板设计界面.md' }
              ]
          },
          {
              text: '表格型模板', children: [
                  { text: '定义数据项', link: '/功能/表格型模板/定义数据项.md' },
                  { text: '模板属性', link: '/功能/表格型模板/模板属性.md' },
                  { text: '管理数据表', link: '/功能/表格型模板/管理数据表.md' },
                  { text: '表间公式', link: '/功能/表格型模板/表间公式.md' },
                  { text: '工作流', link: '/功能/表格型模板/工作流.md' },
                  { text: '高级扩展', link: '/功能/表格型模板/高级扩展.md' },
                  { text: '命令树', link: '/功能/表格型模板/命令树.md' },
                  { text: 'VBA动态库', link: '/功能/表格型模板/VBA动态库.md' },
                  { text: '数据字典', link: '/功能/表格型模板/数据字典.md' },
                  { text: '数据加锁与解锁 ', link: '/功能/表格型模板/数据加锁与解锁.md' },
                  { text: '批量导入导出数据', link: '/功能/表格型模板/批量导入导出数据.md' }
              ]
          },
          {
              text: '移动端WebApp', children: [
                  { text: '配置工具', link: '/功能/移动端WebApp/配置工具.md' },
                  { text: '生成页面', link: '/功能/移动端WebApp/生成页面.md' },
                  { text: '更新设置', link: '/功能/移动端WebApp/更新设置.md' },
                  { text: '编辑脚本', link: '/功能/移动端WebApp/编辑脚本.md' },
                  { text: '自定义页面', link: '/功能/移动端WebApp/自定义页面.md' },
                  { text: '自定义首页', link: '/功能/移动端WebApp/自定义首页.md' },
                  { text: '自定义登录页面', link: '/功能/移动端WebApp/自定义登录页面.md' }
              ]
          },
          {
              text: '代理服务', children: [
                  { text: '代理服务安装与卸载', link: '/功能/代理服务/代理服务安装与卸载.md' },
                  { text: '连接配置', link: '/功能/代理服务/连接配置.md' },
                  { text: '外部数据源', link: '/功能/代理服务/外部数据源.md' },
                  { text: '邮件配置', link: '/功能/代理服务/邮件配置.md' },
                  { text: '接口配置', link: '/功能/代理服务/接口配置.md' },
                  { text: '短信设置', link: '/功能/代理服务/短信设置.md' },
                  { text: '自动任务', link: '/功能/代理服务/自动任务.md' },
                  { text: '清理附件图片', link: '/功能/代理服务/清理附件图片.md' }
              ]
          },
          {
              text: '图表模板', children: [
                  { text: '模板属性', link: '/功能/图表模板/模板属性.md' },
                  { text: '模板设计', link: '/功能/图表模板/模板设计.md' }
              ]
          },
          {
              text: '多维分析模板', children: [
                  { text: '模板属性', link: '/功能/多维分析模板/模板属性.md' },
                  { text: '表间公式', link: '/功能/多维分析模板/表间公式.md' }
              ]
          },
          {
              text: '视图模板', children: [
                  { text: '模板属性', link: '/功能/视图模板/模板属性.md' },
                  { text: '视图配置', link: '/功能/视图模板/视图配置.md' }
              ]
          },
          {
              text: '系统配置', children: [
                  { text: '系统设置', link: '/功能/系统配置/系统设置.md' },
                  { text: '部门管理', link: '/功能/系统配置/部门管理.md' },
                  { text: '用户管理', link: '/功能/系统配置/用户管理.md' },
                  { text: '用户组管理', link: '/功能/系统配置/用户组管理.md' },
                  { text: '模板分组', link: '/功能/系统配置/模板分组.md' },
                  { text: '自动编号', link: '/功能/系统配置/自动编号.md' },
                  { text: '数据备份', link: '/功能/系统配置/数据备份.md' },
                  { text: '系统日志', link: '/功能/系统配置/系统日志.md' },
                  { text: '数据类型', link: '/功能/系统配置/数据类型.md' },
                  { text: '在线用户', link: '/功能/系统配置/在线用户.md' }
              ]
          },
          {
              text: '变量函数', children: [
                  { text: '自动编号', link: '/功能/变量函数/自动编号.md' },
                  { text: '系统变量', link: '/功能/变量函数/系统变量.md' },
                  { text: '下拉变量', link: '/功能/变量函数/下拉变量.md' },
                  { text: '系统函数', link: '/功能/变量函数/系统函数.md' },
                  { text: '运算函数', link: '/功能/变量函数/运算函数.md' },
                  { text: '填充类型', link: '/功能/变量函数/填充类型.md' }                 
              ]
          }
      ]
  },
  {
      text: '方案实例',
      children: [
          {
              text: '解决方案', children: [
                  { text: '加工制造业', link: '/方案/解决方案/加工制造业.md' },
                  { text: '建筑行业', link: '/方案/解决方案/建筑行业.md' },
                  { text: '眼镜行业', link: '/方案/解决方案/眼镜行业.md' }
              ]
          },
          {
              text: '命令代码实例', children: [
                  { text: '命令树实例', link: '/方案/命令代码实例/命令树实例.md' },
                  { text: 'VBA实例', link: '/方案/命令代码实例/VBA实例.md' },
                  { text: 'WebApp脚本实例', link: '/方案/命令代码实例/WebApp脚本实例.md' }
              ]
          }
      ]
  },
  {
      text: '配套其他',
      ariaLabel: 'Language Menu',
      children: [
          {text: '快表软件开发论坛',link: 'http://bbs.kuaibiao.cn',target: '_blank',rel: ''},
          {text: '快表软件下载',link: 'http://www.kuaibiao.cn/down',target: '_blank',rel: ''},
          {text: 'Excel函数',link: 'https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0-%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb',target: '_blank',rel: ''},
          {text: 'VBA参考',link: 'https://docs.microsoft.com/zh-cn/office/vba/api/overview/excel',target: '_blank',rel: ''},
          {text: 'SQLServer函数',link: 'https://docs.microsoft.com/zh-cn/sql/t-sql/functions/functions?view=sql-server-ver16',target: '_blank',rel: ''},
          {text: 'jQuery',link: 'https://www.w3school.com.cn/jquery/index.asp',target: '_blank',rel: ''},
          {text: 'jQuery EasyUI',link: 'https://www.jeasyui.net/tutorial',target: '_blank',rel: ''},
          {text: 'Apache ECharts',link: 'https://echarts.apache.org/zh/index.html',target: '_blank',rel: ''}
      ]
  },
]