<template>
  <!-- КАРТОЧКИ -->
  <div class="main">
    <div class="cart" v-on:mouseover.once="addView(0)">
      <div class="cart__title">{{ title }}</div>
      <div class="cart__image img1"></div>
      <div class="cart__text">{{ cards[0].text }}</div>
      <div class="cart__description">{{ cards[0].description }}</div>
      <div class="cart__button" @click="location">Приобрести</div>
      <div class="cart__stats">
        <div class="cart__view">{{ cards[0].view }} views</div>
        <div class="cart__likes" v-on:click.once="likeAdd(0)">
          {{ cards[0].like }} likes
        </div>
      </div>
    </div>
    <div class="cart" v-on:mouseover.once="addView(1)">
      <div class="cart__title">{{ title }}</div>
      <div class="cart__image img2"></div>
      <div class="cart__text">{{ cards[1].text }}</div>
      <div class="cart__description">{{ cards[1].description }}</div>
      <div style="margin-top: 70px;" class="cart__button" @click="location">
        Приобрести
      </div>
      <div class="cart__stats">
        <div class="cart__view">{{ cards[1].view }} views</div>
        <div class="cart__likes" v-on:click.once="likeAdd(1)">
          {{ cards[1].like }} likes
        </div>
      </div>
    </div>
    <div class="cart" v-on:mouseover.once="addView(2)">
      <div class="cart__title">{{ title }}</div>
      <div class="cart__image img3"></div>
      <div class="cart__text">{{ cards[2].text }}</div>
      <div class="cart__description">{{ cards[2].description }}</div>
      <div class="cart__button" @click="location">Приобрести</div>
      <div class="cart__stats">
        <div class="cart__view">{{ cards[2].view }} views</div>
        <div class="cart__likes" v-on:click.once="likeAdd(2)">
          {{ cards[2].like }} likes
        </div>
      </div>
    </div>
    <div class="cart" v-on:mouseover.once="addView(3)">
      <div class="cart__title">{{ title }}</div>
      <div class="cart__image img5"></div>
      <div class="cart__text">{{ cards[3].text }}</div>
      <div class="cart__description">{{ cards[3].description }}</div>
      <div class="cart__button" style="margin-top: 60px;" @click="location">
        Приобрести
      </div>
      <div class="cart__stats">
        <div class="cart__view">{{ cards[3].view }} views</div>
        <div class="cart__likes" v-on:click.once="likeAdd(3)">
          {{ cards[3].like }} likes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Cards",
  data() {
    return {
      title: "DroidShop",
      cards: [
        {
          text: "Настоящие недорогие дроиды",
          description:
            "Наши дроиды оснащены новым оборудованием, не позволяющим быстро изнашиваться.",
          view: 0,
          like: 0,
        },
        {
          text: "Скидка 20%",
          description:
            "Наших боевых дроидов можно купить по скидке в 20%. Гарантия на 2 года.",
          view: 0,
          like: 0,
        },
        {
          text: "Настоящие недорогие дроиды",
          description:
            "Наши дроиды оснащены новым оборудованием, не позволяющим быстро изнашиваться.",
          view: 0,
          like: 0,
        },
        {
          text: "При покупки трех дроидов",
          description: "Оглушённую дубинку дарим в подарок.",
          view: 0,
          like: 0,
        },
      ],
    };
  },
  methods: {
    addView(index) {
      setTimeout(() => {
        this.cards[index].view += 1;
        // axios.get("/api/likes/create_likes", {params: {this.c}})
        //   .then((response) => {
        //     this.dataDB = response.data;
        //     console.log(this.dataDB.views)
        //   })
        //   .catch((error) => console.log(error));
      }, 4000);
    },
    likeAdd(index) {
      this.cards[index].like += 1
      console.log(this.cards[index].like._id)
    },
    location() {
      this.$router.push({ name: "ListItems" });
    },
  },
};
</script>
<style lang="scss" scoped>
$shadow:  0 4.9px 2.4px rgba(0, 0, 0, 0.048),
  0 10.4px 5.7px rgba(0, 0, 0, 0.067),
  0 17.4px 10.8px rgba(0, 0, 0, 0.078),
  0 27.6px 19.2px rgba(0, 0, 0, 0.088),
  0 47.4px 35.9px rgba(0, 0, 0, 0.102),
  0 113px 86px rgba(0, 0, 0, 0.15);
.main {
  user-select: none;
  min-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 100px;
  height: 550px;
  padding: 20px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
  background-color: rgb(190, 192, 72);
  .cart {
    cursor: pointer;
    min-width: 19%;
    margin-left: 10px;
    border: 1px solid #000;
    min-height: 500px;
    height: 520px;
    background: #9a3fd5;
    opacity: 0.8;
    color: #fff;
    transition: 1s box-shadow ease-in-out;
    transition: 0.5s transform ease-in-out;
    &:nth-child(1) {
      background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    }
    &:nth-child(3) {
      background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      transform: scale(1.1);
      border-color: transparent;
      // transform: skew(2deg, 0deg);
      // box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
      box-shadow: $shadow;
    }
    .cart__title {
      font-weight: bold;
      font-size: 32px;
      margin-left: 10px;
      margin-top: 10px;
      margin-bottom: 30px;
      &:before {
        content: url("@/assets/droid.png");
      }
    }
    .cart__image {
      background-color: #000;
      margin-left: 20px;
      width: 250px;
      border: 3px solid #fff;
      margin-bottom: 10px;
      height: 150px;
      background: url("@/assets/shaxt_keccel.png") 50% / cover;
    }
    .cart__text {
      margin-left: 20px;
      font-size: 26px;
      width: 250px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .cart__description {
      font-size: 16px;
      margin-left: 20px;
      margin-bottom: 20px;
      width: 250px;
    }
    .cart__button {
      user-select: none;
      width: 150px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
      margin-left: 20px;
      cursor: pointer;
      height: 40px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #fff;
        border-color: #9a3fd5;
        color: #9a3fd5;
      }
    }
    .cart__stats {
      margin-top: 20px;
      height: 45px;
      border-top: 2px solid #000;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .cart__view {
        font-size: 16px;
        height: 30px;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        &:before {
          content: url("@/assets/eye.png");
          padding-right: 5px;
        }
      }
      .cart__likes {
        display: flex;
        align-items: center;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
        &:before {
          content: url("@/assets/like.png");
          padding-right: 5px;
        }
      }
    }
  }
}
</style>
