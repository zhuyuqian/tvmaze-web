<template>
  <nuxt-child :web-channel-info="webChannelInfo"/>
</template>

<script>

export default {
  data() {
    return {
      webChannelInfo: {}
    }
  },
  head() {
    return {
      title: `${this.webChannelInfo.webChannelName} - 全部节目 - ${this.$dic.logoText}`
    }
  },
  async asyncData({app, params}) {
    let [
      {data: {data: webChannelInfo}}
    ] = await Promise.all([
      app.$axios.get('/webChannel/info', {params: {webChannelId: params.webChannelId}})
    ])
    console.log(webChannelInfo)
    return {
      webChannelInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
