<template>
  <component :is="newComponent">
    <show-item class="new-show" target="_blank" v-for="show of showList"
               :key="show.showId" :info="show"
               :shape="$store.getters.IS_MOBILE?'list':'card'"
               :slot="`show-${show.showId}`"/>
  </component>
</template>

<script>
const HTML = process.server ? require('html-parse-stringify') : require('html-parse-stringify').default;

const handleTags = (tags) => {
  for (let tag of tags) {
    if (!tag.attrs) tag.attrs = {};
    tag.attrs.class = `new-${tag.name}`
    if (tag.attrs && tag.attrs['data-type'] === 'show') {
      tag.name = 'slot';
      tag.attrs = {'name': `show-${tag.attrs['data-id']}`}
    }
    handleTags(tag.children || []);
  }
}
const handleHtml = (html) => {
  let tags = HTML.parse(html);
  handleTags(tags);
  return HTML.stringify(tags);
}

export default {
  props: {
    html: {type: String, default: ''},
    showList: {type: Array, default: () => []}
  },
  computed: {
    newComponent() {
      return {
        template: `<div>${handleHtml(this.html)}</div>`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
