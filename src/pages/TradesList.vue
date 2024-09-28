<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      trades: [],
    };
  },

  // mounted() {
  //   this.fetchTrades();
  // },

  // methods: {
  //   async fetchTrades() {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/trades"); // URL dell'endpoint
  //       if (response.data.success) {
  //         this.trades = response.data.results; // Assegna i risultati all'array trades
  //       }
  //     } catch (error) {
  //       console.error("Errore nella chiamata API", error);
  //     }
  //   },
  // },

  created() {
    axios.get(`http://127.0.0.1:8000/api/trades`).then((resp) => {
      this.trades = resp.data.results;
    });
  },
};
</script>

<template>
  <div class="main-home grid grid-cols-2 items-center gap-x-11 px-7">
    <ul>
      <li v-for="(trade, index) in this.trades">
        {{ trade.asset.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
