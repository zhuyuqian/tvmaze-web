<template>
  <content-warp :name="$store.getters.NAME_BY_LANG(peopleInfo.peopleName,peopleInfo.peopleNameZh)">
    <people-other-info :info="peopleInfo"/>
    <content-warp name="参演作品" v-if="castList.length">
      <el-row :gutter="15">
        <template v-for="(character,index) of castList">
          <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="3" :key="character.castId">
            <people-item card jump="show" :jump-id="character.showId" :delay="index"
                         :cover="character.characterImageMedium" :desc="`饰演：${character.characterName}`"
                         :title="$store.getters.NAME_BY_LANG(character.showName,character.showNameZh)"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
    <content-warp name="参与作品" v-if="crewList.length">
      <el-row :gutter="15">
        <template v-for="(crew,index) of crewList">
          <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="3" :key="crew.crewId">
            <people-item card jump="show" :jump-id="crew.showId" :delay="index" :cover="crew.showImageMedium"
                         :title="$store.getters.NAME_BY_LANG(crew.showName,crew.showNameZh)"
                         :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
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
  head() {
    return {
      title: `${this.$store.getters.NAME_BY_LANG(this.peopleInfo.peopleName, this.peopleInfo.peopleNameZh)} - ${this.$dic.logoText}`
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
