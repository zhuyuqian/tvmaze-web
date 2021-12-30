<template>
  <nuxt-child :show-info="showInfo"/>
</template>

<script>
export default {
  props: {
    showInfo: {type: Object, required: true}
  },
}
</script>

<style lang="scss" scoped>
</style>
