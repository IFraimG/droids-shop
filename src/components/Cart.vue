<template>
  <div>
    <div @click="cartOpen" class="cart__open"></div>
    <transition name="modal">
      <div v-show="isTrue" class="cart">
        <h1 class="title modal-header">Корзина</h1>
        <div class="wrapper" v-if="dataDB.length > 0">
          <div v-for="(myItem, index) in dataDB" :key="index">
            <div class="cart__title">
              <h2 class="cart__stats">
                <span>{{ myItem.title }}</span
                >, <span>{{ myItem.count }}</span
                >шт,
                <span :price="myItem.price">{{ myItem.price }}</span>
                <span>кредитов</span>
              </h2>
              <button
                class="btn btnPlus"
                @click="plus(myItem)"
              >
                +
              </button>
              <button
                class="btn btnMinus"
                @click="minus(myItem)"
              >
                -
              </button>
              <button class="btn btnDelete">
                Del
              </button>
            </div>
          </div>
        </div>
        <div class="notFound" v-else>Товаров не найдено!</div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      isTrue: false,
      dataDB: ''
    };
  },
  methods: {
    cartOpen() {
      this.isTrue = !this.isTrue;
      axios.get('/api/items')
      .then(res => {
        this.dataDB = res.data
      })
    },
    plus(myItem) {
      myItem.count += 1;
      if (myItem.count >= 99) myItem.count = 99;
      axios.get('/api/items/count_plus', {params: {id: myItem._id}})
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
    },
    minus(myItem) {
      myItem.count -= 1;
      if (myItem.count == 0) myItem.count = 1;
      axios.get('/api/items/count_minus', {params: {id: myItem._id}})
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
    }
  }
};
</script>
<style lang="scss" scoped>
$shadow: 0 8.6px 6.3px rgba(0, 0, 0, 0.073),
  0 12.1px 15.2px rgba(0, 0, 0, 0.101), 0 15.8px 28.7px rgba(0, 0, 0, 0.118),
  0 23.4px 51.2px rgba(0, 0, 0, 0.132), 0 41.2px 95.7px rgba(0, 0, 0, 0.151),
  0 123px 229px rgba(0, 0, 0, 0.2);
$color-button: rgb(92, 25, 180);
$color-border: rgb(165, 165, 165);

.cart__open {
  background: url("../assets/smart-cart.png") 50% / cover no-repeat;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  width: 64px;
  height: 64px;
  border: 5px solid rgb(204, 50, 50);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
}
.cart {
  position: absolute;
  min-width: 520px;
  min-height: 600px;
  box-shadow: $shadow;
  border-radius: 5px;
  background-color: #fff;
  left: 500px;
  top: 100px;
  margin-bottom: 20px;
  .cart__title {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $color-border;
    font-weight: normal;
  }
  .title {
    text-align: center;
    padding-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px solid $color-border;
  }
  .btn {
    margin-left: 10px;
    width: 50px;
    font-size: 24px;
    background-color: $color-button;
    color: #fff;
    border: 1px solid $color-button;
    border-radius: 5px;
    cursor: pointer;
    &:active {
      background-color: rgb(119, 42, 221);
    }
  }
  .notFound {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid $color-border;
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
