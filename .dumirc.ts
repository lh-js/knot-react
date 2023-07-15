import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lh-ui-react',
    logo: '/logo.png', // 读取public文件夹
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/Hello' },
    ],
    socialLinks: {
      github: 'https://github.com/lh2731164534/lh-ui-react'
    }
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'components', dir: './src/components' },
      // { type: 'guide', dir: './src/hooks' },
    ]
  },
});
