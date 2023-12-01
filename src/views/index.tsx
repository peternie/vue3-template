import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'index',
    setup() {
        let val = ref(0)
        let value = ref("")
        return () => (
            <div>
                <div class='h-[20vw] bg-red text-3xl'>1</div>
                <Data></Data>
                <div>{value.value}</div>
            </div>
        )
    }
})

let Data = () => {
    let a = ref(1)
    return (
        <>
            <div>{a.value}</div>
        </>

    )
}