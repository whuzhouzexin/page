# page
### the page is used for a page to build and the thing for you is to write scss by the size of ps size<br/>
### 移动端快速开发单页面解决方案，在开发活动的等需要快速构建一个页面的时候，你只是需要把该仓库clone下来，你就可以开始正常编写css,js。
### 该解决方案有一下几点有点：<br/>
1. 一、使用rem适配移动端所有设备，fixd手机淘宝rem在某些手机上的不适配方案，在此js的基础上加多了一层js尺寸检验过滤。<br/>
2. 二、模块化js,在你编写js完毕发布的时候，你可以一键release， fis3会自动帮你以mod.js的模块化方案去模块化js<br/>
3. 三、在js内部可以做到按需加载，在页面展示的时候可以节省了下载的流量，可以提高页面在2g网络环境下的体验。按需加载使用的是
4. ``` require.async([moduleName], function(module){
  here is for the async code
});<br/> ```
5. 四、todo,对支持localStorag可以再次优化初始化的代码，对lib的初始化的js做模块化在本地，这样再第二次进入这个e页面的时候在2g环境下面的整个页面的大小应该只有20k左右，可以在2g环境下秒开网页，提高用户的体验<br/>
