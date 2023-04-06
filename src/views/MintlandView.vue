<template>
  <!-- <BlockMintBanner /> -->
  <BlockVideo :videoOptions="videoOptions" />
  <BlockDistrict />
  <!-- <BlockInfo /> -->
  <BlockMintIntro />
  <BlockLand />
  <BlockMintFaq />
  <!-- <BlockMintSteps /> -->
</template>

<script>
//import BlockMintBanner from "@/components/BlockMintBanner.vue";
//import BlockInfo from "@/components/BlockInfo.vue";
import BlockMintFaq from "@/components/BlockMintFaq.vue";
import BlockLand from "@/components/BlockLand.vue";
import BlockVideo from "@/components/BlockVideo.vue";
import BlockMintIntro from "@/components/BlockMintIntro.vue";
import BlockDistrict from "@/components/BlockDistrict.vue";
import videoSrc from "@/assets/home/american_dog_v3.mp4";
import mobileMintBg from "@/assets/home/mint-static-mobile.png";
// import BlockMintSteps from "@/components/BlockMintSteps.vue";

export default {
  components: {
    //BlockMintBanner,
    //BlockInfo,
    BlockMintFaq,
    BlockLand,
    BlockVideo
    // BlockMintSteps,
    ,
    BlockMintIntro,
    BlockDistrict
},
  data() {
    return {
      videoOptions: {
        ref: 'mintBg',
        videoSrc,
        mobileBg: mobileMintBg,
      }
    }
  }
};
</script>

<style lang="scss"></style>
