<template>
  <div class="container">
    <div class="box">
      <div class="line-1"></div>
      <div class="line-interval"></div>
      <div class="line-2"></div>
      <div class="line-interval"></div>
      <div class="line-3"></div>
      <div class="line-interval"></div>
      <div class="line-4"></div>
      <div class="line-interval"></div>
      <div class="line-5"></div>
      <div class="line-interval"></div>
      <div class="line-6"></div>
      <div class="line-interval"></div>
      <div class="line-7"></div>
      <div class="line-interval"></div>
      <div class="line-8"></div>
      <div class="line-interval"></div>
      <div class="line-9"></div>
      <div class="line-interval"></div>
      <div class="line-10"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockEqualizer',
};
</script>
<style>
*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 33px;
  padding: 4px;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

@keyframes go-up-down {
  0% {
    height: 0;
  }
  100% {
    height: 20px;
  }
}

.line-interval {
  width: 1px;
}

.line-1 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.7s infinite alternate;
}

.line-2 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.6s infinite alternate;
}

.line-3 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.9s infinite alternate;
}

.line-4 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.3s infinite alternate;
}

.line-5 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.3s infinite alternate;
}

.line-6 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.9s infinite alternate;
}

.line-7 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.2s infinite alternate;
}

.line-8 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.6s infinite alternate;
}

.line-9 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.8s infinite alternate;
}

.line-10 {
  position: relative;
  width: 5px;
  height: 20px;
  background-color: #ed8f07;
  animation: go-up-down 0.3s infinite alternate;
}

.visually-hidden {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}
</style>
