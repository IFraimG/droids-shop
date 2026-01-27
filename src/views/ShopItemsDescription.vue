<template>
  <!-- ШАБЛОН ТОВАРА -->
  <div>
    <div class="wrapper" v-if="shopItem">
      <div class="info">
        <div class="info__left">
          <h1 class="info__title" :title="shopItem.title">
            {{ shopItem.title }}
          </h1>
          <h2 class="info__type"><span>Модель: </span>{{ shopItem.type }}</h2>
          <div class="info__price">
            <span>Цена: </span
            ><span :price="shopItem.price">{{ shopItem.price }}</span> кредитов
          </div>
          <div class="info__text">
            <span>Описание: </span>{{ shopItem.text }}
          </div>
          <div class="info__button">
            <button class="btn" v-on:click="buy">Приобрести</button>
            <h2 v-show="isOkey">Успешно!!</h2>
            <router-link class="info__return" :to="{ name: 'ListItems' }"
              >Вернуться</router-link
            >
          </div>
        </div>
        <div class="info__right">
          <img class="info__image" :src="shopItem.image" />
          <Cart />
        </div>
      </div>
    </div>
    <div class="undefined" v-else>
      <h1>Товар не найден!</h1>
      <router-link class="link" :to="{ name: 'Home' }"
        >Вернитесь на главную</router-link
      >
    </div>
  </div>
</template>
<script>
import Cart from "../components/Cart.vue";
import axios from "axios";
export default {
  name: "ShopItem",
  components: {
    Cart
  },
  data() {
    return {
      isOkey: false
    };
  },
  computed: {
    // поиск пути
    shopItem() {
      return this.$store.state.items.find((x) => x.title === this.$route.params.title);
    }
  },
  methods: {
    buy() {
      this.isOkey = true;
      setTimeout(() => (this.isOkey = false), 1500);
      axios.get('/api/items/create_item', 
      { params: 
        {
          title: this.shopItem.title, 
          price: this.shopItem.price, 
          count: this.shopItem.count
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$shadow: 0 8.6px 6.3px rgba(0, 0, 0, 0.073),
  0 12.1px 15.2px rgba(0, 0, 0, 0.101), 0 15.8px 28.7px rgba(0, 0, 0, 0.118),
  0 23.4px 51.2px rgba(0, 0, 0, 0.132), 0 41.2px 95.7px rgba(0, 0, 0, 0.151),
  0 123px 229px rgba(0, 0, 0, 0.2);
@mixin spanBold {
  span {
    font-weight: bold;
    font-size: 24px;
  }
}
.wrapper {
  min-width: 1300px;
  .info {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .info__left {
      padding: 20px;
      min-height: 400px;
      width: 800px;
      border-radius: 10px;
      box-shadow: $shadow;
      .info__title {
        font-size: 84px;
        margin-bottom: 30px;
        border-bottom: 1px solid #000;
      }
      .info__type {
        font-weight: normal;
        margin-bottom: 30px;
        @include spanBold;
      }
      .info__price {
        margin-bottom: 30px;
        font-size: 24px;
        @include spanBold;
      }
      .info__text {
        font-size: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid #000;
        @include spanBold;
      }
      .info__button {
        .btn {
          width: 170px;
          height: 70px;
          font-size: 24px;
          margin-top: 50px;
          border-radius: 10px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          border: 3px solid rgb(95, 12, 143);
          background-color: rgb(141, 32, 204);
          transition: 0.3s ease-in-out;
          &:hover {
            transform: scale(1.1);
            // color: rgb(95, 12, 143);
            background-color: rgb(123, 29, 177);
          }
          &:active {
            transform: scale(1.1);
            background-color: rgb(140, 16, 212);
          }
        }
        h2 {
          position: absolute;
          left: 380px;
          top: 520px;
          font-size: 32px;
          color: rgb(18, 156, 37);
        }
        .info__return {
          user-select: none;
          border: 2px solid #000;
          border-radius: 10px;
          color: #000;
          font-weight: bold;
          font-size: 32px;
          margin-left: 400px;
          padding: 15px;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #fff;
            background-color: #000;
          }
        }
      }
    }
    .info__right {
      .info__image {
        width: 400px;
        min-height: 500px;
        max-height: 550px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: $shadow;
      }
    }
  }
}
.undefined {
  margin-top: 100px;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}
.link {
  font-size: 44px;
  color: rgb(102, 57, 185);
}
</style>
