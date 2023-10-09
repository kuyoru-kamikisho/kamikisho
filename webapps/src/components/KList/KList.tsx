import './KList.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropDisabled, makePropLink, makePropRipple,
    makePropTag,
} from "@/util/renderTools";

export const KList = defineComponent({
    name: 'KList',
    props: {
        ...makePropTag('ul'),
        ...makePropDisabled(),
        ...makePropRipple(),
        ...makePropLink()
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={[
                    'k-list'
                ]}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KList = InstanceType<typeof KList>