import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Dashboard from "./pages/Dashboard.vue";
import TradesList from "./pages/TradesList.vue";
import MoreStats from "./pages/MoreStats.vue";
import Pnl from "./pages/Pnl.vue";
import TraderProfile from "./pages/TraderProfile.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/tradesList",
      name: "tradesList",
      component: TradesList,
    },
    {
      path: "/moreStats",
      name: "moreStats",
      component: MoreStats,
    },

    {
      path: "/pnl",
      name: "pnl",
      component: Pnl,
    },
    {
      path: "/traderProfile",
      name: "traderProfile",
      component: TraderProfile,
    },
  ],
});

export { router };
