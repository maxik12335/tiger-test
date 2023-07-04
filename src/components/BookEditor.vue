<template>
  <div class="book__page">
    <ui-title>
      Редактировать книгу
      <span @click="back">назад</span>
    </ui-title>

    <div class="new__book">
      <ui-input
        class="input"
        type="text"
        placeholder="год"
        v-model="year"
      />
      <ui-input
        class="input"
        type="text"
        placeholder="цена"
        v-model="price"
      />
      <ui-input
        class="input"
        type="text"
        placeholder="название"
        v-model="title"
      />
      <ui-input
        class="input"
        type="text"
        placeholder="описание"
        v-model="description"
      />
      <ui-input
        class="input"
        type="text"
        placeholder="имя автора"
        v-model="first_name"
      />
      <ui-input
        class="input"
        type="text"
        placeholder="фамилия автора"
        v-model="last_name"
      />

      <div class="check__add__image">
        <h3 class="check__add__image__title">Добавить картинку</h3>
        <div class="check__add__image__buttons">
          <ui-button
            class="button"
            @click="checkedAddImage('file')"
          >Файл</ui-button>

          <ui-button
            class="button"
            @click="checkedAddImage('link')"
          >Ссылка</ui-button>
        </div>
      </div>

      <ui-input
        v-if="checkSrc === 'file'"
        class="input input__active"
        type="file"
        @change="setSrcFile($event)"
      />

      <ui-input
        v-if="checkSrc === 'link'"
        class="input input__active"
        v-model="src"
        type="text"
        placeholder="вставь ссылку картинки"
      />
    </div>

    <ui-button class="button" @click="editBook">
      Сохранить
    </ui-button>

  </div>  
</template>

<script setup>
import { useBooksStore } from "@/stores/BooksStore.js"
import { useRoute, useRouter } from "vue-router"
import UiButton from './UI/UiButton.vue'
import UiInput from './UI/UiInput.vue'
import UiTitle from './UI/UiTitle.vue'
import { ref } from "vue"

const router = useRouter()
const route = useRoute()

const id = ref(useBooksStore().getBook(Number(route.params.id))[0].id)
const year = ref(useBooksStore().getBook(Number(route.params.id))[0].year)
const price = ref(useBooksStore().getBook(Number(route.params.id))[0].price)
const title = ref(useBooksStore().getBook(Number(route.params.id))[0].title)
const description = ref(useBooksStore().getBook(Number(route.params.id))[0].description)
const first_name = ref(useBooksStore().getBook(Number(route.params.id))[0].first_name)
const last_name = ref(useBooksStore().getBook(Number(route.params.id))[0].last_name)
const src = ref(useBooksStore().getBook(Number(route.params.id))[0].src)
const checkSrc = ref("")

function checkedAddImage(value) {
  value === "file" ? checkSrc.value = "file" : checkSrc.value = "link"
}

function setSrcFile(event) {
  src.value = URL.createObjectURL(event.target.files[0])
}

function back() {
  router.push({name: "Books"})
}

function editBook() {
  if (!year.value || !price.value || !title.value || !description.value || !first_name.value || !last_name.value || !src.value) {
    alert("Заполните все поля");
    return;
  }

  const newBook = {
    id: id.value,
    year: year.value,
    price: price.value,
    title: title.value,
    description: description.value,
    first_name: first_name.value,
    last_name: last_name.value,
    src: src.value
  }     

  useBooksStore().editBook(newBook)
  router.push({name: "Books"})
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
}

.new__book {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: 10px;
  padding: 10px;
}

.button {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.5);
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background-color: grey;
  color: white;
}

.check__add__image {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #767676;
  border-radius: 2px;
  margin-bottom: 10px;
}

.check__add__image__title {
  margin-right: 50px;
  font-weight: 400;
  font-size: 18px;
}

.check__add__image__buttons {
  width: 250px;
  display: flex;
  justify-content: space-between;
}

.check__add__image__buttons button {
  padding: 10px 30px;
}

.input__active {
  margin-top: 10px;
}

@media (max-width: 756px) {
  .book__title {
    margin: 40px 0;
    font-size: 25px;
  } 

  .book__title span {
    left: 50%;
    top: -50%;
    transform: translate(-50%, -70%);
  }  

  .check__add__image {
    flex-direction: column;
  }

  .check__add__image__title {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .check__add__image__buttons {
    width: 100%;
  }
}
</style>