<template>
  <dialog-plus :visible.sync="show" width="80%">
    <show-episode-list ref="episode"/>
  </dialog-plus>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    init(seasonId) {
      this.show = true;
      this.$nextTick(() => {
        this.$refs['episode'].init(seasonId)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
