<script></script>

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
      <ul class="flex flex-col gap-4 justify-center items-center">
        <!-- Dashboard link -->
        <router-link to="/dashboard">
          <li>
            <span class="material-symbols-outlined text-5xl"> apps </span>
          </li>
        </router-link>
        <li>
          <span class="material-symbols-outlined"> format_list_bulleted </span>
        </li>
        <li><span class="material-symbols-outlined"> monitoring </span></li>
        <li><span class="material-symbols-outlined"> donut_large </span></li>
        <li><span class="material-symbols-outlined"> person </span></li>
      </ul>
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
      }
    }
  }
}
</style>
