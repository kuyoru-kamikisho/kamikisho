import './KRipple.scss'
import type {DirectiveBinding} from "vue";

function updateRipple(el: HTMLElement, binding: DirectiveBinding, b: boolean) {

}

function mounted(el: HTMLElement, binding: DirectiveBinding) {
    updateRipple(el, binding, false)
}

function removeListeners(el: HTMLElement) {

}

function unmounted(el: HTMLElement) {
    removeListeners(el)
}

function isRippleEnabled(oldValue: any): boolean {

    return false
}

function updated(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value === binding.oldValue) {
        return
    }

    const wasEnabled = isRippleEnabled(binding.oldValue)
    updateRipple(el, binding, wasEnabled)
}

export const Ripple = {
    mounted,
    unmounted,
    updated,
}

export default Ripple