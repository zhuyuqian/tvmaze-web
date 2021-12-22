<template>
  <content-warp :name="peopleInfo.peopleName">
    <people-other-info :info="peopleInfo"/>
    <content-warp name="参演作品" v-if="castList.length">
      <!--移动-->
      <template v-if="$store.getters.IS_MOBILE">
        <people-item v-for="(character,index) of castList" :key="character.castId"
                     :card="false" jump="show" :jump-id="character.showId" :delay="index"
                     :cover="character.characterImageMedium" :desc="`饰演：${character.characterName}`"
                     :title="character.showName"/>
      </template>
      <!--PC-->
      <el-row v-else :gutter="15">
        <template v-for="(character,index) of castList">
          <el-col :xs="12" :sm="6" :md="6" :lg="4" :xl="3" :key="character.castId">
            <people-item card jump="show" :jump-id="character.showId" :delay="index"
                         :cover="character.characterImageMedium" :desc="`饰演：${character.characterName}`"
                         :title="character.showName"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
    <content-warp name="参与作品" v-if="crewList.length">
      <template v-if="$store.getters.IS_MOBILE">
        <people-item v-for="(crew,index) of crewList" :key="crew.crewId"
                     :card="false" jump="show" :jump-id="crew.showId" :delay="index" :cover="crew.showImageMedium"
                     :title="crew.showName"
                     :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"/>
      </template>
      <!--PC-->
      <el-row v-else :gutter="15">
        <template v-for="(crew,index) of crewList">
          <el-col :xs="12" :sm="6" :md="6" :lg="4" :xl="3" :key="crew.crewId">
            <people-item card jump="show" :jump-id="crew.showId" :delay="index" :cover="crew.showImageMedium"
                         :title="crew.showName" :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"/>
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
      title: `${this.peopleInfo.peopleName} - ${this.$dic.logoText}`
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
