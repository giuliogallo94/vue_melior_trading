<script>
import { store } from "../data/store";

export default {
  data() {
    return { store };
  },

  methods: {},
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

  <nav class="col-span-1">
    <div class="side-logo">
      <router-link to="/">
        <img src="../assets/img/logo-crop.png" alt="" class="p-3" />
      </router-link>
    </div>
    <div class="sidebar-menu flex justify-center items-center">
      <!-- Link's Menu -->
      <ul class="flex flex-col gap-4 justify-center items-center">
        <router-link
          v-for="(link, index) in store.sideBarLinks"
          :to="link.path">
          <li>
            <span class="material-symbols-outlined">
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
  background-color: black;

  .side-logo {
    height: 8%;

    img {
      max-height: 100%;
      margin: auto;
    }
  }
  .sidebar-menu {
    height: 92%;

    ul {
      height: 50%;
      width: 100%;
      background-color: $primary-gold;
      // clip-path: ellipse(0% 0%, 25% 40%, at 50% 50%);

      li {
        span {
          font-size: 2rem;
        }

        .active {
          color: red;
        }
      }
    }
  }
}
</style>
