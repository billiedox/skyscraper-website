<template>
  <!-- +LAND -->
  <div class="home-land" id="mint">
    <div class="wrapper wrapper-land">
      <div class="home-land__inner">
        <h1 class="title home-land-title title-headings">
          BUY {{ plotsCount }} LAND DEEDS IN NYC
        </h1>
        <div class="home-land__slider-wrapper">
          <div class="slider-arrow left">
            <img
              src="@/assets/icons/arrow.svg"
              alt=""
              @click="landSwiper.slidePrev()"
            />
          </div>
          <div class="slider-arrow right">
            <img
              src="@/assets/icons/arrow.svg"
              alt=""
              @click="landSwiper.slideNext()"
            />
          </div>
          <swiper
            class="home-land__slider"
            :slides-per-view="1.5"
            :centered-slides="true"
            :spaceBetween="30"
            :breakpoints="{
              '600': {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              '900': {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false,
              },
            }"
            @swiper="onLandSwiper"
          >
            <swiper-slide
              class="home-land__slider-slide"
              v-for="k of lands"
              :key="k"
            >
            <img :src="require(`@/assets/home/LAND${k}.jpg`)" alt="" />

            </swiper-slide>
          </swiper>
        </div>
        <div class="marginWowsBtn">
          <!-- <router-link to="/mintland"> -->
          <WowsBtn :url="links.whitelist" buttonType="link"
            >JOIN WHITELIST</WowsBtn
          >
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WowsBtn from "@/components/WowsBtn.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex";

export default {
  components: {
    WowsBtn,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["links"]),
  },
  data() {
    return {
      landSwiper: null,
      plotsCount: 2500,
      lands: 3,
      winSizeLevel: 3,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onLandSwiper(swiper) {
      this.landSwiper = swiper;
    },
    onResize() {
      this.lands = 3;
    }
  }
};
</script>

<style lang="scss">
.wrapper-land {
  max-width: 1200px;
}

.home-land {
  padding: 40px 0;
  background: linear-gradient(
    180deg,
    rgba(238, 190, 80, 1) 0%,
    rgba(238, 190, 80, 1) 0.18%,
    rgba(213, 109, 77, 1) 19.43%,
    rgba(175, 91, 68, 1) 27.99%,
    rgba(138, 74, 59, 1) 38.12%,
    rgba(107, 59, 51, 1) 48.72%,
    rgba(83, 48, 45, 1) 59.77%,
    rgba(66, 40, 41, 1) 71.45%,
    rgba(56, 36, 39, 1) 84.2%,
    rgba(53, 34, 38, 1) 100%
  );

  &-title {
    /* color: #12161f !important; */
  }

  // &-title {
  //   font-family: vincente, sans-serif;
  //   font-size: calc(70px + 50 * ((100vw - 769px) / 2048));
  //   text-transform: uppercase;
  //   color: #fff;
  //   margin-bottom: 30px;
  //   @media (max-width: 800px) {
  //     font-size: calc(55px + 10 * ((100vw - 370px) / 800));
  //   }
  // }

  & .slider-arrow {
    top: 50%;
    transform: translateY(-50%);

    &.right {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  &__slider {
    @media (max-width: 900px) {
      width: 80%;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      width: 100%;
    }

    &-wrapper {
      display: block;
      padding: 0 10vw;
      position: relative;
      margin-bottom: 30px;

      @media (max-width: 600px) {
        display: block;
        position: relative;
        margin-bottom: 15px;
        padding: 0 0;
      }

      & .slider-arrow {
        display: block;

        @media (max-width: 600px) {
          display: none;
        }
      }
    }

    &-slide {
      width: auto;

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.slider-arrow {
  height: 55px;
  width: 55px;
  position: absolute;

  &.right {
    right: 0;
    transform: rotate(180deg);
  }

  &.left {
    left: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
