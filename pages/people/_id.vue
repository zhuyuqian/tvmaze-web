<template>
  <content-warp :name="`${peopleInfo.peopleNameZh} ${peopleInfo.peopleName}`">
    <el-row :gutter="15">
      <el-col :span="3" class="stick-top">
        <div class="common-card">
          <image-plus :src="peopleInfo.peopleImageMedium"/>
        </div>
      </el-col>
      <el-col :span="21">
        <people-other-info :info="peopleInfo"/>
        <people-cast-list :list="castList"/>
        <people-crew-list :list="crewList"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  data() {
    return {
      peopleInfo: {},
      castList: [],
      crewList: []
    }
  },
  async asyncData({app, params}) {
    let [
      {data: {data: peopleInfo}},
      {data: {data: castList}},
      {data: {data: crewList}},
    ] = await Promise.all([
      app.$axios.get('/people/info', {params: {peopleId: params.id}}),
      app.$axios.get('/cast/list', {params: {peopleId: params.id}}),
      app.$axios.get('/crew/list', {params: {peopleId: params.id}}),
    ])
    return {
      peopleInfo,
      castList,
      crewList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
