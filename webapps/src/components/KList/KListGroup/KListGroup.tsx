import './KListGroup.scss'
import type {SlotsType} from "vue";
import {defineComponent, ref, watch} from "vue";
import {
    defineRenter, makePropDisabled, makePropRipple,
    makePropTag, makePropTitle, makePropTo,
} from "@/util/renderTools";

export const KListGroup = defineComponent({
    name: 'KListGroup',
    emits: ['update:modelValue'],
    slots: Object as SlotsType<{
        default: { (): void },
        title: { (): any }
    }>,
    props: {
        ...makePropTitle(),
        ...makePropTag('div'),
        ...makePropRipple(true),
        ...makePropDisabled(false),
        modelValue: Boolean
    },
    setup(props, {slots, emit}) {
        const open = ref(props.modelValue)

        watch(() => props.modelValue, n => trigger(n, true))

        function trigger(b: boolean, f?: boolean) {
            console.log(f)
            if (!f)
                if (props.disabled) return;
            open.value = b
            emit('update:modelValue')
            console.log(b)
        }

        defineRenter(() => (
            <props.tag
                class={[
                    'k-list-group'
                ]}
                v-ripple={props.ripple}
            >
                <div class={'k-content_overlay'}></div>
                <div class={'k-content_title'}
                     onClick={() => trigger(!open.value)}>
                    88
                    {slots.title?.() || props.title}
                </div>
                {open.value ?
                    (<div class={'k-content_item'}>
                        {slots.default?.()}
                    </div>)
                    : null}

            </props.tag>
        ))
        return {}
    },
})

export type KListGroup = InstanceType<typeof KListGroup>