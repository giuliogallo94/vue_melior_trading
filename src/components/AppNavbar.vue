<script></script>

<template>
  <nav
    class="ms-auto grid grid-cols-8 items-center justify-between place-content-center">
    <!-- Logo -->
    <router-link to="/">
      <div class="nav-logo col-span-1">
        <img src="../assets/img/logo-crop.png" alt="" />
      </div>
    </router-link>
    <!-- /Logo -->

    <div class="nav-menu col-start-7 col-span-2 p-5">
      <ul class="flex justify-end items-center gap-3">
        <li class="">Nome Cognome</li>
        <li class="">
          <img
            id="nav_profile_picture"
            src="../assets/img/profile_picture1.jpeg"
            alt="" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

nav {
  width: 100%;
  height: 8%;
  background-color: black;
  color: $primary-gold;

  .nav-logo {
    img {
      max-width: 30%;
      margin: 0 auto;
    }
  }
  .nav-menu {
    ul {
      li {
        #nav_profile_picture {
          border-radius: 50%;
          width: 2.8vw;
          aspect-ratio: 1;
        }
      }
    }
  }
}
</style>
