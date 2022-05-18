<template>
    <div class="article h-auto w-full container border-box">
      <div class="">
        <div class="topic text-black dark:text-white">开发&办公工具推荐</div>
        <div class="w-full h-96 mt-8 border-2 article1 text-4xl overflow-auto">
          <a href="">推荐一些常用的工具</a>，
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
  display: inline;
  margin-bottom: 32px;
}
.article{
  min-width:530px;
}
.container{
  margin:0 auto;
}
@media (min-width: 1024px){
  .container {
    max-width: 750px;
  }
}

</style>