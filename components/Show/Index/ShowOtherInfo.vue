<template>
  <div class="show-other-info">
    <div class="other-box">
      <p class="label">{{ $t('Status') }}</p>
      <p class="value">
        <el-tooltip :content="`最后更新时间：${$dayjs(info.showUpdated).format('YYYY-MM-DD HH:mm:ss')}`" placement="bottom">
          <i class="el-icon-warning-outline"></i>
        </el-tooltip>
        {{ $t(`show.status.${info.showStatus}`) }}
      </p>
    </div>

    <div class="other-box">
      <p class="label">{{ $t('Premiered') }}</p>
      <p class="value">{{ $dayjs(info.showPremiered).format('YYYY-MM-DD') }}</p>
    </div>
    <div class="other-box">
      <p class="label">{{ $t('Language') }}</p>
      <p class="value">
        <nuxt-link :to="`/show?language=${info.showLanguage}`">
          {{ $t(`show.language.${info.showLanguage}`) }}
        </nuxt-link>
      </p>
    </div>
    <div class="other-box">
      <p class="label">{{ $t('Type') }}</p>
      <p class="value">
        <nuxt-link :to="`/show?type=${info.showType}`">{{ $t(`show.type.${info.showType}`) }}</nuxt-link>
      </p>
    </div>
    <div class="other-box">
      <p class="label">{{ $t('Network') }}</p>
      <p class="value">
        <nuxt-link v-if="info.networkId" :to="`/network/${info.networkId}`">
          {{ info.networkName }}
        </nuxt-link>
        <span class="none" v-else>{{ $t('Null') }}</span>
      </p>
    </div>
    <div class="other-box">
      <p class="label">{{ $t('WebChannel') }}</p>
      <p class="value">
        <nuxt-link v-if="info.webChannelId" :to="`/webChannel/${info.webChannelId}`">
          {{ info.webChannelName }}
        </nuxt-link>
        <span class="none" v-else>{{ $t('Null') }}</span>
      </p>
    </div>
    <div class="other-box">
      <p class="label">{{ $t('Score') }}</p>
      <p class="value">
        {{ info.tvmazeRatingAverage }}
        <span class="none" v-if="info.tvmazeRatingAverage===null">{{ $t('Null') }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {type: Object, required: true}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.show-other-info {
  display: flex;
  margin: 0 0 20px;
  padding: 30px 0;
  border-radius: 4px;
  @include border('border-base');

  .other-box {
    position: relative;
    flex: 1;
    text-align: center;

    .label {
      font-size: 12px;
      @include fontColor('color-text')
    }

    .value {
      height: 20px;
      line-height: 20px;
      margin-top: 4px;
      font-size: 14px;
      font-weight: bold;
      @include fontColor('color-text');

      .none {
        @include fontColor('color-placeholder');
        font-weight: normal;
      }
    }

    &:after {
      position: absolute;
      content: '';
      right: 0;
      top: 50%;
      margin-top: -20px;
      width: 1px;
      height: 40px;
      @include backgroundColor('border-color')
    }

    &:last-child {
      &:after {
        width: 0;
      }
    }
  }
}
</style>
