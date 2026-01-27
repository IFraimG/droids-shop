<template>
  <!-- ВИДЫ ТОВАРОВ -->
  <div>
    <HelloWorld class="title"></HelloWorld>
    <div class="items">
      <div class="item" v-for="item in $store.state.items" :key="item.title">
        <router-link :to="{ name: 'ShopItem', params: { title: item.title } }">
          <h1>{{ item.title }}</h1>
          <img class="image" :src="item.image" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "ListItem",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 20px;
  text-align: center;
}

.items {
  min-width: 1200px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  .item {
    background-color: #fff;
    user-select: none;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-width: 33%;
    height: 400px;
    border: 1px solid #000;
    transition: 0.1s ease-in;
    margin-bottom: 50px;
    &:hover {
      transform: scale(1.1);
      border-color: transparent;
      background-color: rgb(82, 223, 181);
      box-shadow: 0 2.8px 28.9px rgba(0, 0, 0, 0.069),
        0 6.7px 44.1px rgba(0, 0, 0, 0.097),
        0 12.5px 50.9px rgba(0, 0, 0, 0.114),
        0 22.3px 54.1px rgba(0, 0, 0, 0.13),
        0 41.8px 60.1px rgba(0, 0, 0, 0.154), 0 100px 80px rgba(0, 0, 0, 0.21);
      h1 {
        color: #fff;
      }
    }
    h1 {
      margin-top: 20px;
      color: #000;
      text-align: center;
    }
    .image {
      max-width: 250px;
      height: 300px;
      margin-top: 30px;
    }
  }
}
</style>
