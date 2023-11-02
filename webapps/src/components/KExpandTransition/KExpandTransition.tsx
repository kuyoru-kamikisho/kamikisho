import './KExpandTransition.scss'
import {defineComponent, Transition, TransitionGroup} from "vue";
import {
    defineRenter, makePropGroup, makePropMode
} from "@/util/renderTools";

export const KExpandTransition = defineComponent({
    name: 'KExpandTransition',
    props: {
        ...makePropMode()
    },
    setup(props, {slots}) {
        defineRenter(() => (
            (<Transition mode={props.mode} name="k-expand">
                {slots.default?.()}
            </Transition>)
        ))
        return {}
    },
})

export type KExpandTransition = InstanceType<typeof KExpandTransition>