import {useStore} from '../stores';

export default defineNuxtRouteMiddleware((to, from) => {
    useTheme();
    useStore().changeUserAgent();
})
