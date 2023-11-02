import {getCurrentInstance} from "vue";

export function defineRenter(fn: { (): any }) {
    let vm = getCurrentInstance();

    if (!vm) {
        throw new Error(`[Kamikisho] defineRender must be called from inside a setup function`)
    }

    // @ts-ignore
    vm.render = fn
}

export function makeProp<T extends string>(name: T, type?: any, defaultValue?: any, required?: boolean): { [key in T]: any } {
    const p = {} as any
    p[name] = {}
    p[name]['type'] = type ?? String
    p[name]['default'] = defaultValue
    p[name]['required'] = required ?? false
    return p
}

export function makePropTag<TagName extends keyof HTMLElementTagNameMap>(tag?: TagName) {
    return makeProp('tag', String, tag ?? 'div')
}

export function makePropPosition() {
    return makeProp('position', String)
}

export function makePropTransition(name?: string) {
    return makeProp('transition', String, name)
}

export function makePropTitle(s = '') {
    return makeProp('title', String, s)
}

export function makePropWidth() {
    return makeProp('width', [String, Number])
}

export function makePropTo() {
    return makeProp('to', String)
}

export function makePropHeight() {
    return makeProp('height', [String, Number])
}

export function makePropDuration(n?: string | number) {
    return makeProp('duration', [String, Number], n)
}

export function makePropMinWidth() {
    return makeProp('minWidth', [String, Number])
}

export function makePropMinHeight() {
    return makeProp('minHeight', [String, Number])
}

export function makePropMaxWidth() {
    return makeProp('maxWidth', [String, Number])
}

export function makePropMaxHeight() {
    return makeProp('maxHeight', [String, Number])
}

export function makePropColor(c?: string) {
    return makeProp('color', String, c)
}

export function makePropLink(b = false) {
    return makeProp('link', Boolean, b)
}

export function makePropDisabled(b = false) {
    return makeProp('disabled', Boolean, b)
}

export function makePropRipple(b = false) {
    return makeProp('ripple', Boolean, b)
}

export function makePropMode() {
    return makeProp('mode', String)
}

export function makePropGroup() {
    return makeProp('group', Boolean)
}

export function makePropElevation() {
    return makeProp('elevation', [String, Number])
}

export function makePropRounded() {
    return makeProp('rounded', [String, Number, Boolean])
}
