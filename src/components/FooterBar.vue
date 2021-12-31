<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-nav">
        <div class="footer-nav-logo">
          <router-link to="/">LOGO</router-link>
        </div>
        <div class="footer-nav-items">
          <router-link
            v-for="(item, i) in carFooter.navItems"
            :to="item.link"
            :key="i"
            >{{ item.text }}</router-link
          >
        </div>
      </div>
      <div class="footer-social">
        <div class="footer-social-link">
          <div v-for="(social, i) in carFooter.socials" :key="i">
            <a :href="social.link"><v-icon :name="social.name" /></a>
          </div>
        </div>
        <div class="footer-social-download">
          <div v-for="(d, i) in carFooter.downloads" :key="i">
            <a :href="d.link">
              <img :src="d.image" alt="" width="110" height="35" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copy-right">
        <div class="footer-copy-right-text">
          <p>{{ carFooter.copyRights.text.copyRight }}</p>
          <p>{{ carFooter.copyRights.text.reserved }}</p>
          <p v-for="(link, i) in carFooter.copyRights.link" :key="i">
            <a :href="link.link">{{ link.text }}</a>
          </p>
        </div>
        <div class="footer-copy-right-address">
          <p>{{ carFooter.copyRights.text.address }}</p>
        </div>
      </div>
    </div>
    <div class="footer-popular-makers">
      <div>
        <h2>Quote your favorite car</h2>
        <div>
          <p v-for="(car, i) in carFooter.favorite" :key="i">
            <router-link :to="car.link"> {{ car.name }}</router-link>
            <span v-if="i < carFooter.favorite.length - 1"> / </span>
          </p>
        </div>
        <span>
          Each offer may vary depending on the year, make, model, version,
          mileage and region where the vehicle is located. Our pricing algorithm
          feeds hundreds of variables, classifieds, auctions,
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  CarCopyRight,
  CarDownload,
  CarFavorite,
  CarNavItems,
  CarSocial,
} from "@/core";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "FooterBar",
  setup() {
    const carFooter = reactive({
      navItems: CarNavItems,
      socials: CarSocial,
      downloads: CarDownload,
      copyRights: CarCopyRight,
      favorite: CarFavorite,
    });
    return { carFooter };
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/style.scss";
a,
p,
span,
h2 {
  color: var(--white);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.footer {
  background-color: var(--black);
  > hr {
    width: 100vw;
  }
  &-container {
    width: 1170px;
    margin: 0 auto;
  }
  &-nav {
    display: flex;
    padding-top: 30px;

    &-logo {
      width: 30%;
      text-align: start;
      > a {
        font-size: 3rem;
      }
    }
    &-items {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      text-align: start;
      > a {
        padding: 0 12px 20px 0;
      }
    }
  }
  &-social {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    &-link {
      display: flex;
      > div {
        padding: 10px;
        background-color: var(--white);
        border-radius: 100px;
        margin-left: 10px;
        > a {
          color: var(--black);
          font-weight: bold;
        }
      }
    }
    &-download {
      display: flex;
      > div {
        margin-left: 10px;
      }
    }
  }
  &-copy-right {
    text-align: start;
    border-top: 1px solid var(--white);
    font-size: 14px;
    &-text {
      display: flex;
      > p {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }
  &-popular-makers {
    border-top: 1px solid var(--white);
    padding-bottom: 25px;
    > div {
      width: 1170px;
      margin: 0 auto;
      text-align: start;
      > div {
        display: flex;
        flex-wrap: wrap;
        font-weight: 300;
        p {
          margin-top: 0;
          font-size: 14px;
        }
      }
      > span {
        font-size: small;
      }
    }
  }
}
</style>
