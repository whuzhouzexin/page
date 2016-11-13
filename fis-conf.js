fis.set("namespace","page");
fis.hook("commonjs");
//变异scss
fis.match("*.scss", {
	parser:fis.plugin("node-sass"),
	rExt: "css"
});
//MD5加密
fis.match("*.{css,js,png}", {
  useHash: true
});
//压缩js
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});
//模块化static下面的js目录下面的js,lib下面的不进行模块化
fis.match('/static/js/*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  isMod: true
});
fis.match('/widget/**/*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  isMod: true
});
//压缩css
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});
//压缩png
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
//压缩html,tpl
fis.match('*.{html,tpl}', {
  optimizer: fis.plugin('html-minifier')
});
//模块化js和页面js, css打包
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true,
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});
fis.media("dev").match("*", {
  useHash: false,
  optimizer: null
})
fis.media("server").match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://host/receiver',
    //远端目录
    to: '/usr/local/tomcat/webapps'
  })
})