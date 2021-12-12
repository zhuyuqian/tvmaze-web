<template>
  <content-warp name="参与作品" v-if="list.length">
    <el-row :gutter="15">
      <template v-for="(crew,index) of list">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3" :key="crew.crewId">
          <people-item class="animate__animated animate__fadeInUp" :class="`delay-${index}`"
                       jump="show" :jump-id="crew.showId"
                       :cover="crew.showImageMedium"
                       :title="`${crew.showNameZh} ${ crew.showName }`"
                       :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"/>
        </el-col>
      </template>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  props: {
    list: {type: Array, default: () => []}
  }
}
</script>

<style lang="scss" scoped>
</style>
