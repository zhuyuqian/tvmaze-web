<template>
  <content-warp :name="$t('Cast')" :desc="castList.length">
    <el-row :gutter="15">
      <el-col v-for="(cast,index) of castList" :xs="12" :sm="6" :md="6" :lg="4" :xl="3" :key="cast.castId">
        <people-item card jump="people" :jump-id="cast.peopleId" :delay="index"
                     :title="cast.characterName" :cover="cast.characterImageMedium||cast.peopleImageMedium"
                     :desc="cast.peopleName"/>
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
