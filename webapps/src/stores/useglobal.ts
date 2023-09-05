import {defineStore, storeToRefs} from "pinia";
import {autoAddUnit} from "@/util";

export const useKApp = defineStore('useKApp', {
    state: () => ({
        headerHeight: '46px',
    }),
    actions: {
        useHeaderHeight(num: any) {
            if (num !== undefined) {
                this.headerHeight = autoAddUnit(num)
            }
        }
    },
    getters: {
        computedVariables: (state) => {
            return {
                '--headerHeight': state.headerHeight,
            }
        }
    }
})

export function useHeaderHeight(num?: any) {
    useKApp().useHeaderHeight(num)
    return storeToRefs(useKApp()).headerHeight
}

export function useComputedVariables() {
    return storeToRefs(useKApp()).computedVariables
}