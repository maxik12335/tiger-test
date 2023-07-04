<template>
  <div class="book__page">
    <ui-title>
      Книга id: {{ book.id }}
      <span @click="back">назад</span>
    </ui-title>
    <div class="book">
      <div class="book__top">
        <img class="book__img" :src="book.src" alt="">

        <div class="book__about">
          <h2 class="book__name">{{ book.title }}</h2>
          <p class="book__author">
            {{ book.first_name }} {{ book.last_name }}
          </p>
          <p class="book__year">
            <span>год издания</span>
            <span>{{ book.year }}</span>
          </p>
        </div>
      </div>

      <p class="book__description">
        {{ book.description }}
      </p>
    </div>
  </div>  
</template>

<script>
import { useBooksStore } from "@/stores/BooksStore.js"
import UiTitle from './UI/UiTitle.vue'
export default {
  components: { UiTitle },

  methods: {
    back() {
      this.$router.push({name: "Books"})
    },
  },
  
  computed: {
    book() {
      return useBooksStore().getBook(Number(this.$route.params.id))[0]
    }
  }
}
</script>

<style scoped>
.book__title span {
  font-size: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  border: 1px solid grey;
}

.book__title span:hover {
  background-color: grey;
  color: white;
  border: none;
}

.book__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  margin-bottom: 150px;
}

.book__img {
  width: 450px;
  height: 100%;
  object-fit: cover;
}

.book__about {
  height: 100%;
  flex-grow: 1;
  padding: 100px 80px 150px 80px;
  display: flex;
  flex-direction: column;
}

.book__name {
  font-size: 30px;
  margin-bottom: 5px;
}

.book__author {
  font-size: 20px;
  color: #6c6ceb;
}

.book__year {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 15px;
}

.book__description {
  font-size: 20px;
}

@media (max-width: 1240px) {
  .book__top {
    height: 400px;
  }

  .book__img {
    width: 40%;
  } 

  .book__about {
    padding: 80px;
  }

  .book__name {
    font-size: 24px;
  }

  .book__author {
    font-size: 17px;
  }
}

@media (max-width: 756px) {
  .book__title {
    margin: 40px 0;
    font-size: 30px;
  } 

  .book__title span {
    left: 50%;
    top: -50%;
    transform: translate(-50%, -50%);
  }
  
  .book__top {
    flex-direction: column;
    height: auto;
    margin-bottom: 50px;
  }

  .book__img {
    width: 100%;
    height: 320px;
  }

  .book__about {
    padding: 0;
    margin-top: 20px;
  }

  .book__name {
    font-size: 18px;
    margin-bottom: 0;
  }

  .book__author {
    font-size: 13px;
    margin-bottom: 40px;
  }

  .book__description {
    font-size: 17px;
  }
}
</style>