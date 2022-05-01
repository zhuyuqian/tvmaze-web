import {defineStore} from 'pinia'

const isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
}

export const useStore = defineStore('main', {
    state() {
        return {
            userAgent: '',
        }
    },
    getters: {
        IS_MOBILE(state) { // 是否是手机访问
            return isMobile(state.userAgent)
        }
    },
    actions: {
        changeUserAgent() {
            if (process.server) { // 仅在服务端运行
                const headers = useRequestHeaders();
                const userAgent = headers['user-agent'];
                if (userAgent) this.userAgent = userAgent;
            }
        }
    }
})
