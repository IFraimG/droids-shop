<template>
  <div class="home">
    <HelloWorld class="title" />
    <Section />
    <Cards />
    <Aside />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Cards from "@/components/Cards.vue";
import Section from "@/components/Section.vue";
import Aside from "@/components/Aside.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Cards,
    Section,
    Aside,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.home {
  min-width: 1200px;
  .title {
    margin-top: 20px;
    margin-left: 300px;
    margin-bottom: 50px;
  }
}
</style>
