<template>
  <content-warp :name='$t("Image")'>
    <el-switch slot="rt" v-model="showAll" v-if="list.length>minCount" :active-text="$t('Show All')"/>
    <el-row :gutter="15">
      <template v-for="(image,index) of list">
        <el-col :key="image.imageId" :xs="6" :sm="6" :md="6" :lg="4" :xl="4" v-if="showAll || index<minCount">
          <show-image-item :info="image" :delay="index" @click.native="openImage(image)"/>
        </el-col>
      </template>
      <data-empty v-if="!list.length"/>
    </el-row>
    <look-image-original ref="look-image-original"/>
  </content-warp>
</template>

<script>
import LookImageOriginal from "@/components/Image/LookImageOriginal";

export default {
  components: {LookImageOriginal},
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
  },
  methods: {
    openImage(image) {
      this.$refs['look-image-original'].open(image.imageOriginal || image.imageMedium)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
