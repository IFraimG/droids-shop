<template>
  <!-- РАЗДЕЛ ДЛЯ ГЛАВНОЙ -->
  <div class="section">
    <h1 class="section__title">
      Давно мечтал приобрести себе дроида, но не мог найти хороший магазин?
    </h1>
    <img
      class="section__image"
      src="../assets/Nebit_pointing_ANH.jpg"
      alt="Java)0)000)))"
      title="Togo togu!"
    />
  </div>
</template>

<script>
export default {
  name: "Section"
};
</script>

<style lang="scss" scoped>
.section {
  color: #fff;
  // background: url("../assets/76b7daafbdd0a3d279a6911e95f885a2.jpg") 50% / cover;
  background-color: rgb(218, 102, 7);
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
  margin-bottom: 50px;
  .section__image {
    height: 300px;
    width: 500px;
  }
  .section__title {
    min-width: 800px;
    width: 800px;
    font-size: 64px;
  }
}
</style>
