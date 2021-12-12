<template>
  <content-warp :name="$t('Season')" :desc="list.length">
    <show-season-shape v-model="shape" slot="rt" @change="shapeChange"/>
    <!--卡片展示-->
    <el-row :gutter="15" v-if="shape==='card'">
      <el-col v-for="(season,index) of list" :key="season.seasonId" :xs="6" :sm="6" :md="4" :lg="4" :xl="3">
        <show-season-item :shape="shape" :info="season" @open-episode="openEpisode"
                          class="animate__animated animate__fadeInUp" :class="`delay-${index}`"/>
      </el-col>
      <data-empty v-if="!list.length"/>
    </el-row>
    <!--弹窗-->
    <show-episode-list-dialog ref="episode-dialog"/>
    <!--列表展示-->
    <el-row :gutter="15" v-if="shape==='list'">
      <el-col :span="5" class="stick-top season-list">
        <show-season-item v-for="season of list" :key="season.seasonId" :is-active="currentSeasonId===season.seasonId"
                          :shape="shape" :info="season" @open-episode="openEpisode"/>
      </el-col>
      <el-col :span="19">
        <show-episode-list ref="episode"/>
      </el-col>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  props: {
    list: {
      type: Array, default: () => []
    }
  },
  data() {
    return {
      shape: 'card',
      currentSeasonId: null
    }
  },
  methods: {
    shapeChange(shape) {
      if (shape === 'card') return;
      this.$nextTick(() => {
        this.currentSeasonId ?
          this.$refs['episode'].init(this.currentSeasonId) :
          this.openEpisode(this.list[0]);
      })
    },
    openEpisode(season) {
      this.currentSeasonId = season.seasonId;
      this.$nextTick(() => {
        this.shape === 'card' ?
          this.$refs['episode-dialog'].init(this.currentSeasonId) :
          this.$refs['episode'].init(this.currentSeasonId);
      })
    }
  },
  mounted() {
    this.shapeChange(this.shape)
  }
}
</script>

<style lang="scss" scoped>
.season-list {
  z-index: 3;
}
</style>
