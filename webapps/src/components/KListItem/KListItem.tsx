import './KListItem.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag,
} from "@/util/renderTools";

export const KListItem = defineComponent({
    name: 'KListItem',
    props: {
        ...makePropTag('li'),
    },
    setup(props, {slots}) {
        defineRenter(() => (
            <props.tag
                class={[
                    'k-list-item',
                    'px-4 py-2',
                ]}
            >
                <div class={'content_overlay'}></div>
                <div class={'content_item'}>
                    {slots.default?.()}
                </div>
            </props.tag>
        ))
        return {}
    },
})

export type KListItem = InstanceType<typeof KListItem>