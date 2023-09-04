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