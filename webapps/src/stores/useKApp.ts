import {defineStore} from "pinia";
import {autoAddUnit} from "@/util";
import type {Themes} from "@/types/themes";

export default defineStore('useKApp', {
    state: () => ({
        uiComponents: {
            header: {
                height: '46px'
            },
            main: {
                height: 'calc(100% - 46px)'
            }
        },
        theme: 'dark' as Themes
    }),
    actions: {
        setHeaderHeight(num: any) {
            if (num !== undefined) {
                let hh = autoAddUnit(num);
                this.uiComponents.header.height = hh
                this.uiComponents.main.height = `calc(100% - ${hh})`
            }
        }
    },
    getters: {}
})