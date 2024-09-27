import { reactive } from "vue";

export const store = reactive({
  sideBarLinks: [
    {
      name: "home",
      path: "/",
      spanText: "home",
    },
    {
      name: "dashboard",
      path: "/dashboard",
      spanText: "apps",
    },
    {
      name: "tradesList",
      path: "/tradesList",
      spanText: "format_list_bulleted",
    },
    {
      name: "moreStats",
      path: "/moreStats",
      spanText: "monitoring",
    },
    {
      name: "pnl",
      path: "/pnl",
      spanText: "donut_large",
    },
    {
      name: "traderProfile",
      path: "/traderProfile",
      spanText: "person",
    },
  ],
});
