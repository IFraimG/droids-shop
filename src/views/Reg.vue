<template>
  <!-- РЕГИСТРАЦИЯ -->
  <div class="wrapper__form">
    <form class="form">
      <div class="form__top">
        <div class="form__title">DroidShop</div>
        <router-link class="form__link" to="/agree"
          >Условия соглашения</router-link
        >
      </div>
      <h1>Регистрация</h1>
      <div class="form__group">
        <input
          class="form__input inputLogin"
          type="text"
          v-model.trim="login"
          placeholder=" "
        />
        <label class="form__label">Login</label>
      </div>
      <div class="form__group">
        <input
          class="form__input inputEmail"
          type="email"
          v-model.trim="email"
          placeholder=" "
        />
        <label class="form__label">Email</label>
      </div>
      <div class="form__group">
        <input
          class="form__input inputPass"
          type="password"
          v-model.trim="password"
          placeholder=" "
        />
        <label class="form__label">Password</label>
        <p class="showPasword" @click="passShow">Показать пароль</p>
      </div>
      <button class="form__button" @click="sendInfo">Зарегистрироваться</button>
    </form>
    <!-- <router-link style="font-size: 32px;" :to="{name: 'Account', params: { user: idRandom }}">ТЕСТОВЫЙ ВХОД В АККАУНТ</router-link> -->
    <Login />
  </div>
</template>

<script>
import axios from "axios";
import Login from "../components/Login.vue";

export default {
  name: "Registration",
  components: {
    Login
  },
  data() {
    return {
      login: "".toLowerCase(),
      email: "".toLowerCase(),
      password: "",
      idRandom: Math.random().toString(28).substring(5)
    };
  },
  methods: {
    sendInfo() {
      // this.login = this.login.filter(x => x >= "A".charCodeAt() && x >= "z".charCodeAt())
      if (this.email.length > 8 && this.login.length > 5 && this.password.length > 5) {
        axios.post('/api/users/account',
        {name: this.login, email: this.email, password: this.password, id: this.idRandom})
        .catch(error => console.log(error.message))
        this.$router.push({ name: 'Account', params: { user: this.login } });
      }
      else if (this.login.length <= 5) alert('Имя должно содержать больше 5 символов')
      else if (this.password.length <= 5) alert('Пароль должен содержать больше 5 символов')
      else if (this.email.length <= 8) alert("Ваш email должен содержать больше 8 символов")
      else alert('Неверно указаны данные')
    },
    passShow() {
      let inputPass = document.querySelector(".inputPass");
      if (inputPass.type == "password") inputPass.type = "text";
      else inputPass.type = "password";
    },
  }
};
</script>

<style>
.wrapper__form {
  height: 550px;
  min-width: 1200px;
  margin-left: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.form {
  margin-top: 100px;
  width: 400px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px #ccc;
  letter-spacing: 1px;
}
.form h1 {
  text-align: center;
  margin-bottom: 32px;
  font-weight: normal;
}
.form__top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.form__link {
  font-size: 16px;
  color: #1a73a8;
}
.form__input,
.form__button {
  letter-spacing: 1px;
  border: none;
  font-size: 16px;
}
.form__group {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 32px;
}
.showPasword {
  display: flex;
  align-items: center;
  padding-left: 10px;
  white-space: nowrap;
  cursor: pointer;
  letter-spacing: 0;
  color: rgb(35, 144, 216);
  transition: 0.1s;
}
.showPasword:hover {
  color: rgb(16, 106, 167);
}
.showPasword:after {
  content: url("../assets/eye2.png");
  padding-left: 10px;
}
.form__label {
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  color: #9e9e9e;
  transition: 0.3s;
}
.form__input {
  width: 100%;
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  transition: 0.3s;
}
.form__input:focus {
  border-bottom: 1px solid #1a73a8;
}
.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown) ~ .form__label {
  top: -18px;
  font-size: 12px;
  opacity: 0.9;
}
.form__button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: rgb(141, 49, 216);
  transition: 0.3s ease-in-out;
}
.form__button:hover,
.form__button:focus {
  background-color: rgba(154, 52, 236, 0.9);
}
.form__button:active {
  background-color: rgb(104, 29, 165);
}
.form__title {
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
  border: none;
}
.form__title:before {
  content: url("../assets/droid.png");
}
</style>
