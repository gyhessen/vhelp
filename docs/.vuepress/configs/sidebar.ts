import type { SidebarConfig } from '@vuepress/theme-default';

export const sidebar: SidebarConfig = {
  '/': [
    {
      text: '准备',
      collapsible: true,
      link: '/准备/',
      children: [
        '/准备/学前准备',
      ],
    },
    {
      text: '新手入门',
      collapsible: true,
      link: '/入门/',
      children: [
        {
          text: '开箱即用',
          link: '/入门/开箱即用/',
          children: ['/入门/开箱即用/打开快表', '/入门/开箱即用/导入模板'],
        },
        {
          text: '牛刀小试',
          link: '/入门/牛刀小试/',
          children: [
            '/入门/牛刀小试/画表格',
            '/入门/牛刀小试/定义数据项',
            '/入门/牛刀小试/写公式',
          ],
        },
        {
          text: '将入佳境',
          link: '/入门/将入佳境/',
          children: [
            '/入门/将入佳境/统计报表',
            '/入门/将入佳境/进行工作流转',
            '/入门/将入佳境/在手机使用',
            '/入门/将入佳境/图表分析',
          ],
        },
      ],
    },
    {
      text: '安装部署',
      collapsible: true,
      link: '/安装/',
      children: [
        {
          text: '服务端安装',
          link: '/安装/服务端安装/',
          children: [
            '/安装/服务端安装/依赖环境',
            '/安装/服务端安装/主程序安装',
            '/安装/服务端安装/主程序升级',
            '/安装/服务端安装/移动端安装与升级',
            '/安装/服务端安装/环境手动配置',
          ],
        },
        {
          text: '客户机使用',
          link: '/安装/客户机使用/',
          children: [
            '/安装/客户机使用/浏览器使用',
            '/安装/客户机使用/桌面快捷方式使用',
          ],
        },
      ],
    },
    {
      text: '设计开发',
      collapsible: true,
      link: '/设计/',
      children: [
        {
          text: '模板导入与数据导入',
          link: '/设计/模板导入与数据导入/',
          children: [
            '/设计/模板导入与数据导入/模板导入',
            '/设计/模板导入与数据导入/模板分享导出',
            '/设计/模板导入与数据导入/数据导入',
            '/设计/模板导入与数据导入/数据导出',
          ],
        },
        {
          text: '表格型模板设计',
          link: '/设计/表格型模板设计/',
          children: [
            '/设计/表格型模板设计/新建模板',
            '/设计/表格型模板设计/表格设计与导入',
            '/设计/表格型模板设计/定义数据项',
            '/设计/表格型模板设计/设置数据规范',
            '/设计/表格型模板设计/写表间公式',
            '/设计/表格型模板设计/加载工作流',
          ],
        },
        {
          text: '表格模板使用',
          link: '/设计/表格模板使用/',
          children: [
            '/设计/表格模板使用/数据增删改查',
            '/设计/表格模板使用/数据界面其他操作',
            '/设计/表格模板使用/其他模板使用说明',
          ],
        },
        {
          text: '移动模板生成',
          link: '/设计/移动模板生成/',
          children: [
            '/设计/移动端模板生成/移动端开启与字段勾选',
            '/设计/移动端模板生成/自动生成模板',
            '/设计/移动端模板生成/自定义脚本控制',
          ],
        },
        {
          text: '多维分析模板设计',
          link: '/设计/多维分析模板设计/',
          children: [
            '/设计/多维分析模板设计/新建多维分析',
            '/设计/多维分析模板设计/多维表间公式',
            '/设计/多维分析模板设计/数据多维设置',
            '/设计/多维分析模板设计/分析结果查询导出',
          ],
        },
        {
          text: '图表模板生成',
          link: '/设计/图表模板生成/',
          children: [
            '/设计/图表模板生成/新建图表模板',
            '/设计/图表模板生成/图表设置',
            '/设计/图表模板生成/其他图表展现',
          ],
        },
        {
          text: '视图模板生成',
          link: '/设计/视图模板生成/',
          children: [
            '/设计/视图模板生成/新建视图模板',
            '/设计/视图模板生成/视图公式',
            '/设计/视图模板生成/视图模板使用',
          ],
        },
      ],
    },
    {
      text: '功能详解',
      collapsible: true,
      link: '/功能/',
      children: [
        {
          text: '界面说明',
          link: '/功能/界面说明/',
          children: [
            '/功能/界面说明/系统首页',
            '/功能/界面说明/报表界面',
            '/功能/界面说明/模板设计界面',
          ],
        },
        {
          text: '表格型模板',
          link: '/功能/表格型模板/',
          children: [
            '/功能/表格型模板/定义数据项',
            '/功能/表格型模板/模板属性',
            '/功能/表格型模板/管理数据表',
            '/功能/表格型模板/表间公式',
            '/功能/表格型模板/工作流',
            '/功能/表格型模板/高级扩展',
            '/功能/表格型模板/命令树',
            '/功能/表格型模板/VBA动态库',
            '/功能/表格型模板/数据字典',
            '/功能/表格型模板/数据加锁与解锁',
            '/功能/表格型模板/批量导入导出数据',
          ],
        },
        {
          text: '移动端WebApp',
          link: '/功能/移动端WebApp/',
          children: [
            '/功能/移动端WebApp/配置工具',
            '/功能/移动端WebApp/生成页面',
            '/功能/移动端WebApp/更新设置',
            '/功能/移动端WebApp/编辑脚本',
            '/功能/移动端WebApp/自定义页面',
            '/功能/移动端WebApp/自定义首页',
            '/功能/移动端WebApp/自定义登录页面',
          ],
        },
        {
          text: '代理服务',
          link: '/功能/代理服务/',
          children: [
            '/功能/代理服务/代理服务安装与卸载',
            '/功能/代理服务/连接配置',
            '/功能/代理服务/外部数据源',
            '/功能/代理服务/邮件配置',
            '/功能/代理服务/接口配置',
            '/功能/代理服务/短信设置',
            '/功能/代理服务/自动任务',
            '/功能/代理服务/清理附件图片',
          ],
        },
        {
          text: '图表模板',
          link: '/功能/图表模板/',
          children: ['/功能/图表模板/模板属性', '/功能/图表模板/模板设计'],
        },
        {
          text: '多维分析模板',
          link: '/功能/多维分析模板/',
          children: [
            '/功能/多维分析模板/模板属性',
            '/功能/多维分析模板/表间公式',
          ],
        },
        {
          text: '视图模板',
          link: '/功能/视图模板/',
          children: ['/功能/视图模板/模板属性', '/功能/视图模板/视图配置'],
        },
        {
          text: '系统配置',
          link: '/功能/系统配置/',
          children: [
            '/功能/系统配置/系统设置',
            '/功能/系统配置/部门管理',
            '/功能/系统配置/用户管理',
            '/功能/系统配置/用户组管理',
            '/功能/系统配置/模板分组',
            '/功能/系统配置/自动编号',
            '/功能/系统配置/数据备份',
            '/功能/系统配置/系统日志',
            '/功能/系统配置/数据类型',
            '/功能/系统配置/在线用户',
          ],
        },
        {
          text: '变量函数',
          link: '/功能/变量函数/',
          children: [
            '/功能/变量函数/自动编号' ,
            '/功能/变量函数/系统变量' ,
            '/功能/变量函数/下拉变量' ,
            '/功能/变量函数/系统函数' ,
            '/功能/变量函数/运算函数' ,
            '/功能/变量函数/填充类型' ,   
          ],
        },
      ],
    },
    {
      text: '方案实例',
      collapsible: true,
      link: '/方案/',
      children: [
        {
          text: '解决方案',
          link: '/方案/解决方案/',
          children: [
            '/方案/解决方案/加工制造业',
            '/方案/解决方案/建筑行业',
            '/方案/解决方案/眼镜行业',
          ],
        },
        {
          text: '命令代码实例',
          link: '/方案/命令代码实例/',
          children: [
            '/方案/命令代码实例/命令树实例',
            '/方案/命令代码实例/VBA实例',
            '/方案/命令代码实例/WebApp脚本实例',
          ],
        },
      ],
    },
    {
      text: '配套其他',
      collapsible: true,
      link: '/配套/',
      children: [
        {text: '快表软件开发论坛',link: 'http://bbs.kuaibiao.cn',target: '_blank',rel: ''},
          {text: '快表软件下载',link: 'http://www.kuaibiao.cn/down',target: '_blank',rel: ''},
          {text: 'Excel函数',link: 'https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0-%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb',target: '_blank',rel: ''},
          {text: 'VBA参考',link: 'https://docs.microsoft.com/zh-cn/office/vba/api/overview/excel',target: '_blank',rel: ''},
          {text: 'SQLServer函数',link: 'https://docs.microsoft.com/zh-cn/sql/t-sql/functions/functions?view=sql-server-ver16',target: '_blank',rel: ''},
          {text: 'jQuery',link: 'https://www.w3school.com.cn/jquery/index.asp',target: '_blank',rel: ''},
          {text: 'jQuery EasyUI',link: 'https://www.jeasyui.net/tutorial',target: '_blank',rel: ''},
          {text: 'Apache ECharts',link: 'https://echarts.apache.org/zh/index.html',target: '_blank',rel: ''}
      ],
    },
    {
      text: '测试深度',
      collapsible: true,
      link: '',
      children: [
        {
          text: 'AAAAAAAAAA',
          link: '',
          children: [
            {
              text: 'AAAAAAAAAA1',
              link: '',
              children: [
                {
                  text: 'AAAAAAAAAA11',
                  link: '',
                  children: ['AAAAAAAAAA111', 'AAAAAAAAAA112'],
                },
                {
                  text: 'AAAAAAAAAA12',
                  link: '',
                  children: ['AAAAAAAAAA121', 'AAAAAAAAAA122'],
                },
                '/SExcel/MobanShuxing/JibenKongzhi/a',
              ],
            },
            {
              text: 'AAAAAAAAAA2',
              link: '',
              children: [
                {
                  text: 'AAAAAAAAAA21',
                  link: '',
                  children: ['AAAAAAAAAA211', 'AAAAAAAAAA212'],
                },
                {
                  text: 'AAAAAAAAAA22',
                  link: '',
                  children: ['AAAAAAAAAA221', 'AAAAAAAAAA222'],
                },
              ],
            },
          ],
        },
        {
          text: 'BBBBBBBBBBB',
          link: '',
          children: [
            {
              text: 'BBBBBBBBBBB1',
              link: '',
              children: [
                {
                  text: 'BBBBBBBBBBB11',
                  link: '',
                  children: ['BBBBBBBBBBB111', 'BBBBBBBBBBB112'],
                },
                {
                  text: 'BBBBBBBBBBB12',
                  link: '',
                  children: ['BBBBBBBBBBB121', 'BBBBBBBBBBB122'],
                },
              ],
            },
            {
              text: 'BBBBBBBBBBB2',
              link: '',
              children: [
                {
                  text: 'BBBBBBBBBBB21',
                  link: '',
                  children: ['BBBBBBBBBBB211', 'BBBBBBBBBBB212'],
                },
                {
                  text: 'BBBBBBBBBBB22',
                  link: '',
                  children: ['BBBBBBBBBBB221', 'AAAAAAAAAA222'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
