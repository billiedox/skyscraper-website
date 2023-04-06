<template>
  <!-- STEPS -->
  <div class="home-steps" id="steps">
    <div class="wrapper wrapper_home-steps">
      <div class="home-steps__inner">
        <div class="home-steps__items">
          <div
            class="home-steps-item"
            data-bs-toggle="modal"
            data-bs-target="#steps-modal"
            @click="pdfType = false"
          >
            <h2 class="home-steps-item-title">skyscraper roadmap</h2>
            <div class="home-steps-item-image">
              <img src="@/assets/home/steps/roadmap.png" alt="" />
            </div>
          </div>
          <!-- <div
            class="home-steps-item"
            data-bs-toggle="modal"
            data-bs-target="#steps-modal"
            @click="modalType = 'pdf1'"
          >
            <h2 class="home-steps-item-title">token audit</h2>
            <div class="home-steps-item-image">
              <img src="@/assets/home/audit.png" alt="" />
            </div>
          </div> -->
          <div
            class="home-steps-item"
            data-bs-toggle="modal"
            data-bs-target="#steps-modal"
            @click="
              modalType = 'deck';
              pdfType = true;
            "
          >
            <h2 class="home-steps-item-title">investor deck</h2>
            <div class="home-steps-item-image">
              <img src="@/assets/home/steps/deck.png" alt="" />
            </div>
          </div>
          <div class="home-steps-item">
            <h2 class="home-steps-item-title">join whitelist</h2>
            <a
              target="_blank"
              :href="links.whitelist"
              class="home-steps-item-image"
            >
              <img src="@/assets/home/steps/whitelist.png" alt="" />
            </a>
          </div>
          <div
            class="modal fade steps-modal"
            id="steps-modal"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content bg-transparent">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>

                <!--                <img-->
                <!--                  v-if="modalType === 'roadmap'"-->
                <!--                  class="roadmap-image"-->
                <!--                  src="@/assets/home/ROADMAP-2022.jpg"-->
                <!--                  alt=""-->
                <!--                />-->
                <PdfFile
                  v-if="pdfType"
                  :key="modalType"
                  :source="pdfs[modalType]"
                />
                <VideoModal v-else :key="modalVideo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import WowsBtn from "@/components/WowsBtn.vue";
import PdfFile from '@/components/PdfFile.vue';
import VideoModal from './VideoModal.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['links']),
  },
  components: {
    // WowsBtn,
    PdfFile,
    VideoModal,
  },
  data() {
    return {
      modalVideo: 'roadmap',
      pdfType: false,
      modalType: 'deck',
      pdfs: {
        pdf1: require('@/assets/audit/Wolves-of-Wall-Street-Audit-Report.pdf')
          .default,
        deck: require('@/assets/audit/SEED_DECK_SKYSCRAPER.pdf').default,
        //deck: require("@/assets/audit/SKYSCRAPER_PITCH_DECK.pdf").default,
        //roadmap: require("@/assets/audit/ROADMAP_SKYSCRAPER.pdf").default,
      },
    };
  },
};
</script>

<style lang="scss">
.wrapper_home-steps {
  max-width: 1280px !important;
}

.home-steps {
  padding: 150px 0px 180px;
  width: 100%;
  background: url('@/assets/home/steps/sunset.jpg') repeat-x;
  background-position: center auto;
  background-size: cover;
  @media (max-width: 800px) {
    padding: 120px 0 120px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-flow: dense;
    padding: 0px 120px;
    /* margin-bottom: 40px;
    margin: 0; */
    @media (max-width: 550px) {
      padding: 0px 20px;
    }
  }

  &-item {
    cursor: pointer;
    &-title {
      font-size: 35px;
      font-family: 'acumin-pro-condensed', sans-serif;
      font-weight: bold;
      font-style: italic;
      color: #fff;
      text-transform: uppercase;
      @media (max-width: 800px) {
        font-size: calc(35px + 2 * ((100vw - 370px) / 800));
      }
      @media (max-width: 1150px) {
        font-size: 30px;
      }
    }

      &-image {
        img {
          max-width: 190px;
          max-height: 190px;
        }
    //   margin: 0 auto;
    //   width: 200px;
    //   height: 200px;
    //   border: 8px solid #032142;
    //   border-radius: 50%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   img {
    //     width: 70%;
    //   }
      }
  }

  & .steps-modal {
    & .modal-dialog {
      padding-top: 100px;
      max-width: 1500px;
      width: 95vw;
      margin: 0 auto;

      @media (max-width: 900px) {
        padding-top: 50px;
      }
    }
    & .modal-content bg-transparent {
      & img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 600px) {
        width: 95vw;
        margin: 0 auto;
      }

      & #pdfvuer {
        & > div {
          margin: 0 !important;
          border-bottom: 5px solid #000;
        }
      }
    }
    & .btn-close {
      position: absolute;
      top: 10px;
      right: 10px;
      color: white;
      // filter: invert(97%) sepia(100%) saturate(0%) hue-rotate(340deg)
      //   brightness(104%) contrast(100%);

      z-index: 100;

      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>
