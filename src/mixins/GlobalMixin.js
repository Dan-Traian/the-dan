export const globalMixin = {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    animateTextIn(isVisible, element) {
      let texts = element.target.querySelectorAll("div span");
      texts.forEach(element => {
        if (isVisible) element.classList.add("active");
        else element.classList.remove("active");
      });
    },
    animateImageIn(isVisible, element) {
      let image = element.target;
      if (isVisible) image.classList.add("active");
      else image.classList.remove("active");
    },
    animateBoxIn(isVisible, element) {
      let image = element.target;
      if (isVisible) image.classList.add("active");
      else image.classList.remove("active");
    },
  },
};
