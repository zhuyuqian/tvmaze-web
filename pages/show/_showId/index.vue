<template>
  <div class="show-index-page">
    <!--简介-->
    <show-main-info :info="showInfo" :image-list="imageList"/>
    <!--其他信息-->
    <show-other-info :info="showInfo"/>
    <!--剧季列表-->
    <content-warp v-if="seasonList.length"
                  :name="$t('Season')" :more-link="seasonList.length>4?`/show/${showInfo.showId}/season`:''">
      <el-row>
        <template v-for="(season,index) of seasonList">
          <el-col v-if="index<4" :xs="12" :sm="12" :md="12" :lg="6" :xl="6" :key="season.seasonId">
            <season-item class="list" :class="`delay-${index}`" :info="season"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
    <!--演员列表-->
    <content-warp v-if="castList.length"
                  :name="$t('Cast')" :more-link="castList.length>6?`/show/${showInfo.showId}/cast`:''">
      <el-row>
        <template v-for="(cast,index) of castList">
          <el-col v-if="index<6" :xs="12" :sm="12" :md="8" :lg="8" :xl="8" :key="cast.castId">
            <people-item :class="`delay-${index}`" jump="people" :jump-id="cast.peopleId"
                         :title="cast.characterName" :cover="cast.characterImageMedium||cast.peopleImageMedium"
                         :desc="$store.getters.NAME_BY_LANG(cast.peopleName,cast.peopleNameZh)"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
    <!--主创列表-->
    <content-warp v-if="crewList.length"
                  :name="$t('Crew')" :more-link="crewList.length>6?`/show/${showInfo.showId}/crew`:''">
      <el-row>
        <template v-for="(crew,index) of crewList">
          <el-col v-if="index<6" :xs="12" :sm="12" :md="8" :lg="8" :xl="8" :key="crew.crewId">
            <people-item :class="`delay-${index}`" jump="people" :jump-id="crew.peopleId"
                         :cover="crew.peopleImageMedium" :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"
                         :title="$store.getters.NAME_BY_LANG(crew.peopleName,crew.peopleNameZh)"/>
          </el-col>
        </template>
      </el-row>
    </content-warp>
    <!--图集列表-->
    <show-image-list :list="imageList"/>
  </div>
</template>

<script>
export default {
  props: {
    showInfo: {type: Object, required: true}
  },
  data() {
    return {
      castList: [],
      crewList: [],
      seasonList: [],
      imageList: []
    }
  },
  async asyncData({app, params}) {
    let {showId} = params;
    let [
      {data: {data: castList}},
      {data: {data: crewList}},
      {data: {data: seasonList}},
      {data: {data: imageList}},
    ] = await Promise.all([
      app.$axios.get('/cast/list', {params: {showId}}),
      app.$axios.get('/crew/list', {params: {showId}}),
      app.$axios.get('/season/list', {params: {showId}}),
      app.$axios.get('/image/list', {params: {showId}})
    ])
    return {
      castList,
      crewList,
      seasonList,
      imageList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
