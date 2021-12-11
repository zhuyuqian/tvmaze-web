<template>
  <content-warp name="参演作品" v-if="list.length">
    <el-row :gutter="15">
      <template v-for="(character,index) of list">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="4" :key="character.castId">
          <people-item class="animate__animated animate__fadeInUp" :class="`delay-${index}`"
                       jump="show" :jump-id="character.showId"
                       :cover="character.characterImageMedium"
                       :title="`${character.showNameZh} ${ character.showName }`"
                       :desc="`饰演：${character.characterName}`"/>
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
