<template>
  <div class="show-index-page">
    <!--简介-->
    <show-main-info :info="showInfo" :image-list="imageList"/>
    <!--其他信息-->
    <show-other-info :info="showInfo"/>
    <!--主体-->
    <el-row :gutter="15">
      <el-col :xs="15" :sm="15" :md="17" :lg="18" :xl="19">
        <!--剧季列表-->
        <content-warp v-if="seasonList.length"
                      :name="$t('Season')" :more-link="seasonList.length>3?`/show/${showInfo.showId}/season`:''">
          <el-row>
            <template v-for="(season,index) of seasonList">
              <el-col v-if="index<3" v-bind="seasonColSpan" :key="season.seasonId">
                <season-item :info="season" :delay="index"/>
              </el-col>
            </template>
          </el-row>
        </content-warp>
        <!--演员列表-->
        <content-warp v-if="castList.length"
                      :name="$t('Cast')" :more-link="castList.length>6?`/show/${showInfo.showId}/cast`:''">
          <el-row>
            <template v-for="(cast,index) of castList">
              <el-col v-if="index<6" :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :key="cast.castId">
                <people-item jump="people" :jump-id="cast.peopleId" :delay="index"
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
              <el-col v-if="index<6" :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :key="crew.crewId">
                <people-item jump="people" :jump-id="crew.peopleId" :delay="index"
                             :cover="crew.peopleImageMedium" :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`"
                             :title="$store.getters.NAME_BY_LANG(crew.peopleName,crew.peopleNameZh)"/>
              </el-col>
            </template>
          </el-row>
        </content-warp>
        <!--图集列表-->
        <show-image-list :list="imageList"/>
      </el-col>
      <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="5" class="stick-top">
        <content-warp name="相关片单" size="small" v-if="albumList.length">
          <album-item v-for="album of albumList" :key="album.albumId" :info="album" :card="false"/>
        </content-warp>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    showInfo: {type: Object, required: true}
  },
  data() {
    return {
      castList: [], // 卡司列表
      crewList: [], // 主创列表
      seasonList: [], // 剧季列表
      imageList: [], // 图片列表
      albumList: [] // 相关片单
    }
  },
  computed: {
    seasonColSpan() {
      if (this.seasonList.length === 1) {
        return {span: 24}
      }
      if (this.seasonList.length === 2) {
        return {xs: 24, sm: 24, md: 12, lg: 12, xl: 12}
      }
      return {xs: 24, sm: 24, md: 12, lg: 8, xl: 8}
    }
  },
  async asyncData({app, params}) {
    let {showId} = params;
    let [
      {data: {data: castList}},
      {data: {data: crewList}},
      {data: {data: seasonList}},
      {data: {data: imageList}},
      {data: {data: {data: albumList}}}
    ] = await Promise.all([
      app.$axios.get('/cast/list', {params: {showId}}),
      app.$axios.get('/crew/list', {params: {showId}}),
      app.$axios.get('/season/list', {params: {showId}}),
      app.$axios.get('/image/list', {params: {showId}}),
      app.$axios.get('/album/list', {params: {showId}})
    ])
    return {
      castList,
      crewList,
      seasonList,
      imageList,
      albumList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
