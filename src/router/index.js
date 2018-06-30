import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Index = () => import("../components/Index.vue");
const Page = () => import("../components/Page.vue");
const About = () => import("../components/About.vue");

export function createRouter() {
  return new Router({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", redirect: "/index" },
      { path: "/index", component: Index, name: "index" },
      {
        path: "/page",
        component: Page,
        redirect: "/page/about",
        children: [
          {
            path: "about",
            component: About,
            name: "about"
          }
        ]
      }
    ]
  });
}
