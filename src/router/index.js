import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ShopItemsDescription from "../views/ShopItemsDescription.vue";
import ListItem from "../views/Items.vue";
import Registration from "../views/Reg.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/list",
    name: "ListItems",
    component: ListItem
  },
  {
    path: "/items/:title",
    name: "ShopItem",
    component: ShopItemsDescription
  },
  {
    path: "/reg",
    name: "Registration",
    component: Registration
  },
  {
    path: "/account/:user",
    name: "Account",
    component: Account
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
