import './KExpandTransition.scss'
import type {PropType} from 'vue'
import {camelize, defineComponent, Transition} from "vue";
import {
    defineRenter, makePropMode
} from "@/util/renderTools";

interface HTMLExpandElement extends HTMLElement {
    _parent?: (Node & ParentNode & HTMLElement) | null
    _initialStyle?: {
        transition: string
        overflow: string
        height?: string | null
        width?: string | null
    }
}

export const KExpandTransition = defineComponent({
    name: 'KExpandTransition',
    props: {
        expandedParentClass: String,
        direction: {type: String as PropType<'x' | 'y'>, default: 'y'},
        ...makePropMode()
    },
    setup(props, {slots}) {
        let elh = 0;
        const sizeProperty = props.direction === 'x' ? 'width' : 'height'
        const offsetProperty = camelize(`offset-${sizeProperty}`) as 'offsetHeight' | 'offsetWidth'

        defineRenter(() => {
            return (
                (<Transition
                    name={'k-expand'}
                    onBeforeEnter={beforeEnter}
                    onEnter={enter}
                    onAfterEnter={resetStyles}
                    onEnterCancelled={resetStyles}
                    onLeave={leave}
                    onAfterLeave={afterLeave}
                    onLeaveCancelled={afterLeave}
                    mode={props.mode}>
                    {slots.default?.()}
                </Transition>)
            );
        })

        function beforeEnter(el: any) {
            el._parent = el.parentNode as (Node & ParentNode & HTMLElement) | null
            el._initialStyle = {
                transition: el.style.transition,
                overflow: el.style.overflow,
                [sizeProperty]: el.style[sizeProperty],
            }
        }

        function enter(el: any) {
            const initialStyle = el._initialStyle!

            el.style.setProperty('transition', 'none', 'important')
            el.style.overflow = 'hidden'
            const offset = `${el[offsetProperty]}px`

            el.style[sizeProperty] = '0'

            void el.offsetHeight

            el.style.transition = initialStyle.transition

            if (props.expandedParentClass && el._parent) {
                el._parent.classList.add(props.expandedParentClass)
            }

            requestAnimationFrame(() => {
                el.style[sizeProperty] = offset
            })
        }

        function leave(el: any) {
            el._initialStyle = {
                transition: '',
                overflow: el.style.overflow,
                [sizeProperty]: el.style[sizeProperty],
            }

            el.style.overflow = 'hidden'
            el.style[sizeProperty] = `${el[offsetProperty]}px`
            void el.offsetHeight

            requestAnimationFrame(() => (el.style[sizeProperty] = '0'))
        }

        function afterLeave(el: any) {
            if (props.expandedParentClass && el._parent) {
                el._parent.classList.remove(props.expandedParentClass)
            }
            resetStyles(el)
        }

        function resetStyles(el: any) {
            const size = el._initialStyle![sizeProperty]
            el.style.overflow = el._initialStyle!.overflow
            if (size != null) el.style[sizeProperty] = size
            delete el._initialStyle
        }

        return {}
    },
})

export type KExpandTransition = InstanceType<typeof KExpandTransition>