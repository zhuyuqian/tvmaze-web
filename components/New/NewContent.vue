<template>
  <component :is="newComponent" class="new-article-content" :class="{mobile:$store.getters.IS_MOBILE}">
    <show-item class="new-show" target="_blank" v-for="show of showList"
               :key="show.showId" :info="show"
               :slot="`show-${show.showId}`"
               :shape="$store.getters.IS_MOBILE?'list':'card'"/>
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
@import "~@/assets/scss/_handle.scss";

.new-article-content {
  ::v-deep .new-h3, .new-h1, .new-h2, .new-h4, .new-h5 {
    margin: 10px 0;
    @include fontColor('color-title');
  }

  ::v-deep .new-hr {
    margin: 20px 0;
    height: 0;
    border: none;
    @include border('border-base');
  }

  ::v-deep .new-p {
    margin: 10px 0;
    font-size: 16px;
  }

  ::v-deep .new-show {
    margin: 10px auto;
    width: 200px;
  }

  ::v-deep .new-img {
    margin: 10px auto;
    padding: 4px;
    border-radius: 4px;
    @include border('border-base');
  }

  &.mobile {
    ::v-deep .new-show {
      width: 100%;
    }

    ::v-deep .new-img {
      display: block;
      box-sizing: border-box;
      width: 100% !important;
    }

    ::v-deep .new-p {
      font-size: 14px;
    }
  }
}
</style>
