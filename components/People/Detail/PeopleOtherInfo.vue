<template>
  <content-warp name="基本信息" size="small">
    <div class="people-other-info" :class="{mobile:$store.getters.IS_MOBILE}">
      <div class="other-box">
        <p class="label">出生</p>
        <p class="value">
          <span v-if="info.peopleBirthday">{{ $dayjs(info.peopleBirthday).format('YYYY-MM-DD') }}</span>
          <span class="none" v-else>{{ $t('Null') }}</span>
        </p>
      </div>
      <div class="other-box">
        <p class="label">年龄</p>
        <p class="value">
          <span v-if="info.peopleBirthday">
            {{ $dayjs(info.peopleDeathday || undefined).diff($dayjs(info.peopleBirthday), 'year') }}
          </span>
          <span class="none" v-else>{{ $t('Null') }}</span>
        </p>
      </div>
      <div class="other-box">
        <p class="label">国家</p>
        <p class="value">
          <span v-if="info.countryName">{{ info.countryName }}</span>
          <span class="none" v-else>{{ $t('Null') }}</span>
        </p>
      </div>
      <div class="other-box">
        <p class="label">性别</p>
        <p class="value">
          <span v-if="info.peopleGender">{{ $t(`people.gender.${info.peopleGender}`) }}</span>
          <span class="none" v-else>{{ $t('Null') }}</span>
        </p>
      </div>
    </div>
  </content-warp>
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

.people-other-info {
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

  &.mobile {
    padding: 10px 0;
    flex-wrap: wrap;

    .other-box {
      flex: none;
      width: 50%;
      margin: 10px 0;

      &:nth-child(2n) {
        &:after {
          width: 0;
        }
      }
    }
  }
}
</style>
