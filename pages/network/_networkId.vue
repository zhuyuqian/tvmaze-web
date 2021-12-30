<template>
  <nuxt-child :network-info="networkInfo"/>
</template>

<script>

export default {
  head() {
    return {
      title: `${this.networkInfo.networkName} - 全部节目 - ${this.$dic.logoText}`
    }
  },
  data() {
    return {
      networkInfo: {}
    }
  },
  async asyncData({app, params}) {
    let [
      {data: {data: networkInfo}}
    ] = await Promise.all([
      app.$axios.get('/network/info', {params: {networkId: params.networkId}})
    ])
    return {
      networkInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
