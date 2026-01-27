<template>
  <!-- АККАУНТ -->
  <div @mouseover="loadInfo">
    <div class="wrapper">
      <div class="account__top">
        <AccountImage />
        <div class="account__right" @mouseover="openInfo">
          <div class="account__right__names">
            <h1 class="account__name">Имя</h1>
            <h1 class="account__lastname">Фамилия</h1>
            <h3 class="account__email">( testemail@gmail.com )</h3>
          </div>
          <div class="account__right__info">
            <ul class="account__stats">
              <li>
                <span>Статус: </span>
                <input
                  v-show="isTrue"
                  v-model="status"
                  class="account__input"
                  type="text"
                  placeholder="Добавить информацию"
                />
                <p v-if="isTrue == false">{{ status }}</p>
              </li>
              <li>
                <span>Телефон: </span>
                <input
                  v-show="isTrue"
                  v-model.trim="phone"
                  class="account__input"
                  type="text"
                  placeholder="Добавить информацию"
                />
                <p v-if="isTrue == false">{{ phone }}</p>
              </li>
              <li>
                <span>Возраст: </span>
                <input
                  v-show="isTrue"
                  v-model="age"
                  class="account__input"
                  type="text"
                  placeholder="Добавить информацию"
                />
                <p v-if="isTrue == false">{{ age }}</p>
              </li>
              <li>
                <span>Дополнительная информация: </span>
                <textarea
                  v-show="isTrue"
                  v-model="information"
                  class="account__field"
                  cols="50"
                  rows="10"
                  placeholder="Добавить сведения"
                ></textarea>
                <p class="account__text" v-if="isTrue == false">
                  {{ information }}
                </p>
              </li>
              <p
                v-show="isTrue"
                @click="isTrue = false"
                class="account__save account_edit"
              >
                Сохранить
              </p>
              <p
                v-if="isTrue == false"
                @click="isTrue = true"
                class="account__save account_edit"
              >
                Редактировать
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div class="account__middle" @mouseover="open = true">
        <div class="account__middle__inner">
          <StatsVirus />
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatsVirus from "../components/StatsVirus.vue";
import AccountImage from "../components/AccountImage.vue";
import Cart from "../components/Cart.vue";
import axios from "axios";

export default {
  name: "Account",
  components: {
    StatsVirus,
    AccountImage,
    Cart
  },
  data() {
    return {
      isId: false,
      status: "",
      phone: "",
      age: "",
      information: "",
      isTrue: true,
      open: false,
      dataDB: "",
    };
  },
  methods: {
    loadInfo() {
      this.$store.dispatch(
        "loadData",
        "https://coronavirus-19-api.herokuapp.com/all"
      );
      this.$store.dispatch(
        "loadData",
        "https://coronavirus-19-api.herokuapp.com/countries/Russia"
      );
    },
    openInfo() {
      this.open = true;
      this.$store.commit("openInfo", this.open);
    },
    loadData() {
      axios
        .get("/api/users/account")
        .then((response) => {
          this.dataDB = response.data;
          console.log(this.dataDB);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  width: 1170px;
  min-height: 600px;
  .account__top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .account__right {
      overflow: hidden;
      width: 700px;
      min-height: 400px;
      border: 1px solid rgb(165, 165, 165);
      box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
      border-radius: 5px;
      margin-top: 50px;
      margin-bottom: 50px;
      .account__right__names {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        padding: 20px;
        border-bottom: 1px solid rgb(165, 165, 165);
        .account__name {
          margin-left: 20px;
        }
        .account__lastname {
          margin-left: 20px;
        }
        .account__email {
          margin-left: 40px;
          color: rgb(99, 99, 99);
        }
      }
      .account__right__info {
        .account__stats {
          list-style: none;
          padding: 30px;
          li {
            display: flex;
            flex-direction: row;
            margin-bottom: 30px;
            border-bottom: 1px solid rgb(165, 165, 165);
            padding-bottom: 20px;
            line-height: 30px;
            font-size: 20px;
            color: rgb(100, 100, 100);
            span {
              color: #000;
              padding-right: 20px;
              padding-bottom: 10px;
            }
            .account__input {
              width: 200px;
              height: 30px;
              padding-left: 5px;
              transition: 0.3s ease-in-out;
              border: 1px solid rgb(192, 192, 192);
              &:focus {
                border: 1px solid transparent;
                box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09),
                  0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09),
                  0 16px 8px rgba(0, 0, 0, 0.09),
                  0 32px 16px rgba(0, 0, 0, 0.09);
              }
            }
            .account__field {
              overflow: hidden;
              resize: none;
              padding: 10px;
              transition: 0.3s ease-in-out;
              border: 1px solid rgb(192, 192, 192);
              &:focus {
                border: 1px solid transparent;
                box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09),
                  0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09),
                  0 16px 8px rgba(0, 0, 0, 0.09),
                  0 32px 16px rgba(0, 0, 0, 0.09);
              }
            }
          }
          .account__save {
            width: 140px;
            margin-left: 420px;
            transition: 0.3s ease-in;
            font-weight: bold;
            text-align: center;
            &:hover,
            &:active {
              color: rgb(37, 95, 221);
            }
          }
          .account_edit {
            cursor: pointer;
            background-color: #e5ebf1;
            color: #55677d;
            font-size: 20px;
            padding: 10px 25px;
            border-radius: 5px;
            transition: 0.2s;
          }
          .account_edit:hover {
            background-color: #dde2e7;
          }
        }
      }
    }
  }
}
</style>
