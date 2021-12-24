import Vue from 'vue';

Vue.use({
  install(Vue) {
    Vue.prototype.wxShare = async function ({title, desc, link, image}) {
      if (!/MicroMessenger/i.test(window.navigator.userAgent)) return;
      return;
      let {data: {data, error}} = await this.$axios.get('/common/wxConfig', {params: {url: location.href}});
      if (error) return;
      image = image || '//s4.ax1x.com/2021/12/24/Ttyi3F.png';
      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
      })
      wx.ready(() => {
        wx.updateAppMessageShareData({
          title: title,
          desc: desc,
          link: link,
          imgUrl: image
        })
        // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
        wx.updateTimelineShareData({
          title: title,
          desc: desc,
          link: link,
          imgUrl: image
        })
      })
    }
  }
})
