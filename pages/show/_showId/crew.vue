<template>
  <content-warp :name="$t('Crew')" :desc="crewList.length">
    <el-row :gutter="15">
      <el-col v-for="(crew,index) of crewList" :xs="12" :sm="6" :md="6" :lg="4" :xl="3" :key="crew.crewId">
        <people-item jump="people" card :jump-id="crew.peopleId" :delay="index"
                     :cover="crew.peopleImageMedium" :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"
                     :title="$store.getters.NAME_BY_LANG(crew.peopleName,crew.peopleNameZh)"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      crewList: []
    }
  },
  async asyncData({app, params}) {
    let {showId} = params;
    let [
      {data: {data: crewList}},
    ] = await Promise.all([
      app.$axios.get('/crew/list', {params: {showId}})
    ])
    return {
      crewList,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
