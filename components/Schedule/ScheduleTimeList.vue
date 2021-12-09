<template>
  <div class="time-list">
    <p class="time-box" v-for="item of list" :key="item.hours" :class="{active:active===item.hours}"
       @click="$emit('jump',item.hours)">
      {{ item.hours }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    active: {type: String, default: ''},
    list: {type: Array, default: () => []}
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_handle.scss";

.time-list {
  .time-box {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 14px;
    transition: text-indent 0.5s;
    @include fontColor('color-text');

    &.active, &:hover {
      text-indent: 10px;
      @include fontColor('color-primary');
    }
  }
}
</style>
