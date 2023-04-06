<template>
  <!-- SEEN -->
  <div class="home-seen">
    <div class="wrapper">
      <div class="home-seen__inner">
        <h1 class="title home-seen-title">as seen</h1>
        <div class="home-seen__partners">
          <div
            class="home-seen-partner"
            v-for="(imageName, i) of images"
            :key="i"
          >
            <img :src="require(`@/assets/asseen/${imageName}.png`)" alt="" />
          </div>
        </div>
        <!-- <div class="home-seen__slider-wrapper">
          <div v-if="images.length > 4">
            <div class="slider-arrow left">
              <img
                src="@/assets/icons/arrow.svg"
                alt=""
                @click="seenSwiper.slidePrev()"
              />
            </div>
            <div class="slider-arrow right">
              <img
                src="@/assets/icons/arrow.svg"
                alt=""
                @click="seenSwiper.slideNext()"
              />
            </div>
          </div>
          <swiper
            class="home-seen__slider"
            :modules="modules"
            :slides-per-view="4"
            :spaceBetween="10"
            :pagination="{ clickable: true }"
            @swiper="onSeenSwiper"
          >
            <swiper-slide
              class="home-seen__slider-slide"
              v-for="imageName of images"
              :key="imageName"
            >
              <div class="partner">
                <img
                  :src="require(`@/assets/asseen/${imageName}.png`)"
                  alt=""
                />
              </div>
            </swiper-slide>
          </swiper>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";

export default {
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      seenSwiper: null,
      modules: [Autoplay, Pagination],
      images: [
        // "asseen_badcrypto_logo",
        // "asseen_logo_capitl",
        // "asseen_logo_coin",
        // "asseen_logo_coinpedia",
        "treasure",
        "mashable",
        "nasdaq",
        "yahoo",
        // "asseen_logo_cryptodiffer",
        // "asseen_logo_jane",
        // "asseen_logo_kenn",
        // "asseen_logo_nonfungible",
        // "asseen_logo_polygon",
      ],
    };
  },
  methods: {
    onSeenSwiper(swiper) {
      this.seenSwiper = swiper;
    },
  },
};
</script>

<style lang="scss">
.home-seen {
  padding-bottom: 100px;
  padding-top: 50px;
  // &-title {
  //   padding-top: 50px;
  //   font-family: vincente;
  //   font-size: calc(70px + 50 * ((100vw - 769px) / 2048));
  //   text-transform: uppercase;
  //   color: #fff;
  //   margin-bottom: 30px;
  //   @media (max-width: 800px) {
  //     font-size: calc(55px + 10 * ((100vw - 370px) / 800));
  //   }
  // }

  &__partners {
    margin: 0 auto;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__slider {
    width: 80%;
    margin: 0 auto;

    @media (max-width: 800px) {
      padding-bottom: 50px !important;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    &-wrapper {
      position: relative;
    }

    &-slide {
      display: flex;
      justify-content: center;
      align-items: center;

      // & .partner {
      //   width: 140px;
      //   height: 140px;
      //   border-radius: 50%;
      //   position: relative;
      //   background: #e9b478;

      //   @media (max-width: 600px) {
      //     width: 100px;
      //     height: 100px;
      //   }

      //   & img {
      //     border: 2px solid #b7131b;
      //     width: 100%;
      //     height: 100%;
      //     object-fit: cover;
      //     border-radius: 50%;
      //   }
      // }
    }
  }
}
</style>
