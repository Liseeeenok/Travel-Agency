import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import EventsPage from "@/pages/EventsPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/events',
        component: EventsPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;