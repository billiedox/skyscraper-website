<template>
  <!-- STEPS -->
  <div class="home-steps" id="steps">
    <div class="wrapper">
      <div class="home-steps__inner">
        <div class="home-steps__items">
          <div class="home-steps-item">
            <div
              class="home-steps-item"
              data-bs-toggle="modal"
              data-bs-target="#steps-modal"
            >
              <h2 class="home-steps-item-title">MINTING roadmap 22</h2>
              <div class="home-steps-item-image">
                <img src="@/assets/home/roadmap.png" alt="" />
              </div>
            </div>
          </div>
          <div
            class="modal fade steps-modal"
            id="steps-modal"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>

                <img
                  v-if="modalType === 'image'"
                  class="roadmap-image"
                  src="@/assets/home/ROADMAP-2022.jpg"
                  alt=""
                />
                <PdfFile :key="modalType" :source="pdfs[modalType]" v-else />
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 100px">
          <!-- <router-link to="#"> -->
          <WowsBtn buttonType="router-link" url="#"
            >MINT LAND EVENT COMING SOON</WowsBtn
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
import PdfFile from "@/components/PdfFile";

export default {
  components: {
    WowsBtn,
    PdfFile,
  },
  data() {
    return {
      modalType: "image",
      pdfs: {
        // pdf1: require("@/assets/audit/Wolves-of-Wall-Street-Audit-Report.pdf")
        //     .default,
        // deck: require("@/assets/audit/SKYSCRAPER_PITCH_DECK.pdf").default,
        // roadmap: require("@/assets/audit/ROADMAP_SKYSCRAPER.pdf").default,
      },
    };
  },
};
</script>

<style lang="scss"></style>
