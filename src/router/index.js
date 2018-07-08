import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Index = () => import("../components/Index.vue");
const Page = () => import("../components/Page.vue");
const About = () => import("../components/page/About.vue");
const Contact = () => import("../components/page/Contact.vue");
const Integration = () => import("../components/page/Integration.vue");
const Train = () => import("../components/page/Train.vue");
const Maintenance = () => import("../components/page/Maintenance.vue");
const Map = () => import("../components/component/Map.vue");

export function createRouter() {
  return new Router({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", redirect: "/index" },
      { path: "/map", component:Map,name:'map' },
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
          },
          {
            path: "maintenance",
            component: Maintenance,
            name: "maintenance"
          },
          {
            path: "train",
            component: Train,
            name: "train"
          },
          {
            path: "integration",
            component: Integration,
            name: "integration"
          },
          {
            path: "contact",
            component: Contact,
            name: "contact"
          },
        ]
      }
    ]
  });
}
