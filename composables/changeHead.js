export default function (title = '') {
    const {LOGO_TEXT} = useDictionary();
    if (title) {
        useHead({
            title: `${title} - ${LOGO_TEXT}`
        })
    }
}
