export const dixaMixin = {
  data() {
    return {
      tags: [
        " Tell me about yourself 👨‍💻",
        "Show some skillz 🔥",
        "What can you do?",
        "Lets get in touch ",
      ],
      tagsAnswers: ["about", "skills", "background", "contact"],
    };
  },
  mounted() {},
  computed: {},
  methods: {
    getTagAnswer(tagID) {
      return this.tagsAnswers[tagID];
    },
  },
};
