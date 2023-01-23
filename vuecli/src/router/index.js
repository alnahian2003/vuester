import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import FoodView from "../views/FoodView.vue";
import Social from "@/components/social/Social.vue";
import CounterView from "@/views/CounterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/food",
      name: "food",
      component: FoodView,
    },
    {
      path: "/social",
      name: "social",
      component: Social,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterView,
    },
  ],
});

export default router;
