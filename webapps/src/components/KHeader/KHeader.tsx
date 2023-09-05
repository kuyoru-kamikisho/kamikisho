import './KHeader.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropColor, makePropHeight,
    makePropTag, makePropWidth,
} from "@/util/renderTools";
import {useHeaderHeight} from "@/stores/useglobal";

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
            useHeaderHeight(n)
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