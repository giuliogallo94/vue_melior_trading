import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
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
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
    },

    {
      path: "/tradesList",
      name: "tradesList",
      component: TradesList,
      meta: { requiresAuth: true },
    },
    {
      path: "/moreStats",
      name: "moreStats",
      component: MoreStats,
      meta: { requiresAuth: true },
    },

    {
      path: "/pnl",
      name: "pnl",
      component: Pnl,
      meta: { requiresAuth: true },
    },
    {
      path: "/traderProfile",
      name: "traderProfile",
      component: TraderProfile,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    // Se la rotta richiede autenticazione e l'utente non è loggato
    next("/login");
  } else {
    next();
  }
});

export { router };
