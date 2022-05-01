<!--关于-->
<template>
  <nuxt-layout>
    <div class="page" :class="{mobile:IS_MOBILE}">
      <h1 class="page-title">{{ LOGO_TEXT }} 追剧日记 为追剧而生</h1>
      <p class="page-desc">剧集资讯、更新信息、播放时间表、追剧时间线、片单推荐</p>
      <div class="say-box animate__animated animate__fadeInLeft">
        <p class="name">站长说：</p>
        <br/>
        <p class="desc">我，是一个追剧狂热者，会时常追剧到忘了时间，由衷热爱科幻类型的，最爱《神秘博士》没有之一！</p>
        <p class="desc">生活中，我是一个热爱技术的前端工程师。</p>
        <br/>
        <p class="desc">一直想在业余，做点什么好玩的东西，动手做过很多网站，但都没有坚持下来。看到好看的网站，会收藏起来，看到好看的剧，也会记录下来。</p>
        <p class="desc">偶然的一天，戳进了<a href="https://www.tvmaze.com/api" target="_blank">TVmaze.com</a>这个网站，就好像发现了一个宝藏一样，基本上剧作信息一应俱全了，这不就是我想做的东西么。后来发现网站开源了API，更棒了🤔
          于是就有了这个网站。😁 </p>
        <br/>
        <p class="desc">因为也见证过很多视频网站的兴起，和衰落，也见证了"人人影视"的风波。所以，这个小站<b>永远不会做一个视频资源站</b>，承诺只做推荐，并且都是公开开放的推荐信息。</p>
        <br/>
        <p class="desc">我会一直维护下去，还有很多有意思的功能我还在思考中。</p>
        <p class="desc">如果你喜欢，也欢迎你和我、和这个小站一起成长。</p>
        <br/>
        <p class="time">2021-12-16</p>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import {useStore} from "../stores";

const {IS_MOBILE} = useStore();
const {LOGO_TEXT} = useDictionary();
changeHead('关于')
</script>

<style lang="scss" scoped>
.page {
  padding: 50px 0;

  .page-title {
    text-align: center;
    color: var(--color-font-title);
  }

  .page-desc {
    margin-top: 20px;
    text-align: center;
    color: var(--color-font-text);
  }

  .say-box {
    box-sizing: border-box;
    width: 80%;
    margin: 50px auto 0;
    padding: 50px;
    border-radius: 10px;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    color: var(--color-font-text);
    background: var(--color-background-card);

    .desc {
      text-indent: 16px;

      a {
        color: var(--color-primary);
      }
    }

    .time {
      text-align: right;
    }
  }

  &.mobile {
    padding: 0;

    .page-title {
      font-size: 20px;
    }

    .page-desc {
      margin-top: 10px;
      font-size: 14px;
    }

    .say-box {
      margin: 20px 0;
      width: 100%;
      padding: 25px;
      border-radius: 0;
      line-height: 28px;
    }
  }
}
</style>
