<template>
  <div class="header-control-warp">
    <div class="content header-control-box">
      <el-radio-group v-model="locale" @change="changeLocale">
        <!--        <el-radio v-for="(name,value) in $dic.localeMap" :key="value" :label="value">{{ name }}</el-radio>-->
      </el-radio-group>
      <nav class="theme-box">
        <a v-for="(label,value) of $dic.themeMap" href="javascript:void 0"
           class="item-box" :class="{active:THEME===value}" :key="value"
           @click="$store.commit('SET_THEME',value)">{{ label }}</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['THEME', 'LOCALE'])
  },
  data() {
    return {
      locale: null
    }
  },
  methods: {
    changeLocale(locale) {
      this.$store.commit('SET_LOCALE', locale);
      this.$i18n.locale = locale
    }
  },
  mounted() {
    this.locale = this.LOCALE
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.header-control-warp {
  height: 40px;
  line-height: 40px;
  @include backgroundColor("color-deep-background");

  .header-control-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .theme-box {
      .item-box {
        font-size: 14px;
        margin-left: 20px;

        &.active {
          @include fontColor("color-primary");
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
