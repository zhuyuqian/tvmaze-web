<template>
  <div class="header-control-warp">
    <div class="container header-control-box">
      <span class="link-box">
        <nuxt-link to="/about">关于</nuxt-link>
        <nuxt-link to="/contact">加入</nuxt-link>
        <nuxt-link to="/changelog">更新日志</nuxt-link>
      </span>
      <div class="rt-box">
        <!--        <el-radio-group v-model="locale" @change="changeLocale">-->
        <!--          <el-radio v-for="(name,value) in $dic.localeMap" :key="value" :label="value">{{ name
        }}</el-radio>-->
        <!--        </el-radio-group>-->
        <nav class="theme-box">
          <a v-for="(label,value) of $dic.themeMap" href="javascript:void 0"
             class="item-box" :class="{active:$store.getters.THEME===value}" :key="value"
             @click="$store.commit('SET_THEME',value,this)">{{ label }}</a>
        </nav>
        <el-divider direction="vertical"></el-divider>
        <user-reg-or-login/>
      </div>
    </div>
  </div>
</template>

<script>
import UserRegOrLogin from "@/components/_Layout/UserRegOrLogin";

export default {
  components: {UserRegOrLogin},
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
    this.locale = this.$store.getters.LOCALE
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

    .link-box {
      font-size: 13px;

      a {
        display: inline-block;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .rt-box {
      display: flex;
      align-items: center;

      .theme-box {
        .item-box {
          font-size: 12px;
          margin-left: 15px;

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
}
</style>
