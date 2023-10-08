import './KApp.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";
import useKApp from "@/stores/useKApp";
import {storeToRefs} from "pinia";

export const KApp = defineComponent({
    name: 'KApp',
    props: {
        ...makePropTag(),
    },
    setup(props, {slots}) {
        const {theme} = storeToRefs(useKApp())
        defineRenter(() => (
            <props.tag
                class={[
                    'k-app',
                    'k-locale-ltr',
                    'k-theme-' + theme.value
                ]}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KApp = InstanceType<typeof KApp>