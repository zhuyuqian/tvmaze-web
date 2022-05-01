export default async function (url, option) {
    console.log(url)
    let {data} = await useFetch(`http://nuxt3.tvmaze.cn/api${url}`, option);
    return data.value
}
