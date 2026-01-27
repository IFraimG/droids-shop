<template>
  <div>
    <transition name="magicStats">
      <div class="account__virus" v-show="$store.state.open">
        <h1>Статистика коронавируса</h1>
        <div class="account__btns">
          <h2 @click="isTrue = false">World</h2>
          <h2 @click="isTrue = true">Russia</h2>
        </div>
        <div class="account__block account__block__one" v-if="isTrue == false">
          <h2>{{ $store.state.dataInfo.cases }} человек заболело</h2>
          <h2>{{ $store.state.dataInfo.deaths }} человек умерло</h2>
          <h2>{{ $store.state.dataInfo.recovered }} человек выздоровело</h2>
        </div>
        <div class="account__block account__block__one" v-else>
          <h2>{{ $store.state.dataInfoRu.cases }} человек заболело</h2>
          <h2>{{ $store.state.dataInfoRu.deaths }} человек умерло</h2>
          <h2>{{ $store.state.dataInfoRu.recovered }} человек выздоровело</h2>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "StatsVirus",
  data() {
    return {
      isTrue: false
    };
  }
};
</script>
<style lang="scss">
.account__virus {
  user-select: none;
  width: 1170px;
  height: 460px;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(170, 55, 55);
  border: 10px solid rgb(100, 11, 11);
  border-radius: 12px;
  h1 {
    position: relative;
    color: #fff;
    font-size: 40px;
    margin-top: 30px;
    padding: 3px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-decoration: none;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: 0.4s;
    }
    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }
  }
  h2 {
    line-height: 70px;
    font-size: 32px;
    color: #fff;
  }
  .account__btns {
    display: flex;
    flex-direction: row;
    h2 {
      margin-left: 30px;
      cursor: pointer;
    }
  }
  .account__block__one {
    padding: 15px;
    border: 2px solid #fff;
  }
}
.magicStats-enter-active,
.magicStats-leave-active {
  transition: 3s;
}
.magicStats-enter,
.magicStats-leave {
  opacity: 0;
}
</style>
