import Vue from 'vue'
import Router from 'vue-router'
import DrumMachine from "../components/DrumMachine"
import Author from "../components/Author"

Vue.use(Router)

export const router = new Router({
    routes: [

        {
            path: '/',
            component: DrumMachine,
            meta: {
            title: 'Drum Machine Online'
            }
        },
        {
            path: '/author',
            component: Author,
            meta: {
            title: 'Drum Machine Online - About Author'
            }
        },
        
    ]
})
router.beforeEach((to, from, next) => {

    document.title = to.meta.title;



    next();
})