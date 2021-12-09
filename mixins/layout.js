import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['THEME', 'SHOW_SHAPE', 'LOCALE'])
  },
  created() {
    if (process.browser) {
      this.$store.commit('SET_THEME', this.THEME);
      this.$store.commit('SET_SHOW_SHAPE', this.SHOW_SHAPE);
      this.$store.commit('SET_LOCALE', this.LOCALE);
    }
  }
}
