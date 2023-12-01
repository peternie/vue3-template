import { defineComponent, h, KeepAlive, ref, RendererElement, RendererNode, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
interface RouteViewParams {
    Component: VNode<RendererNode, RendererElement, { [key: string]: any; }>,
    route: RouteLocationNormalizedLoaded
}
let Component = () => h(RouterView, null, {
    default: (scope: RouteViewParams) => h(KeepAlive, { exclude: ['index'] }, h(scope.Component || 'div'))
})
export default defineComponent({
    setup() {
      
        return () => (
            <div>
             
                        <Component></Component>
                   
            </div>
        )
    },
})