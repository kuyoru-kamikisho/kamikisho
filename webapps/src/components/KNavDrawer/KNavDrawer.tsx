import './KNavDrawer.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";

export const KNavDrawer = defineComponent({
    name: 'KNavDrawer',
    props: {
        ...makePropTag('nav'),
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={[
                    'k-nav-drawer',
                    'elevation-1',
                    'scrollable',
                ]}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KNavDrawer = InstanceType<typeof KNavDrawer>