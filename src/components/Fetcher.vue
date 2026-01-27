<template>
  <div>
    <slot v-if="error" name="error">
      <h1 :title="error.message">Ошибка получения данных - 
        <span class="error">{{ error.message }}</span>
      </h1>
    </slot>
    <slot v-else-if="loading" name="loading"><h1>Загрузка данных</h1></slot>
    <slot v-else :data="servData"></slot>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Fetcher",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      servData: "",
      loading: true,
      error: false
    };
  },
  created() {
    axios
      .get(this.url)
      .then(response => {
        this.loading = false;
        this.servData = response.data;
      })
      .catch(err => {
        this.error = err;
        this.servData = null;
      });
  },
};
</script>
<style lang="scss" scoped>
.error {
  font-weight: bold;
  color: rgb(155, 61, 61);
}
</style>
