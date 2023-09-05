import './KMain.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropColor,
    makePropTag,
} from "@/util/renderTools";

export const KMain = defineComponent({
    name: 'KMain',
    props: {
        ...makePropTag('main'),
        ...makePropColor(),
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={'k-main scrollable-y scrollable'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KMain = InstanceType<typeof KMain>