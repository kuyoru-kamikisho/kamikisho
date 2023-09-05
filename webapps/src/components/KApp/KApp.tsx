import './KApp.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";

export const KApp = defineComponent({
    name: 'KApp',
    props: {
        ...makePropTag(),
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={'k-app'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KApp = InstanceType<typeof KApp>