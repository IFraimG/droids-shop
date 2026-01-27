<template>
  <div class="neon">
    <p>Добро пожаловать в магазин дроидов</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>
<style scoped>
.neon {
  animation: neonAnim 2s alternate-reverse infinite;
  color: #00a3e0;
  font-weight: 600;
  font-family: Bahnschrift;
  font-size: 48px;
}
@keyframes neonAnim {
  from {
    text-shadow: 0 0 10px rgba(0, 163, 224, 0.5),
      0 0 40px rgba(0, 163, 224, 0.5), 0 0 100px rgba(0, 163, 224, 0.5);
  }
  to {
    text-shadow: 0 0 5px rgba(0, 163, 224, 0.5), 0 0 20px rgba(0, 163, 224, 0.5),
      0 0 60px rgba(0, 163, 224, 0.5);
  }
}
</style>
