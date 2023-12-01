import {defineComponent} from "vue";
import { useStore } from "../store/pinia";
let A = (props :any)=><div>{props.mode}</div>

export default defineComponent({
    name:'page',
      setup(){
        let store = useStore()
          return ()=>(
              <div class='bg-fuchsia-400 w-[375px]' >
                page
                <van-button onClick={()=>store.addCount()}>{store.count}</van-button>
                </div>

                
          )
      }
})

