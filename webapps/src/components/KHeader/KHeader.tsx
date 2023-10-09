import './KHeader.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropHeight, makePropTag,
} from "@/util/renderTools";
import {autoAddUnit} from "@/util";
import {setRootvar} from "@/util/csssetters";

export const KHeader = defineComponent({
    name: 'KHeader',
    props: {
        ...makePropTag('header'),
        ...makePropHeight()
    },
    watch: {
        height(n) {
            if (n !== undefined) {
                let hh = autoAddUnit(n);
                setRootvar('--header-height', hh)
            }
        }
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={[
                    'k-header',
                    'elevation-1',
                    'px-4'
                ]}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KHeader = InstanceType<typeof KHeader>