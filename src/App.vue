<template>
  <div class="books__editor">
    <header class="header">
      <div class="container">
        <p class="header__title">Книжный сервис</p>
      </div>
    </header>
    
    <div class="container">
      <main class="main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans";
}

button:focus {
  outline: none;
}

ul {
  list-style-type: none;
}

input:focus {
  outline: none ;
}

body {
  user-select:none;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.header {
  padding: 50px;
  background-color: #4c4ca1;
  margin-bottom: 100px;
}

.header__title {
  font-size: 20px;
  text-align: center;
  color: white;
}

.main {
  margin-bottom: 100px;
  background-color: #4c4ca114;
  padding: 30px;
  border-radius: 10px;
}

@media (max-width: 1240px) {
  .container {
    width: 740px;
    margin: 0 auto;
  } 

  .header {
    padding: 50px 0;
  }
}

@media (max-width: 756px) {
  .container {
    width: 320px;
    margin: 0 auto;
  } 
}
</style>
