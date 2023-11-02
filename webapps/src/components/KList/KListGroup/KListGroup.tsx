import './KListGroup.scss'
import type {SlotsType} from "vue";
import {defineComponent, ref, Transition, watch} from "vue";
import {
    defineRenter, makePropColor, makePropDisabled, makePropDuration, makePropRipple,
    makePropTag, makePropTitle, makePropTo, makePropTransition,
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
        ...makePropTransition('k-expand'),
        ...makePropTag('div'),
        ...makePropRipple(true),
        ...makePropColor(),
        ...makePropDisabled(false),
        modelValue: Boolean
    },
    setup(props, {slots, emit}) {
        const open = ref(props.modelValue)

        watch(() => props.modelValue, n => trigger(n, true))

        function trigger(b: boolean, f?: boolean) {
            if (!f)
                if (props.disabled) return;
            open.value = b
            emit('update:modelValue')
        }

        defineRenter(() => (
            <props.tag
                class={[
                    'k-list-group'
                ]}
            >
                <div class={'k-content_title'}
                     v-ripple={props.ripple}
                     onClick={() => trigger(!open.value)}>
                    <div class={'k-content_overlay'}></div>
                    88
                    {slots.title?.() || props.title}
                </div>
                <Transition name={props.transition} mode="out-in">
                    {
                        open.value &&
                        (
                            <div class='k-content_item'>
                                {slots.default?.()}
                            </div>
                        )
                    }
                </Transition>

            </props.tag>
        ))
        return {}
    },
})

export type KListGroup = InstanceType<typeof KListGroup>