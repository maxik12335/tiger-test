<template>
  <div class="book__page">
    <ui-title>
      Создать книгу
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

    <ui-button class="button" @click="createBook">
      Создать книгу
    </ui-button>

  </div>  
</template>

<script>
import { useBooksStore } from "@/stores/BooksStore.js"
import UiInput from './UI/UiInput.vue'
import UiButton from './UI/UiButton.vue'
import UiTitle from './UI/UiTitle.vue'
export default {
  components: { UiInput, UiButton, UiTitle },
  
  data() {
    return {
      year: null,
      price: null,
      title: null,
      description: null,
      first_name: null,
      last_name: null,
      src: null,
      checkSrc: String
    }
  },  

  methods: {
    setSrcFile(event) {
      this.src = URL.createObjectURL(event.target.files[0])
    },

    checkedAddImage(value) {
      value === "file" ? this.checkSrc = "file" : this.checkSrc = "link"
    },

    back() {
      this.$router.push({name: "Books"})
    },  

    createBook() {
      if(this.year === null || this.year === "") {
        alert("Заполните все поля")
        return
      }

      if(this.price === null || this.price === "") {
        alert("Заполните все поля")
        return
      }

      if(this.title === null || this.title === "") {
        alert("Заполните все поля")
        return
      }

      if(this.description === null || this.description === "") {
        alert("Заполните все поля")
        return
      }

      if(this.first_name === null || this.first_name === "") {
        alert("Заполните все поля")
        return
      }

      if(this.last_name === null || this.last_name === "") {
        alert("Заполните все поля")
        return
      }

      if(this.src === null || this.src === "") {
        alert("Заполните все поля")
        return
      }

      const newBook = {
        id: Date.now(),
        year: this.year,
        price: this.price,
        title: this.title,
        description: this.description,
        first_name: this.first_name,
        last_name: this.last_name,
        src: this.src
      }      

      useBooksStore().createBook(newBook)
      this.$router.push({name: "Books"})
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
    font-size: 30px;
  } 

  .book__title span {
    left: 50%;
    top: -50%;
    transform: translate(-50%, -50%);
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