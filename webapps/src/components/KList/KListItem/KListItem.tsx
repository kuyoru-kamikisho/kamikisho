import './KListItem.scss'
import {defineComponent} from "vue";
import {
    defineRenter, makePropRipple,
    makePropTag, makePropTo,
} from "@/util/renderTools";
import router from "@/router";

export const KListItem = defineComponent({
    name: 'KListItem',
    props: {
        ...makePropTag('li'),
        ...makePropTo(),
        ...makePropRipple(true),
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
                ]}
                onclick={routerTo}
                v-ripple={props.ripple}
            >
                <div class={'k-content_overlay'}></div>
                <div class={'k-content_item'}>
                    {slots.default?.()}
                </div>
            </props.tag>
        ))
        return {}
    },
})

export type KListItem = InstanceType<typeof KListItem>