<template>
  <div class="error__page">
    <h1 class="error__title">Ничего не найдено</h1>
    <button class="error__button" @click="this.$router.push({name: 'Books'})">вернуться на главную</button>
  </div>  
</template>

<style>
.error__title {
  font-size: 60px;
  text-align: center;
  margin-bottom: 30px;
}

.error__button {
  padding: 10px 40px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.5);
  margin: 0 auto;
  display: block;
  cursor: pointer;
}

.error__button:hover {
  background-color: grey;
  color: white;
}
</style>