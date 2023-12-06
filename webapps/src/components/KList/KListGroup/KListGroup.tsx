import './KListGroup.scss'
import type {SlotsType} from "vue";
import {defineComponent, ref, Transition, watch} from "vue";
import {
    defineRenter, makePropColor, makePropDisabled, makePropDuration, makePropRipple,
    makePropTag, makePropTitle, makePropTo, makePropTransition,
} from "@/util/renderTools";
import {KExpandTransition} from "@/components/KExpandTransition";

export const KListGroup = defineComponent({
    name: 'KListGroup',
    emits: ['update:modelValue'],
    slots: Object as SlotsType<{
        default: { (): void },
        title: { (): any }
    }>,
    props: {
        ...makePropTitle('T'),
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
                    {slots.title?.() || props.title}
                </div>
                <KExpandTransition>
                    {
                        open.value &&
                        (
                            <div class='k-content_item'>
                                {slots.default?.()}
                            </div>
                        )
                    }
                </KExpandTransition>

            </props.tag>
        ))
        return {}
    },
})

export type KListGroup = InstanceType<typeof KListGroup>