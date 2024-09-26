<script></script>

<template>
  <div class="main-home grid grid-cols-2 items-center gap-2">
    <div class="quadrante items-centerborder">Quadrante1</div>
    <div class="quadrante">Quadrante2</div>
    <div class="quadrante">Quadrante3</div>
    <div class="quadrante">Quadrante4</div>
  </div>
</template>

<style lang="scss" scoped>
.main-home {
  height: 92%;

  .quadrante {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
