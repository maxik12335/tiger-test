<template>
  <div>
    <h1 class="main__title">Редактор книг</h1>

    <ui-button
      class="button__create"
      @click="this.$router.push({name: 'BookCreate'})"
    >
      Добавить книгу
    </ui-button>

    <ul class="list__books">
      <li
        class="list__item__books"
        v-for="book in books"
        :key="book.id"
      >
        <div class="list__item__books__buttons">
          <!-- <button
            class="button button__remove"
            @click="$router.push({name: 'Book', params: {id: book.id} })"
          >
            Открыть
          </button> -->
          <ui-button
            class="button button__remove"
            @click="$router.push({name: 'Book', params: {id: book.id} })"
          >Открыть</ui-button>

          <ui-button 
            class="button button__editor"
            @click="$router.push({name: 'BookEditor', params: {id: book.id} })"
          >
            Редактировать
          </ui-button>

          <ui-button class="button button__remove" @click="this.booksStore.deleteBook(book.id)">
            Удалить
          </ui-button>
        </div>

        <img class="book__image" :src="book.src" alt="">

        <p class="book__price">
          {{ book.price }} р
        </p>
        <p class="book__title">
          {{ this.checkBookTitle(book.title) }}
        </p>
        <p class="book__author">
          {{ book.first_name }} {{ book.last_name }}
        </p>
      </li>
    </ul>  
  </div>
</template>

<script>
import { useBooksStore } from "@/stores/BooksStore.js"
import UiButton from './UI/UiButton.vue'
export default {
  components: { UiButton },
  
  data() {
    return {
      booksStore: useBooksStore()
    }
  },

  computed: {
    books() {
      return this.booksStore.books
    }
  },

  methods: {
    checkBookTitle(value) {
      return value.length > 23 ? value.slice(0,23) : value
    },  
  }
}
</script>

<style scoped>
.main__title {
  margin: 50px 0;
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  position: relative;
}

.button__create {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.5);
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
}

.button__create:hover {
  background-color: grey;
  color: white; 
}

.list__books {
  display: flex;
  flex-wrap: wrap;
}

.list__item__books {
  margin: 5px;
  width: 15%;
  cursor: pointer;
  position: relative;
}

.list__item__books__buttons {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 250px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
}

.list__item__books:hover .list__item__books__buttons {
  z-index: 1; 
  opacity: 1;
  background-color: #000000ba;
  color: white;
}

.button {
  width: 120px;
  padding: 5px 10px;
  box-shadow: 0px 0px 8px 0px rgb(255 255 255 / 60%);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin: 10px 0;
}

.button:hover {
  background-color: white;
  color: black;
}

.book__image {
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  height: 250px;
  object-fit: cover;
}

.book__price {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.book__title {
  font-size: 16px;
  margin-bottom: 5px;
}

.book__author {
  color: gray;
  font-size: 13px;
}

@media (max-width: 1240px) {
  .list__item__books {
    margin: 10px;
    width: 22%; 
  }
}

@media (max-width: 756px) {
  .main__title {
    margin: 40px 0;
    font-size: 30px;
  }
  .list__item__books {
    margin: 9px;
    width: 43%;
  }
  
  .book__image {
    height: 150px;
  }

  .list__item__books__buttons {
    height: 150px;
  }

  .button {
    width: 90%;
    font-size: 10px;
  }

  .book__image {
    margin-bottom: 10px;
  }

  .book__price {
    font-size: 14px;
  }

  .book__title {
    font-size: 13px;
  }

  .book__author {
    font-size: 12px;
  }
}

</style>