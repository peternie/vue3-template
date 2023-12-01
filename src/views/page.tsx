import {defineComponent} from "vue";
let A = (props :any)=><div>{props.mode}</div>

export default defineComponent({
    name:'page',
      setup(){
          return ()=>(
              <div class='bg-fuchsia-400 w-[375px]'>
                page
                </div>
          )
      }
})

