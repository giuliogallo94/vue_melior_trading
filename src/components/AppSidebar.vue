<script></script>

<template>
  <nav class="col-span-1">
    <div class="side-logo">
      <img src="../assets/img/profile_picture.webp" alt="" />
    </div>
    <div class="sidebar-menu flex justify-center items-center">
      <ul class="flex flex-col gap-4 justify-center items-center">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 68, 0, 0.785);

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
      border: 1px solid black;
    }
  }
}
</style>
