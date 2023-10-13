import type {RouteRecordRaw} from "vue-router";

const Introduction = () => import("@/views/developPage/subpages/Introduction.vue");

export default [
    {path: 'introduction', component: Introduction,}
] as RouteRecordRaw[]