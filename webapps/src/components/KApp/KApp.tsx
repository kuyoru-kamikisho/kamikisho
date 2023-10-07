import './KApp.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";
import useKApp from "@/stores/useKApp";

export const KApp = defineComponent({
    name: 'KApp',
    props: {
        ...makePropTag(),
    },
    setup(props, {slots}) {
        // useKApp().theme todo
        defineRenter(() => (
            <props.tag
                class={'k-app'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KApp = InstanceType<typeof KApp>