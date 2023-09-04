import './KSheet.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropColor,
    makePropHeight, makePropMaxHeight, makePropMaxWidth, makePropMinHeight,
    makePropMinWidth, makePropRounded, makePropTag,
    makePropWidth
} from "@/util/renderTools";

export default defineComponent({
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
                v-slots={slots}/>
        ))
        return {}
    },
})