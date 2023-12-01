import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'index',
    setup() {
        let val = ref(0)
        let value = ref("")
        return () => (
            <div>
                <div class='h-[20vw] bg-red text-3xl'>1</div>
                <n-button onclick={() => val.value++}>{val.value}</n-button>
                <Data></Data>
                <div>{value.value}</div>
                <n-input modelValue={value.value} onUpdateValue={(val: string) => value.value = val}></n-input>
            </div>
        )
    }
})

let Data = () => {
    let a = ref(1)
    return (
        <>
            <div>{a.value}</div>
            <n-button onClick={() => a.value++}>add</n-button>
        </>

    )
}