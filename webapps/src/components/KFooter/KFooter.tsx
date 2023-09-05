import './KFooter.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropColor, makePropHeight,
    makePropTag, makePropWidth,
} from "@/util/renderTools";

export const KFooter = defineComponent({
    name: 'KFooter',
    props: {
        ...makePropTag('footer'),
        ...makePropWidth(),
        ...makePropHeight(),
        ...makePropColor(),
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={'k-footer'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KFooter = InstanceType<typeof KFooter>