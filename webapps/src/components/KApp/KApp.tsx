import './KApp.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";
import {useComputedVariables} from "@/stores/useglobal";

export const KApp = defineComponent({
    name: 'KApp',
    props: {
        ...makePropTag(),
    },
    setup(props, {slots}) {
        const stylesVariables = useComputedVariables();

        defineRenter(() => (
            <props.tag
                style={stylesVariables.value}
                class={'k-app'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KApp = InstanceType<typeof KApp>