<template>
  <content-warp name="参演作品" v-if="list.length">
    <el-row :gutter="15">
      <template v-for="(character,index) of list">
        <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3" :key="character.castId">
          <people-item :class="`delay-${index}`" card jump="show" :jump-id="character.showId"
                       :cover="character.characterImageMedium" :desc="`饰演：${character.characterName}`"
                       :title="$store.getters.NAME_BY_LANG(character.showName,character.showNameZh)"/>
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
