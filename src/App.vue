<template>
  <div id="app" class="block">
    <div id="nav" class="header">
      <router-link class="link" to="/">Главная страница</router-link>
      <router-link class="link" :to="{ name: 'ListItems' }">Склад</router-link>
      <router-link class="link" :to="{ name: 'About' }">Контакты</router-link>
      <router-link class="link" :to="{ name: 'Registration' }">Авторизация</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      dataAppDB: ""
    }
  },
  methods: {
    loadAppData() {
      axios.post('/api/account').then(response => {
        this.dataAppDB = response.data
        console.log(this.dataAppDB)
      })
    }
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", Verdana;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  color: rgb(104, 79, 212);
}
:focus {
  outline: none;
}
button,
video,
img {
  user-select: none;
}
a {
  text-decoration: none;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 1200px;
  background: rgb(38, 38, 43);
  background: linear-gradient(
    90deg,
    rgba(38, 38, 43, 1) 2%,
    rgba(65, 63, 63, 1) 36%,
    rgba(31, 28, 28, 1) 100%
  );
  height: 80px;
  .link {
    position: relative;
    user-select: none;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    padding: 3px;
    text-decoration: none;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background: rgb(255, 255, 255);
      visibility: hidden;
      transform: scaleX(0);
      transition: 0.4s;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
</style>
