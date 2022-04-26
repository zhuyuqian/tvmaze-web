import {defineNuxtPlugin} from "~~/.nuxt/imports";
import ElementPlus from 'element-plus/dist/index.full'
import * as ElIconModules from '@element-plus/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus)
    for (const iconName in ElIconModules) {
        const icon = ElIconModules[iconName]
        nuxtApp.vueApp.component(iconName, icon)
    }
})
