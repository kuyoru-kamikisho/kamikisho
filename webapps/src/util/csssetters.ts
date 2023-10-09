export function setRootvar(varname: string, value: any) {
    document.documentElement.style.setProperty(varname, value);
}