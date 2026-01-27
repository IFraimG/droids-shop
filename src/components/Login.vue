<template>
  <div>
    <form class="form form__login">
      <div class="form__top">
        <div class="form__title">DroidShop</div>
      </div>
      <h1>Войти</h1>
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
          class="form__input inputLoginPass"
          type="password"
          v-model.trim="password"
          placeholder=" "
        />
        <label class="form__label">Password</label>
        <p class="showPasword" @click="passShow">Показать пароль</p>
      </div>
      <button class="form__button" @click="sendLogin">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: "".toLowerCase(),
      password: ""
    }
  },
  methods: {
    passShow() {
      let inputPass = document.querySelector(".inputLoginPass");
      if (inputPass.type == "password") inputPass.type = "text";
      else inputPass.type = "password";
    },
    sendLogin() {
      alert("Функция еще не добавлена. Ожидайте.")
    }
  }
};
</script>

<style lang="scss" scoped>
.form__login {
  margin-left: 200px;
}
</style>
