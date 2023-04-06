<template>
  <section class="purchase">
    <div class="container">
      <div class="purchase__inner">
        <form action="" class="purchase__form">
          <WowsBtn
            class="purchase__form-connect"
            @click="connect"
            :disabled="connected"
            >{{ !connected ? "connect wallet" : "Wallet connected" }}</WowsBtn
          >
          <div class="purchase__form-counter">
            <WowsBtn class="counter-decrease" @click="plots--">.</WowsBtn>
            <WowsBtn
              class="purchase__form-btn"
              :disabled="!connected"
              @click="callContract"
              >purchase {{ plots }} land deeds</WowsBtn
            >
            <WowsBtn class="counter-increase" @click="plots++">.</WowsBtn>
          </div>
          <div class="purchase-fee">purchase fee {{ fee }} matic</div>
          <div class="purchase-plots">
            <router-link to="/"
              >{{ availablePlots }} plots left for purchase</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </section>
  <BlockMintInfo />
</template>

<script>
import WowsBtn from "@/components/WowsBtn.vue";
import BlockMintInfo from "@/components/BlockMintInfo.vue";
import Web3 from "web3";

export default {
  components: {
    WowsBtn,
    BlockMintInfo,
  },
  data() {
    return {
      plots: 1,
      availablePlots: 2890,
      maxBuyPlots: 10,
      fee: 12,
      connected: false,
      contractResult: "",
    };
  },
  methods: {
    connect() {
      if (window.ethereum && !this.connected) {
        window.ethereum.request({ method: "eth_requestAccounts" }).then(() => {
          this.connected = true;
        });
      }
    },
    callContract() {
      // method for calling the contract method
      if (!this.connected) {
        return;
      }
      let web3 = new Web3(window.ethereum);
      let contractAddress = "0xE929Bf73Dc998B2424F1C045003EFF6C42E3Fa6c";

      let abi = JSON.parse(
        `
        [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address","name":"_walletVIP","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWalletVIP","type":"address"}],"name":"setWalletVIP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"userNFTIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`
      );

      let contract = new web3.eth.Contract(abi, contractAddress);

      console.log(contract);

      contract.methods
        .mint(
          "0000000000000000000000000000000000000000000000000000000000000005"
        )
        .call()
        .then((result) => {
          console.log("res", result);
          this.contractResult = result;
        });
    },
  },
  watch: {
    plots() {
      if (!this.plots) {
        this.plots = 1;
      }
      if (this.plots > this.maxBuyPlots) {
        this.plots = this.maxBuyPlots;
      }
    },
  },
};
</script>

<style lang="scss">
.purchase {
  background: url("@/assets/home/bg.jpg");
  padding-top: calc(10vh + 10 * ((100vw - 769px) / 2048));
  padding-bottom: calc(10vh + 10 * ((100vw - 769px) / 2048));

  &__inner {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1500px) {
      justify-content: center;
      position: relative;
      z-index: 1000;
    }
  }

  &-fee {
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: calc(35px + 10 * ((100vw - 769px) / 2048));
    color: #fff;

    @media (max-width: 800px) {
      font-size: calc(22px + 2 * ((100vw - 320px) / 900));
    }
  }

  &-plots {
    font-size: calc(35px + 10 * ((100vw - 769px) / 2048));
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background: #000;
    width: 450px;
    color: #fff;
    font-family: vincente, sans-serif;
    margin: 0 auto;
    border: 2px solid #feb744;

    & > a {
      transition: color 0.3s;

      &:hover {
        color: #ed8f07;
      }
    }

    @media (max-width: 600px) {
      width: 350px;

      font-size: calc(22px + 2 * ((100vw - 320px) / 900));
    }
  }

  &__form {
    margin-top: 50px;
    &-connect {
      margin-bottom: 30px !important;
      height: 80px;

      @media (max-width: 600px) {
        height: 60px;
      }
    }

    &-connect,
    &-btn {
      width: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0;

      @media (max-width: 600px) {
        width: 300px;
      }

      @media (max-width: 500px) {
        width: 200px;
      }
    }

    &-counter {
      display: flex;
      margin-bottom: 30px;

      & .counter-increase,
      & .counter-decrease {
        color: transparent;
        width: 80px;
        height: 80px;
        padding: 0;
        position: relative;
        overflow: hidden;

        @media (max-width: 600px) {
          width: 60px;
          height: 60px;
        }
      }

      & .counter-decrease {
        &::after {
          content: "-";
          font-size: 100px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;

          @media (max-width: 600px) {
            font-size: 80px;
          }
        }
      }

      & .counter-increase {
        &::after {
          content: "+";
          font-size: 100px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;

          @media (max-width: 600px) {
            font-size: 80px;
          }
        }
      }
    }
  }
}
</style>
