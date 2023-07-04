import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useBooksStore = defineStore("booksStore", () => {
  const books = ref([
    {
      id: 1,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 5,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 6,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
    {
      id: 7,
      src: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1060&t=st=1688397896~exp=1688398496~hmac=8e0bef2928f3c7ea83416034c63b82b8e8285a18bbd509fd8b7bfe0974e0c8e1",
      year: 2021,
      price: 283,
      title: "Клиника: анатомия жизни",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, facilis nobis unde itaque quam culpa dolores dicta quibusdam neque tenetur, adipisci excepturi amet. Est, blanditiis eveniet sit nam labore consequatur",
      first_name: "Артур",
      last_name: "Хейли",
    },
  ])

  const getBook = computed(() => {
    return (id) => books.value.filter(book => book.id === id)
  })

  const deleteBook = (id) => {  
    books.value = books.value.filter(book => book.id != id)
  }

  const createBook = (newBook) => {
    books.value = [...books.value, newBook]
  }

  const editBook = (newBook) => {
    books.value = [...books.value.map(
      book => book.id === newBook.id ? {...newBook} : book
    )]
  }

  return {books, getBook, deleteBook, createBook, editBook}
})
