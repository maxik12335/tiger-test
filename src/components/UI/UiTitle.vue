<template>
  <h1 class="book__title">
    <slot></slot>
  </h1>
</template>

<style scoped>
.book__title {
  margin: 50px 0;
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  position: relative;
}
</style>