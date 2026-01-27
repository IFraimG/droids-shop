<template>
    <div>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__left">
            <ul>
                <li><router-link class="link" to="/agree">Условия соглашения</router-link></li>
                <li><router-link class="link" :to="{name: 'About'}">Контакты</router-link></li>
                <li><router-link class="link" :to="{name: 'Registration'}">Вход</router-link></li>
                <li><router-link class="link" :to="{name: 'Registration'}">Регистрация</router-link></li>
            </ul>
            </div>
            <div class="footer__middle">
            <ul>
                <li><router-link class="link" to="reputation">Отзывы</router-link></li>
                <li><router-link class="link" to="/donate">Пожертвовать</router-link></li>
                <li><router-link class="link" :to="{name: 'ListItems'}">Приобрести</router-link></li>
                <li><router-link class="link" :to="{name: 'ListItems'}">Instagram</router-link></li>
            </ul>
            </div>
            <div class="footer__right">
            <ul>
                <li><router-link class="link" :to="{name: 'ListItems'}">Vkontakte</router-link></li>
                <li><router-link class="link" :to="{name: 'ListItems'}">GitHub</router-link></li>
                <li><router-link class="link" :to="{name: 'ListItems'}">Telegramm</router-link></li>
                <li><router-link class="link" :to="{name: 'ListItems'}">Twitter</router-link></li>
            </ul>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    background: linear-gradient(
    90deg,
    rgba(38, 38, 43, 1) 2%,
    rgba(65, 63, 63, 1) 36%,
    rgba(31, 28, 28, 1) 100%);
    .footer__inner {
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      ul {
        list-style: none;
        li {
          font-size: 20px;
          margin-bottom: 15px;
          &:first-child {
            margin-top: 15px;
          }
          .link {
            color: #fff;
            transition: .2s ease-in-out;
            &:hover {
              opacity: .6;
            }
          }
        }
      }
    }
  }
</style>