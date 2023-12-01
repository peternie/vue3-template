import { GlobalThemeOverrides, NConfigProvider, NThemeEditor } from "naive-ui";
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
        let theme = ref<GlobalThemeOverrides>({
            common: {
                primaryColor: '#6366f1'
            }
        })

        return () => (
            <div>
                <NConfigProvider themeOverrides={theme.value}>
                    <NThemeEditor>
                        <Component></Component>
                    </NThemeEditor>
                </NConfigProvider>
            </div>
        )
    },
})