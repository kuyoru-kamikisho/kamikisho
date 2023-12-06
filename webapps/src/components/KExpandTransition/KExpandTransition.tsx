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
        let elh = 0;

        defineRenter(() => {
            return (
                (<Transition
                    name={'k-expand'}
                    onEnter={enter}
                    onAfterEnter={afterEnter}
                    onBeforeLeave={beforeLeave}
                    onAfterLeave={afterLeave}
                    mode={props.mode}>
                    {slots.default?.()}
                </Transition>)
            );
        })

        function enter(el) {
            elh = el.offsetHeight
            el.style.setProperty('--kexh', elh + 'px')
        }

        function afterEnter(el) {
            el.style.setProperty('--kexh', '')
            el.style.height = ''
        }

        function beforeLeave(el) {
            elh = el.offsetHeight
            el.style.setProperty('--kexh', elh + 'px')
        }

        function afterLeave(el) {
            el.style.height = ''
            el.style.setProperty('--kexh', '')
        }

        return {}
    },
})

export type KExpandTransition = InstanceType<typeof KExpandTransition>