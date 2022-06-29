module.exports = {
  title: "geek",
  description: 'Enjoy what it brings you--knowledge',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/majorImages/geekicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-message',
        link: '/docs/'
      },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
        ]
      }
    ],
    "sidebar": {
      "/docs/": [
      "",
      "math-formula"
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
    ],
    logo: '/majorImages/geek.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'kylex',
    // 作者头像
    authorAvatar: '/majorImages/headsculpture.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-mathjax3'))
      
    }
  },
  plugins: [
    [
       'cursor-effects',
       {
          size: 3, // size of the particle, default: 2
          //shape: ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
       },
       'dynamic-title',
       {
          showIcon: '/favicon.ico',
          showText: '(/≧▽≦/)咦！又好了！',
          hideIcon: '/failure.ico',
          hideText: '(●—●)喔哟，崩溃啦！',
          recoverTime: 2000,
       },
       '@vuepress/medium-zoom',
        {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
       },
       
    ],
 ],
}  
