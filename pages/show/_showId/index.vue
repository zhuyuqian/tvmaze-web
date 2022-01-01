<template>
  <div class="show-index-page">
    <!--简介-->
    <show-main-info :info="showInfo" :image-list="imageList"/>
    <!--其他信息-->
    <show-other-info :info="showInfo"/>
    <!--移动-->
    <template v-if="$store.getters.IS_MOBILE">
      <!--剧季列表-->
      <content-warp v-if="seasonList.length" :name="$t('Season')"
                    :more-link="seasonList.length>3?`/show/${showInfo.showId}/season`:''">
        <season-item v-for="(season,index) of seasonList"
                     :key="season.seasonId" v-if="index<3" :info="season" :delay="index"/>
      </content-warp>
      <!--演员列表-->
      <content-warp v-if="castList.length" :name="$t('Cast')"
                    :more-link="castList.length>3?`/show/${showInfo.showId}/cast`:''">
        <people-item v-for="(cast,index) of castList" :key="cast.castId" v-if="index<3"
                     jump="people" :jump-id="cast.peopleId" :delay="index" :title="cast.characterName"
                     :desc="cast.peopleName" :cover="cast.characterImageMedium||cast.peopleImageMedium"/>
      </content-warp>
      <!--主创列表-->
      <content-warp v-if="crewList.length" :name="$t('Crew')"
                    :more-link="crewList.length>3?`/show/${showInfo.showId}/crew`:''">
        <people-item v-for="(crew,index) of crewList" v-if="index<3" :key="crew.crewId"
                     jump="people" :jump-id="crew.peopleId" :delay="index" :title="crew.peopleName"
                     :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`" :cover="crew.peopleImageMedium"/>
      </content-warp>
      <!--相关片单-->
      <content-warp name="相关片单" size="small" v-if="albumList.length">
        <album-item v-for="album of albumList" :key="album.albumId" :info="album" :card="false"/>
      </content-warp>
      <!--图集列表-->
      <show-image-list :list="imageList"/>
      <common-focus/>
    </template>
    <!--PC主体-->
    <el-row v-else :gutter="15">
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
                <people-item jump="people" :jump-id="cast.peopleId" :delay="index" :title="cast.characterName"
                             :desc="cast.peopleName" :cover="cast.characterImageMedium||cast.peopleImageMedium"/>
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
                <people-item jump="people" :jump-id="crew.peopleId" :delay="index" :title="crew.peopleName"
                             :desc="`负责：${ $t(`people.crew.${crew.crewType}`) }`" :cover="crew.peopleImageMedium"/>
              </el-col>
            </template>
          </el-row>
        </content-warp>
        <!--图集列表-->
        <show-image-list :list="imageList"/>
      </el-col>
      <el-col :xs="9" :sm="9" :md="7" :lg="6" :xl="5" class="stick-top">
        <content-warp name="相关动态" size="small" :more-link="`/show/${showInfo.showId}/new`" v-if="relatedNewList.length">
          <new-item v-for="item of relatedNewList" :key="item.newId" :info="item" :cover="false"/>
        </content-warp>
        <content-warp name="相关片单" size="small" v-if="albumList.length">
          <album-item v-for="album of albumList" :key="album.albumId" :info="album" :card="false"/>
        </content-warp>
        <common-focus/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    showInfo: {type: Object, required: true}
  },
  head() {
    return {
      title: `${this.showInfo.showName} - 基本信息 -  ${this.$dic.logoText}`
    }
  },
  data() {
    return {
      castList: [], // 卡司列表
      crewList: [], // 主创列表
      seasonList: [], // 剧季列表
      imageList: [], // 图片列表
      albumList: [], // 相关片单
      relatedNewList: [] // 相关动态
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
      {data: {data: {data: albumList}}},
      {data: {data: relatedNewList}}
    ] = await Promise.all([
      app.$axios.get('/cast/list', {params: {showId}}),
      app.$axios.get('/crew/list', {params: {showId}}),
      app.$axios.get('/season/list', {params: {showId}}),
      app.$axios.get('/image/list', {params: {showId}}),
      app.$axios.get('/album/list', {params: {showId}}),
      app.$axios.get('/new/related', {params: {showId}})
    ])
    return {
      castList,
      crewList,
      seasonList,
      imageList,
      albumList,
      relatedNewList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
