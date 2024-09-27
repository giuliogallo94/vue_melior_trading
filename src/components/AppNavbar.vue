<script></script>

<template>
  <nav class="ms-auto flex items-center justify-end">
    <div class="nav-menu p-5">
      <ul class="flex items-center gap-3">
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
