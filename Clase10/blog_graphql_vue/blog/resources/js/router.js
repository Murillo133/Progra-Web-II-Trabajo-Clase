import Vue from "vue";
import VueRouter from "vue-router";
import Authors from "./components/authors/index.vue";
import Posts from "./components/posts/index.vue";

Vue.use(VueRouter);

const router = new VueRouter(
    {
        mode: "history",
        linkExactActiveClass: "active",
        routes: [
            {
                path: "/authors",
                component: Authors
            },
            {
                path: "/posts",
                component: Posts
            }
        ]
    }
);

export default router;
