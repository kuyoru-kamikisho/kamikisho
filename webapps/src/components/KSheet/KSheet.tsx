import './KSheet.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropColor,
    makePropHeight, makePropMaxHeight, makePropMaxWidth, makePropMinHeight,
    makePropMinWidth, makePropRounded, makePropTag,
    makePropWidth
} from "@/util/renderTools";

export const KSheet = defineComponent({
    name: 'KSheet',
    props: {
        ...makePropTag(),
        ...makePropWidth(),
        ...makePropHeight(),
        ...makePropMinWidth(),
        ...makePropMinHeight(),
        ...makePropMaxWidth(),
        ...makePropMaxHeight(),
        ...makePropRounded(),
        ...makePropColor()
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={'k-sheet'}
                v-slots={slots}/>
        ))
        return {}
    },
})

export type KSheet = InstanceType<typeof KSheet>