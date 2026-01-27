<template>
    <div>
        <div class="aside">
            <div class="aside__block">
                <div class="aside__left">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis fugiat ad voluptates ut vero repudiandae aperiam ipsum, 
                    pariatur magni, eaque veniam, placeat atque! Atque aperiam quia, harum 
                    ipsum nostrum velit labore corrupti possimus unde nemo hic corporis sit 
                    tempore amet?</p>
                <button @click="location">Приобрести</button>
                </div>
                <div class="aside__right">
                <img src="../assets/java.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    location() {
      this.$router.push({name: "ListItems"})
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
    background-color: rgb(66, 79, 197);
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    .aside__block {
      display: flex;
      font-display: row;
      height: 400px;
      margin: 100px auto;
      width: 1200px;
      .aside__left {
        h1 {
          color: #fff;
          margin-top: 50px;
          margin-bottom: 50px;
          font-size: 42px;
        }
        p {
          color: rgb(226, 226, 226);
          font-size: 20px;
          line-height: 30px;
        }
        button {
          margin-top: 20px;
          cursor: pointer;
          padding: 15px 20px;
          font-size: 24px;
          border-radius: 10px;
          border: 2px solid rgb(76, 69, 139);
          color: #fff;
          font-weight: bold;
          background-color: rgb(101, 91, 184);
          transition: .3s ease-in-out;
          &:hover {
            background-color: rgb(123, 113, 219);
          }
          &:active {
            background-color: rgb(145, 134, 240);
          }
        }
      }
      .aside__right {
        img {
          width: 600px;
          height: 400px;
          margin-left: 50px;
        }
      }
    }
  }
</style>