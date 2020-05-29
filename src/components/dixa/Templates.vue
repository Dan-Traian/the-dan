<template>
  <div class="templates hidden">
    <div class="message userTagMessage flex items-center ml-auto">
      <div class="textContainer mr-3">
        <p class="">Text goes here</p>
      </div>
      <img :src="require(`@/assets/img/dixa/dixa.png`)" alt="" class="w-12 h-12" />
    </div>

    <div class="message botTagResponse flex mr-auto">
      <img :src="require(`@/assets/img/dixa/profile.png`)" alt="" class="w-12 h-12 mt-auto" />
      <div class="componentContainer ml-3 w-1/2"></div>
    </div>

    <div class="message botInputResponse flex mr-auto">
      <img :src="require(`@/assets/img/dixa/profile.png`)" alt="" class="w-12 h-12 mt-auto" />
      <div class="textContainer mr-3">
        <p class="">Text goes here</p>
      </div>
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
      border-radius: 10px;
      padding: 5px 10px;
      font-size: 12px;
    }
  }
}
.botTagResponse {
  .componentContainer {
    p {
      background-color: $dixa-accent-light;
      color: #fff;
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

.userMessage {
  p {
    border-radius: 10px 10px 0 10px;
  }
}
.tagMessage {
  .textContainer {
    p {
      border-radius: 10px 10px 0 10px;
      background-color: $dixa-accent-light;
      color: #fff;
      padding: 5px 10px;
    }
  }
}
.responseBot {
  .componentContainer {
    p {
      background-color: $dixa-accent-light;
      color: #fff;
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
