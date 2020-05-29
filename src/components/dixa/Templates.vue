<template>
  <div class="templates hidden">
    <div class="message dixaUserMessage flex items-center ml-auto">
      <div class="textContainer mr-3">
        <p class="">Text goes here</p>
      </div>
      <img :src="require(`@/assets/img/dixa/dixa.png`)" alt="" class="w-12 h-12" />
    </div>

    <div class="message botInputResponse flex items-center mr-auto">
      <img
        :src="require(`@/assets/img/dixa/profile.png`)"
        alt=""
        class="w-12 h-12 mt-auto"
      />
      <div class="textContainer ml-3">
        <p class="">Text goes here</p>
      </div>
    </div>

    <div class="message botTagResponse flex mr-auto">
      <img
        :src="require(`@/assets/img/dixa/profile.png`)"
        alt=""
        class="w-12 h-12 mt-auto"
      />
      <div class="componentContainer ml-3 w-1/2"></div>
    </div>
  </div>
</template>

<style lang="scss">
$dixa-light: #f0f0ff;
$dixa-dark: #333333;
$dixa-accent-light: #5644d8;
$dixa-accent: #2e1da5;
.message {
  animation: fadeIn ease 1s;
  .textContainer,
  .componentContainer {
    p {
      border: 1px solid $dixa-accent-light;
      background-color: $dixa-accent-light;
      border-radius: 10px 10px 0 10px;
      padding: 5px 10px;
      font-size: 12px;
      color: #fff;
    }
  }
}
.botInputResponse {
  .textContainer {
    p {
      background-color: #fff;
      color: $dixa-accent-light;
      padding: 5px 10px;
      border-radius: 10px 10px 10px 0;
    }
  }
}
.botTagResponse {
  .componentContainer {
    p {
      background-color: #fff;
      color: $dixa-accent-light;
      padding: 5px 10px;
      border-radius: 0;
      margin-bottom: 2px;
    }
    p:first-of-type {
      border-radius: 10px 10px 0 0;
    }
    p:last-of-type {
      border-radius: 0 0 10px 0px;
    }
  }
}
</style>
