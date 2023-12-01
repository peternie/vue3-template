import { NButton } from "naive-ui";
import {defineComponent} from "vue";
let A = (props :any)=><div>{props.mode}</div>

export default defineComponent({
    name:'page',
      setup(){
          return ()=>(
              <div>
                  <NButton type="primary">123</NButton>
                </div>
          )
      }
})

