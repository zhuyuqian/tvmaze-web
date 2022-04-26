import {defineNuxtConfig} from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'TvMaze.cn - 追剧日记 - 你的个人追剧指南',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
                {name: 'keywords', content: "追剧,预告,电视剧,美剧,日剧,韩剧,卡司,角色,追剧日记,追剧指南"},
                {
                    name: 'description',
                    content: '电视剧和网剧、个性化的时间表、剧集指南，演员，工作人员和角色信息、回顾，预告，名人照片。'
                },
            ],
            script: [],
            link: [],
        },
    },
    css: [
        'element-plus/dist/index.css',
        'normalize.css',
        '@/assets/style/common.scss',
        '@/assets/style/theme.scss',
    ]
})
