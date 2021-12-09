<template>
  <content-warp :name="$t('Crew')">
    <el-switch slot="rt" v-model="showAll" v-if="list.length>minCount" :active-text="$t('Show All')"/>
    <el-row :gutter="15">
      <template v-for="(crew,index) of list">
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="3" :key="crew.castId" v-if="showAll || index<minCount">
          <show-crew-item :info="crew"
                          class="animate__animated animate__fadeInDown" :class="`delay-${index}`"/>
        </el-col>
      </template>
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
