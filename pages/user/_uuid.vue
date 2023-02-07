<template>
  <div class="user-page">
    <div class="base-info-warp">

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({app, params}) {
    let [
      {data: {data: userInfo}}
    ] = await Promise.all([
      app.$axios.get('/user/user', {params: {uuid: params.uuid}})
    ])
    return {
      userInfo
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/_handle.scss";

.user-page {
  padding: 20px 0 40px;

  .base-info-warp {
    padding: 20px;
    @include backgroundColor('color-card-background');
  }
}
</style>
