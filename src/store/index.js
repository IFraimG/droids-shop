import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // виды товаров
    items: [
      {
        title: "R2-D2",
        count: 1,
        price: 1999,
        type: "Дроид-астромеханик",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, delectus.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/1/1a/R2d2.jpg/revision/latest?cb=20120924084739"
      },
      {
        title: "BB-9E",
        count: 1,
        price: 3500,
        type: "Дроид-астромеханик Первого Ордена",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, delectus.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/0/05/BB-9E_Fathead.png/revision/latest?cb=20170903094937"
      },
      {
        title: "BB-8",
        count: 1,
        price: 4000,
        type: "Дроид-астромеханик",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, delectus.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/6/68/BB8-Fathead.png/revision/latest/scale-to-width-down/500?cb=20150908062043"
      },
      {
        title: "C-3PO",
        count: 1,
        price: 10000,
        type: "Протокольный дроид",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, delectus.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest/scale-to-width-down/500?cb=20180306071015"
      },
      {
        title: "C1-10P",
        count: 1,
        price: 6000,
        type: "Дроид-астромеханик",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, delectus.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/a/a6/Chopper.png/revision/latest/scale-to-width-down/500?cb=20180110060503"
      },
      {
        title: "R5",
        count: 1,
        price: 6000,
        type: "Дроид-астромеханик",
        text:
          " разновидность дроидов-астромехаников серии R производимых компанией - Промышленные автоматы.",
        image:
          "https://vignette.wikia.nocookie.net/ru.starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest/scale-to-width-down/500?cb=20170324065206"
      }
    ],
    dataInfo: "",
    dataInfoRu: "",
    open: false
  },
  mutations: {
    // Статистика мировая
    SaveData(state, data) {
      state.dataInfo = data;
    },
    // Статистика в России
    SaveDataRu(state, data) {
      state.dataInfoRu = data;
    },
    openInfo(state, isOpen) {
      state.open = isOpen;
    }
  },
  actions: {
    loadData({ commit }) {
      axios.get("https://coronavirus-19-api.herokuapp.com/all").then(res => commit("SaveData", res.data));
      axios.get("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(res => commit("SaveDataRu", res.data));
    }
  },
  modules: {}
});
