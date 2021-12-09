import {mapGetters} from 'vuex'

export const getSearchInfo = (query = {}, params = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    order: query.order || 'a-z',
    type: query.type || undefined,
    genre: query.genre || undefined,
    name: query.name || undefined,
    language: query.language || undefined,
    network: params.network || undefined,
    webChannel: params.webChannel || undefined
  }
}

export default {
  computed: {
    ...mapGetters(['THEME', 'SHOW_SHAPE'])
  },
  data() {
    return {
      searchInfo: getSearchInfo(),
      showInfo: {data: [], count: 0}
    }
  },
  watch: {
    $route() {
      this.getList()
    }
  },
  methods: {
    searchInfoChange(name, value) {
      let assign = {[name]: value};
      // 如果不是页码，则页码变回1
      if (name !== 'page') assign.page = 1;
      // 合并搜索条件
      Object.assign(this.searchInfo, assign);
      // 从query中去除params的参数
      let query = JSON.parse(JSON.stringify(this.searchInfo))
      for (let key in query) {
        if (this.$route.params[key]) delete query[key]
      }
      // 跳转
      this.$router.push({path: this.$route.path, query: query});
    },
    async getList() {
      this.searchInfo = getSearchInfo(this.$route.query, this.$route.params);
      let {data: {data: showInfo}} = await this.$axios.get('/show/list', {params: this.searchInfo});
      this.showInfo = showInfo;
    }
  }
}
