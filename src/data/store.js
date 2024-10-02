import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/",
  trades: [],
  selectedSideLink: "",
  sideBarLinks: [
    {
      name: "dashboard",
      path: "/dashboard",
      spanText: "home",
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
