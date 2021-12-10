<template>
  <content-warp :name="$t('Cast')">
    <el-switch slot="rt" v-model="showAll" v-if="list.length>minCount" :active-text="$t('Show All')"/>
    <el-row :gutter="15">
      <template v-for="(cast,index) of list">
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="3" :key="cast.castId" v-if="showAll || index<minCount">
          <show-cast-item :info="cast" class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
        </el-col>
      </template>
      <data-empty v-if="!list.length"/>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  props: {
    list: {type: Array, default: () => []}
  },
  data() {
    return {
      minCount: 8,
      showAll: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
