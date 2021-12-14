<template>
  <content-warp :name="$t('Cast')" :desc="castList.length">
    <el-row :gutter="15">
      <el-col v-for="(cast,index) of castList" :xs="8" :sm="6" :md="6" :lg="4" :xl="3" :key="cast.castId">
        <people-item :class="`delay-${index}`" jump="people" :jump-id="cast.peopleId" card
                     :title="cast.characterName" :cover="cast.characterImageMedium||cast.peopleImageMedium"
                     :desc="$store.getters.NAME_BY_LANG(cast.peopleName,cast.peopleNameZh)"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      castList: []
    }
  },
  async asyncData({app, params}) {
    let {showId} = params;
    let [
      {data: {data: castList}},
    ] = await Promise.all([
      app.$axios.get('/cast/list', {params: {showId}})
    ])
    return {
      castList,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
