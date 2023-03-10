import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeView.vue"
import About from "./views/AboutView.vue"
import CatGenerator from "./views/CatGeneratorView.vue"

Vue.use(Router);

const router = new Router({

    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/CatGenerator",
            name: "CatGenerator",
            component: CatGenerator
        },
    ]
    
});

export default router;