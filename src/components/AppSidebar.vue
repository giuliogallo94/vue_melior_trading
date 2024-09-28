<script>
import { store } from "../data/store";

export default {
  data() {
    return { store, selectedLink: "", index: 0 };
  },

  computed: {
    activePath() {
      return this.$route.path;
    },
  },
  methods: {
    isActiveLink(linkPath) {
      return this.$route.path === linkPath;
    },
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

  <nav class="col-span-1">
    <div class="sidebar-menu flex justify-center items-center">
      <!-- Link's Menu -->
      <ul class="flex flex-col gap-4 justify-center text-center">
        <router-link
          v-for="(link, index) in store.sideBarLinks"
          :to="link.path"
          @click="this.store.selectedSideLink = index">
          <li>
            <span
              class="material-symbols-outlined"
              :class="isActiveLink(link.path) ? 'selected' : ''">
              {{ link.spanText }}
            </span>
          </li>
        </router-link>
      </ul>
      <!-- /Link's Menu -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

nav {
  width: 100%;
  height: 100%;

  .sidebar-menu {
    width: 50%;
    height: 92%;

    ul {
      height: 70%;
      width: 100%;
      background-color: $primary-gold;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;

      li {
        span {
          color: black;
          font-size: 2rem;
          &:hover {
            color: white;
          }
        }
        .selected {
          color: white;
          text-shadow: 2px 2px rgba(0, 0, 0, 0.416);
        }
      }
    }
  }
}
</style>
