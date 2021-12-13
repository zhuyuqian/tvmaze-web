<template>
  <content-warp :name="$store.getters.NAME_BY_LANG(peopleInfo.peopleName,peopleInfo.peopleNameZh)">
    <people-other-info :info="peopleInfo"/>
    <people-cast-list :list="castList"/>
    <people-crew-list :list="crewList"/>
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
