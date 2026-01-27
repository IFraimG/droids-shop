<template>
  <!-- СТРАНИЦА С КОНТАКТАМИ -->
  <div class="about">
    <Fetcher url="/testfile.json">
      <template v-slot="{ data }">
        <h2>список товаров</h2>
        <div v-for="item in data" :key="item.title">
          {{ item.title }}
        </div>
      </template>
    </Fetcher>
    <div class="button">Приобрести</div>
    <button class="fill">Отправить</button>
  </div>
</template>

<script>
import Fetcher from "../components/Fetcher.vue";
export default {
  name: "About",
  components: {
    Fetcher
  },
};
</script>

<style lang="scss" scoped>
$yellow: #fbca67;
$red: #f45e61;

.button {
  width: 130px;
  margin: 10px;
  padding: 20px;
  border: 2px solid $yellow;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: $yellow;
    height: 120%;
    left: -10%;
    transform: skewX(15deg);
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:after {
      width: 100%;
      left: -10%;
      width: 120%;
    }
  }
}
.fill {
  background: none;
  border: 2px solid #a972cb;
  font-size: inherit;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0.5em;
  padding: 1em 2em;
  color: #a972cb;
  transition: 0.25s;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em adjust-hue(#a972cb, 45deg);
    border-color: adjust-hue(#a972cb, 45deg);
    color: #fff;
  }
}
</style>
