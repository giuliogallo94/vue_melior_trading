<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: { AppNavbar, AppSidebar, AppMain },
};
</script>

<template>
  <div class="ms_container grid grid-cols-8">
    <AppSidebar />
    <div class="content col-span-7">
      <AppNavbar />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.ms_container {
  width: 100vw;
  height: 100vh;

  main {
    height: 92%;
  }
}
</style>
