<template>
  <!-- INTRODUCING -->
  <div class="home-intro" id="intro">
    <div class="home-intro__inner">
      <div class="wrapper wrapper__home-intro">
        <div class="slider-arrow left">
          <img
            src="@/assets/icons/arrow.svg"
            alt=""
            @click="introSwiper.slidePrev()"
          />
        </div>
        <div class="slider-arrow right">
          <img
            src="@/assets/icons/arrow.svg"
            alt=""
            @click="introSwiper.slideNext()"
          />
        </div>
        <swiper
          ref="introSwiper"
          class="home-intro__slider"
          @swiper="onIntroSwiper"
          :modules="modules"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 30000,
            disableOnInteraction: false,
          }"
          :spaceBetween="30"
        >
          <swiper-slide
            v-for="(item, i) of introSlides"
            :key="i"
            class="home-intro__slider-slide"
          >
            <div class="home-intro__slider-icon" v-if="item?.icon">
              <img :src="require(`@/assets/icons/${item.icon}.png`)" alt="" />
            </div>
            <div v-html="item.text" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      introSwiper: null,
      modules: [Autoplay, Pagination],
      introSlides: [
        {
          text: `
          <div class="slider-inner-area">
            <p class="slider-heading slider-highlighted">  A WORD FROM THE MAYOR </p>
            <div>
            <div>
            "WELCOME TO NYC'S FIRST INAUGUARAL LAND DEED SALE
            </div>
            <div>
            A SELECT AMOUNT OF DEEDS ARE UP FOR SALE FOR THOSE KEEN TO
            </div>
            <div>
            DEGENERATE... NO... REGENERATE NYC. ITS A BRAVE NEW CITY AND
            </div>
            <div>
            WE HOPE YOU COME TO HELP US BUILD IT BETTER.
            </div>
            <div>
            HAVE NO FEAR... WE WILL ENSURE A FAIR SALE FOR ALL PAW FOLK."
            </div>
            <p class="slider-footer-heading slider-highlighted">  MAYOR SILVERPAW </p>
            </div>
          `,
        },
        {
          text: `
          <div class="slider-inner-area">
            <p class="slider-heading slider-highlighted">  THE WORD ON THE STREET #1 </p>
            <div>
            <div>
            ALIGN YOURSELF WITH FACTION AND THEIR HOME DISTRICT.
            </div>
            <div>
            YOUR LAND PLOT DEED SFTS ALLOW YOUR CHARACTER & FACTION TO EXPAND
            </div>
            <div>
            THEIR TERRITORY AND EARN RESOURCES FROM DEVELOPING AND STAKING.
            </div>
          `,
        },
        {
          text: `
          <div class="slider-inner-area">
            <p class="slider-heading slider-highlighted">  THE WORD ON THE STREET #2 </p>
            <div>
            <div>
            EACH LAND PLOT BELONGS TO 1 OF 15 PLOT TYPES
            </div>
            <div>
            AND 1 OF 10 DISTRICT TYPES, AND EACH HAS THEIR
            </div>
            <div>
            OWN RARITY, BUILDING PERMITS AND PROFIT
            </div>
            <div>
            RETURNS.
            </div>
          </div>
          `,
        },
      ],
    };
  },
  methods: {
    onIntroSwiper(swiper) {
      this.introSwiper = swiper;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.slider-footer-heading {
  font-size: calc(20px + 15 * ((100vw - 769px) / 2048))
}

.wrapper-home-intro__seen {
  margin-top: 60px !important;
  max-width: 1200px !important;
  padding: 0px 100px;
  @media screen and (max-width: 800px) {
    padding: 0px 20px;
  }
}

.home-intro {
  position: relative;
  z-index: 2;

  padding: 80px 25px;

  background: url("@/assets/home/bg.jpg") no-repeat;
  background-size: cover;

  @media screen and (max-width: 900px) {
    padding: 70px 25px;
  }

  &__seen {
    &-title {
      color: #ed8f07 !important;
      font-family: "acumin-pro-condensed" !important;
      font-style: italic;
      font-weight: bold;
      /* font-size: calc(50px + 50 * ((100vw - 769px) / 2048)) !important; */

      @media screen and (max-width: 800px) {
        margin-top: 20px;
      }
    }

    &-partners {
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
  }

  & .wrapper {
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
  }

  &__slider {
    width: 70%;
    margin: 0 auto;
    font-family: "acumin-pro-condensed", sans-serif;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 20px !important;
    z-index: 100 !important;

    @media (max-width: 800px) {
      width: 85%;
      padding-bottom: 20px !important;
    }

    .swiper-wrapper {
      align-items: center;
    }

    & .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: 0 !important;
    }

    &-icon {
      // margin-bottom: 20px;
      transform: translateY(-30px);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-height: 200px;
      height: 15vw;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media (max-width: 700px) {
        height: 40vw;
        transform: translateY(-5vw);
      }
    }

    &-slide {
      font-size: calc(30px + 10 * ((100vw - 769px) / 2048));
      // font-size: 2em;
      //line-height: 38px;
      line-height: calc(30px + 20 * ((100vw - 769px) / 2048));
      text-align: center;
      color: #fff;
      text-transform: uppercase;

      @media (min-width: 1600px) {
        line-height: 35px;
        font-size: 40px;
      }

      @media (max-width: 1000px) {
        font-size: calc(25px + 5 * ((100vw - 370px) / 800));
        line-height: calc(22px + 10 * ((100vw - 370px) / 800));
        // margin-right: 5vw;
      }
    }
  }

  .slider-arrow {
    left, right {
      width: 55px;
      height: 55px;
    }
  }
}
</style>
