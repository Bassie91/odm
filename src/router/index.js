import Vue from 'vue'
import Router from 'vue-router'
import DrumMachine from "../components/DrumMachine";

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
        
    ]
})
router.beforeEach((to, from, next) => {

    document.title = to.meta.title;



    next();
})