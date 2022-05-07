// 请求地址
const API_BASE = 'http://nuxt3.tvmaze.cn';

// 处理api请求
const handleApiRequest = async (event) => {
    let {url, method} = event.req;
    let {error, data} = await $fetch(url, {method, baseURL: API_BASE});
    if (error) return null;
    return data;
}

export default defineEventHandler(async (event) => {
    if (event.req.url.startsWith('/api')) {
        return await handleApiRequest(event);
    }
})
