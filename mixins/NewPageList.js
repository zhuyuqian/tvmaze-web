export const getQueryInfo = (query = {}) => {
  return {
    page: query.page || 1,
    name: query.name || undefined,
    category: query.category || undefined
  }
}
export const getParamsInfo = (params = {}) => {
  return {
    showId: params.showId || undefined
  }
}
export default {
  watchQuery: true,
  data() {
    return {
      pageInfo: {data: [], count: 0},
      queryInfo: {}
    }
  },
  methods: {
    queryInfoChange(name, value) {
      let query = Object.assign({}, getQueryInfo(this.$route.query), {[name]: value});
      for (let key in query) {
        if (query[key] === undefined || query[key] === '') delete query[key]
      }
      this.$router.push({path: this.$route.path, query: query});
    }
  },
  async asyncData({app, query, params}) {
    let queryInfo = getQueryInfo(query);
    let paramInfo = getParamsInfo(params);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/new/list', {params: Object.assign({}, queryInfo, paramInfo)}),
    ])
    return {
      queryInfo,
      pageInfo,
    }
  }
}
