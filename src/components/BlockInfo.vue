<template>
  <!-- PLOT INFO -->
  <div class="home-info" id="info">
    <div class="wrapper">
      <div class="home-info__inner">
        <div class="home-info-buildings">
          <img src="@/assets/home/buildings-with-plots.png" alt="" />
        </div>
        <ul class="home-info-list">
          <p class="home-info-list-title">
            MAKE MONEY WITH YOUR RARE LAND NFTS
          </p>
          <li class="home-info-list-item" v-for="item of items" :key="item">
            <div v-html="item"></div>
          </li>
        </ul>
      </div>
      <WowsBtn :url="links.whitelist" buttonType="link">JOIN WHITELIST</WowsBtn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WowsBtn from "@/components/WowsBtn.vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex";

export default {
  components: {
    WowsBtn,
    // Swiper,
    // SwiperSlide,
  },
  computed: {
    ...mapGetters(["links"]),
  },
  data() {
    return {
      items: [
        `
          YOUR LAND PLOT DEED SFTS ALLOW YOUR
          CHARACTER & FACTION TO EXPAND THEIR TERRITORY
          AND EARN BIG FROM DEVELOPING AND STAKING.
        `,
        `
          EACH LAND PLOT BELONGS TO 1 OF 15 PLOT TYPES
          AND 1 OF 10 DISTRICT TYPES, AND EACH HAS THEIR
          OWN RARITY, BUILDING PERMITS AND PROFIT
          RETURNS
        `,
        `
          WHATEVER FACTION YOU DECIDE TO ALIGN WITH
          WILL THESE WILL PROVE INVALUABLE TO MAKING
          TERRITORIAL GAINS.
        `,
      ],
    };
  },
};
</script>

<style lang="scss">
.home-info-list-title {
  color: #fff;
  text-transform: uppercase;
  font-size: calc(40px + 8 * (100vw - 769px) / 2048);
  line-height: 32px;
  font-family: acumin-pro-condensed;
  font-weight: 400;
  font-family: vincente, sans-serif;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    font-size: calc(35px + 8 * (100vw - 769px) / 2048);
  }
}
.home-info {
  padding: 40px 0;
  background: linear-gradient(
    0deg,
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

  &__inner {
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: 0 auto;
    max-width: 1920px;

    // @media (max-width: 1000px) {
    //   display: flex;
    //   // flex-direction: column;
    //   // align-items: center;
    //   justify-content: space-between;
    // }
  }
  &-buildings {
    position: absolute;
    left: 0;

    // top: -165%;
    top: calc(-140% + 10 * ((100vw - 769px) / 2048));
    transform: translate(5%, 0%);

    & > img {
      width: calc(85% + 10 * ((100vw - 769px) / 2048));
    }

    @media (min-width: 1920px) {
      top: -800px;
    }

    @media (max-width: 1920px) {
      top: -200%;
      & > img {
        width: 85%;
      }
    }
    @media (max-width: 1760px) {
      top: -200%;
      left: -5%;
      & > img {
        width: 80%;
      }
    }

    @media (max-width: 1600px) {
      top: -110%;

      & > img {
        width: 70%;
      }
    }
    @media (max-width: 1500px) {
      // top: -100%;
      left: -5%;
      & > img {
        width: 65%;
      }
    }
    @media (max-width: 1400px) {
      top: -80%;
      left: -10%;
      & > img {
        width: 60%;
      }
    }
    @media (max-width: 1300px) {
      top: -80%;
      left: -12%;
      & > img {
        width: 60%;
      }
    }
    @media (max-width: 1250px) {
      // top: -60%;
      left: -15%;
      // & > img {
      //   width: 50%;
      // }
    }
    @media (max-width: 1200px) {
      top: -110%;
      left: -25%;
      & > img {
        width: 70%;
      }
    }
    @media (max-width: 1100px) {
      top: -80%;
      left: -30%;

      & > img {
        width: 60%;
      }
    }

    @media (max-width: 1000px) {
      // position: static;
      // left: -60%;
      // top: -100%;
      display: none;
    }
  }

  &-list {
    //width: 35%;
    width: 700px;
    text-align: left;
    padding: 0;
    list-style: none;
    position: relative;
    margin: 0 1vw;
    // max-width: 700px;

    @media (max-width: 1760px) {
      width: 40%;
    }
    @media (max-width: 1200px) {
      width: 50%;
    }
    @media (max-width: 1000px) {
      width: 70%;
      margin: 0 auto;
      // left: 7%;
    }

    @media (max-width: 800px) {
      width: 90%;
    }

    &::after {
      content: "";
      position: absolute;
      left: -140px;
      top: 75.5px;
      height: 206px;
      width: 2px;
      background: #fff;

      @media (max-width: 1589px) {
        height: 273px;
      }

      @media (max-width: 1317px) {
        display: none;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: -388px;
      top: 180px;
      background: #fff;
      width: 250px;
      height: 2px;

      @media (max-width: 1589px) {
        top: 210px;
      }

      @media (max-width: 1700px) {
        left: -288px;
        width: 150px;
      }

      @media (max-width: 1317px) {
        display: none;
      }
    }
    &-item {
      color: #fff;
      text-transform: uppercase;
      font-size: calc(25px + 8 * ((100vw - 769px) / 2048));
      line-height: 32px;
      font-family: acumin-pro-condensed;
      font-weight: 500;
      //font-style: italic;
      position: relative;
      padding-bottom: 20px;

      @media (min-width: 1600px) {
        font-size: 25px;
      }

      @media (max-width: 900px) {
        font-size: calc(14px + 2 * ((100vw - 320px) / 900));
        line-height: unset !important;
      }

      &::after {
        content: "";
        position: absolute;
        left: -40px;
        top: 5px;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #fff;

        @media (max-width: 1000px) {
          display: none;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: -140px;
        top: 13.5px;
        width: 100px;
        height: 2px;
        background: #fff;
        transform: translate(0, -50%);

        @media (max-width: 1317px) {
          display: none;
        }
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
