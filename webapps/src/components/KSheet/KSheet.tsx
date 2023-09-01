import './KSheet.scss'
import {defineComponent, defineCustomElement, h} from "vue";
import type {SlotsType} from 'vue'

const vnode =defineComponent({
    props: {tag: {type: String, default: 'div'}},
    slots:{},
    setup(props,{slots}){
        console.log(this.$slots)
        return ()=>[
            h(props.tag)
        ]
    },
    // render(p:any) {
    //     console.log(typeof p.slots)
    //     return (
    //         <this.$props.tag>
    //             2
    //         </this.$props.tag>
    //     )
    // },
    mounted() {
    }
})
export default vnode