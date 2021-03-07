//项目构建时的配置
import { defineConfig } from 'umi';
import path from 'path';
import routes from  './src/config/route'
//封装路径的公共函数
function pathHandler(url:string):string{
  return  path.join(__dirname,url)
} 

export default defineConfig({
      //配置路径别名

  alias:{
    '@':pathHandler('./src'),
    'Api':pathHandler('./src/api'),
    'Hooks':pathHandler('./src/hooks'),
    'Pages':pathHandler('./src/pages'),
    'Utils':pathHandler('./src/utils'),
    'Assets':pathHandler('./src/assets'),
    'Router':pathHandler('./src/router')
  },
  //配置反向代理
  proxy: {
    '/ajax': {
      'target': 'https://m.maoyan.com/',
      'changeOrigin': true,
    },
  },
  //配置umi插件布局功能layout
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '大雄VIP后台管理',
    layout: 'side',
    logo:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988450286,1893776126&fm=26&gp=0.jpg',
    locale: {
      default: 'zh-CN',
      antd: false,
      title: false,
      baseNavigator: true,
      baseSeparator: '-',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes,

  
}); 

