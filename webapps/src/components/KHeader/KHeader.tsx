import './KHeader.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropColor, makePropHeight,
    makePropTag, makePropWidth,
} from "@/util/renderTools";
import useKApp from "@/stores/useKApp";

export const KHeader = defineComponent({
    name: 'KHeader',
    props: {
        ...makePropTag('header'),
        ...makePropWidth(),
        ...makePropHeight(),
        ...makePropColor(),
    },
    watch: {
        height(n) {
            useKApp().setHeaderHeight(n)
        }
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={'k-header'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KHeader = InstanceType<typeof KHeader>