import './KRipple.scss'
import type {DirectiveBinding} from "vue";


function updateRipple(el: HTMLElement, binding: DirectiveBinding, b: boolean) {
    const div = document.createElement('div');
    el.style.overflow = 'hidden'
    div.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="10" cy="10" r="10" />' +
        '</svg>'

    let len = Math.round(
            Math.sqrt(
                Math.pow(el.offsetWidth, 2)
                + Math.pow(el.offsetHeight, 2)
            )),
        mr = Math.round(len / 10),
        removeing: any,
        leaveing: any;


    div.classList.add('k-ripple')

    const resE = () => {
        div.remove()
        div.style.left = ''
        div.style.top = ''
        div.style.transform = ''
        div.style.opacity = ''
    }
    const dfn = (e: MouseEvent) => {
        resE()
        clearTimeout(removeing)
        el.appendChild(div)
        let px = Math.floor(100 * e.offsetX / el.offsetWidth);
        let py = Math.floor(100 * e.offsetY / el.offsetHeight);
        div.style.opacity = 'var(--btn-ripple-opacity)'
        div.style.left = e.offsetX + 'px'
        div.style.top = e.offsetY + 'px'
        div.style.transform = `scale(${mr}) translate(-50%,-50%)`
    }
    const ufn = (e: MouseEvent) => {
        clearTimeout(leaveing)
        leaveing = setTimeout(() => {
            div.style.opacity = ''
            removeing = setTimeout(() => {
                resE()
            }, 210)
        }, 210)
    }
    el.addEventListener('mousedown', dfn)
    el.addEventListener('mouseup', ufn)
    el.addEventListener('mouseleave', ufn)
}

function mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value || binding.value === undefined)
        updateRipple(el, binding, false)
    else
        return;
}

function removeListeners(el: HTMLElement) {
    const div = el.querySelector(".k-ripple");
    div?.remove()
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
    unmounted
}

export default Ripple