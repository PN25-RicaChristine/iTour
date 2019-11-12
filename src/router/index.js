import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from './module_routes'
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
Vue.use(Router)
export default new Router({
    routes: ModuleRoutes.routes
})