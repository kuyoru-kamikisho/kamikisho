import {defineStore} from "pinia";
import type {Themes} from "@/types/themes";

export default defineStore('useKApp', {
    state: () => ({
        theme: 'light' as Themes
    }),
    actions: {
    },
    getters: {}
})