<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";
export default {
  components: { AppNavbar, AppSidebar },
};
</script>

<template>
  <div class="ms_container grid grid-cols-8">
    <AppSidebar />
    <div class="content col-span-7">
      <AppNavbar />
    </div>
  </div>
</template>

<style lang="scss">
.ms_container {
  width: 100%vw;
  height: 100vh;
}
</style>
