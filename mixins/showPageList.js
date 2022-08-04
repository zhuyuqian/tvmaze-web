import {mapGetters} from 'vuex'

export const getQueryInfo = (query = {}, params = {}) => {
  return {
    page: query.page ? Number(query.page) : 1,
    order: query.order || 'a-z',
    type: query.type || undefined,
    genre: query.genre || undefined,
    name: query.name || undefined,
    status: query.status || undefined,
    language: query.language || undefined,
  }
}

export const getParamsInfo = (params = {}) => {
  return {
    network: params.networkId || undefined,
    webChannel: params.webChannelId || undefined
  }
}

export default {
  watchQuery: true,
  computed: {
    ...mapGetters(['SHOW_SHAPE'])
  },
  data() {
    return {
      queryInfo: {},
      pageInfo: {data: [], count: 0}
    }
  },
  methods: {
    queryInfoChange(name, value) {
      let query = Object.assign({}, getQueryInfo(this.$route.query), {[name]: value});
      for (let key in query) {
        if (query[key] === undefined || query[key] === '') delete query[key]
      }
      this.$router.push({path: this.$route.path, query: query});
    },
  },
  async asyncData({app, query, params}) {
    let queryInfo = getQueryInfo(query);
    let paramInfo = getParamsInfo(params);
    let [
      {data: {data: pageInfo}},
    ] = await Promise.all([
      app.$axios.get('/show/list', {params: Object.assign({}, queryInfo, paramInfo)}),
    ])
    return {
      pageInfo,
      queryInfo
    }
  }
}
