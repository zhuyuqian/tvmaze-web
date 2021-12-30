export default {
  props: {
    showInfo: {type: Object, required: true}
  },
  data() {
    return {
      seasonNo: null,
      episodeName: null,
      seasonList: [],
      episodeList: []
    }
  },
  computed: {
    // 当前季
    seasonInfo() {
      return this.seasonList.find(season => season.seasonNo == this.seasonNo)
    },
    // 当前集
    episodeInfo() {
      if (!this.episodeName) return;
      return this.episodeList.find(episode => episode.episodeName === this.episodeName.replace(new RegExp('-', 'g'), ' '));
    }
  },
  async asyncData({app, params}) {
    let {showId, seasonNo, episodeName} = params;
    // 获取季列表
    let {data: {data: seasonList}} = await app.$axios.get('/season/list', {params: {showId}})
    // 如果没有，赋值第一个
    if (!seasonNo) seasonNo = seasonList[0].seasonNo;
    // 如果没有季或者查询的季号不存在列表中
    if (!seasonList.length || !seasonList.find(season => season.seasonNo == seasonNo)) return {seasonList}
    // 获取列表
    let {data: {data: episodeList}} = await app.$axios.get('/episode/list', {params: {showId, seasonNo}});
    // 返回完整信息
    return {seasonNo, episodeName, seasonList, episodeList}
  }
}
