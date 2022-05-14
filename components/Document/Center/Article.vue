<template>
    <div class="article h-auto w-full container border-box">
      <div class="">
        <div class="topic">开发&办公工具推荐</div>
        <div class="w-full h-96 mt-8 border-2 article1 text-4xl overflow-auto">
          <a href="">推荐一些常用的工具</a>，
          都是我平时开发、工作中用到的，觉得各方面还可以，推荐给大家，希望给大家带来一些帮助。
          开发相关
          <a href="">Java IDE</a>

          推荐 Eclipse 和 IntelliJ IDEA，IntelliJ IDEA 相比 Eclipse 更加友好一些，优先推荐 IntelliJ IDEA。
          MySQL 客户端

          付费客户端推荐 SQLyog，优点：功能简单，操作方便，系统资源占用少，缺点：不支持自动补全功能，目前只支持 Windows 系统。

          这个是老版本：
          办公相关
          网盘

          网盘推荐百度网盘和阿里云盘，学习资料等私密性不高的文件可以放在里面，方便管理，下载。
          Markdown 工具

          推荐 Typora，这个是本地使用的，不上传到服务端，工具轻量好用。
          云笔记

          我用过很多云笔记，包括最早使用的印象笔记，到后来使用的为知笔记、有道笔记，感觉都差点意思，尤其是在代码这块，都不是太友好。

          一直想找一款好点的云笔记工具，期间也用过石墨笔记、蚂蚁笔记这种小众款的，都不满意，最后无意间发现了阿里的语雀，一下子就爱上了，我个人认为语雀的各方面功能都是最好的，没有之一，而且阿里的产品也有保障，稳定性、性能这方面都可以。
          滴答清单

          推荐一款记录日常任务的工具滴答清单，试用了一段时间，操作友好。我用它来记录一些临时任务和一段时间的规划，便于有计划的处理一些事情。

        </div>
        <DocumentCenterArticleBottom></DocumentCenterArticleBottom>

      </div>
    </div>

</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped>
.topic{
  font-size: 36px;
  line-height: 1.389;
  font-weight: 700;
  color: #262626;
  display: inline;
  margin-bottom: 32px;
}
.article{
  min-width:530px;
}
.container{
  max-width:1000px;
  margin:0 auto;
}
</style>