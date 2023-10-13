import './KListItem.scss'
import {defineComponent} from "vue";
import {
    defineRenter,
    makePropTag, makePropTo,
} from "@/util/renderTools";
import router from "@/router";

export const KListItem = defineComponent({
    name: 'KListItem',
    props: {
        ...makePropTag('li'),
        ...makePropTo()
    },
    setup(props, {slots}) {
        function routerTo() {
            if (props.to) {
                router.push(props.to)
            }
        }

        defineRenter(() => (
            <props.tag
                class={[
                    'k-list-item',
                    'px-4 py-2',
                ]}
                onclick={routerTo}
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