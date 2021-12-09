<template>
  <content-warp :name='$t("Image")'>
    <el-switch slot="rt" v-model="showAll" v-if="list.length>minCount" :active-text="$t('Show All')"/>
    <el-row :gutter="15">
      <template v-for="(image,index) of list">
        <el-col :key="image.imageId" :xs="6" :sm="6" :md="6" :lg="4" :xl="4" v-if="showAll || index<minCount">
          <show-image-item :info="image" class="animate__animated animate__fadeInDown" :class="`delay-${index}`"/>
        </el-col>
      </template>
    </el-row>
  </content-warp>
</template>

<script>
export default {
  props: {
    list: {
      type: Array, default: () => []
    }
  },
  data() {
    return {
      minCount: 6,
      showAll: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
