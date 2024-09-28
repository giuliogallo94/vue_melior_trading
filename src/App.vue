<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default {
  components: { AppNavbar, AppSidebar },
};
</script>

<template>
  <div class="ms_container">
    <AppNavbar />
    <div class="content grid grid-cols-8">
      <AppSidebar />
      <main class="col-span-7">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/partials/variables" as *;

.ms_container {
  width: 100vw;
  height: 100vh;
  background-color: $main-bg;
  color: white;

  .content {
    height: 92%;
  }
}
</style>
