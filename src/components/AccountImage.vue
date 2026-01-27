<template>
  <!-- ИЗОБРАЖЕНИЕ В ЛИЧНОМ КАБИНЕТЕ -->
  <div>
    <div class="account__left">
      <div class="account__image"></div>
      <h1 class="account_edit">Редактировать</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountImage"
};
</script>
<style lang="scss">
.account__left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 300px;
  height: 400px;
  border: 1px solid rgb(165, 165, 165);
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  border-radius: 5px;
  .account__image {
    width: 250px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 3px;
    border: 1px solid rgb(165, 165, 165);
  }
  .account_edit {
    cursor: pointer;
    background-color: #e5ebf1;
    color: #55677d;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
      background-color: #dde2e7;
    }
  }
}
</style>
