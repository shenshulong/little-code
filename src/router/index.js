import Vue    from 'vue'
import Router from 'vue-router'

// page
import Index  from '@/pages/index'

Vue.use(Router)

export default new Router({
    routes: [
         {path: '/', name: 'Index', component: Index}
    ]
})
