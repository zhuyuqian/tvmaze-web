import ScreenDisplay from 'screen-display';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            sc: ScreenDisplay
        }
    }
})
