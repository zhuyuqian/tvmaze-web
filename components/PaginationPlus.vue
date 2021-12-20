<template>
  <el-pagination class="pagination-plus" layout="prev, pager, next" v-bind="$attrs" v-on="$listeners"
                 :class="{mobile:$store.getters.IS_MOBILE}"
                 :pager-count="$store.getters.IS_MOBILE?2:7" @current-change="page=>$emit('change','page',page)"/>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_handle.scss";

.pagination-plus {
  padding: 20px 0 40px;
  display: flex;
  justify-content: space-between;

  ::v-deep .btn-prev, ::v-deep .btn-next {
    background: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding: 0;
    text-align: center;
    @include fontColor('color-text');

    i {
      font-size: 40px;
    }

    &:hover {
      @include fontColor('color-primary');
    }

    &:disabled {
      @include fontColor('color-disabled');
      @include borderColor("border-color");
    }
  }

  ::v-deep .el-pager {
    li {
      background: none;
      width: 50px;
      height: 50px;
      line-height: 50px;
      margin: 0 10px;
      text-align: center;
      font-size: 20px;
      @include fontColor('color-text');

      &.active, &:hover {
        @include fontColor('color-primary');
      }
    }
  }

  &.mobile {
    ::v-deep .btn-prev, ::v-deep .btn-next {
      width: 30px;
      height: 30px;
      line-height: 30px;

      i {
        font-size: 20px;
      }
    }

    ::v-deep .el-pager {
      li {
        margin: 0 4px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
    }
  }
}
</style>
