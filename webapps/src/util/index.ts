export function extractNumberFromString(str: string) {
    str = str + ''
    const pattern = /\d+/g;
    const matches = str.match(pattern);
    if (matches === null) {
        return '';
    } else {
        return parseInt(matches.join(''));
    }
}

export function autoAddUnit(s: string | number, unit = 'px') {
    switch (typeof s) {
        case "number":
            return s + unit
        case "string":
            return extractNumberFromString(s) + unit
        default:
            return s
    }
}

export function isObject(obj: any): obj is object {
    return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}

export const keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16,
})