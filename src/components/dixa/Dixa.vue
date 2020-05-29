<template>
  <div class="w-screen flex montserrat">
    <div class="content-sized flex items-center justify-center h-screen">
      <div id="dixaContainer" class="w-full max-w-6xl">
        <profile></profile>
        <div id="chatContainer" class="p-4">
          <div
            id="messagesContainer"
            class="flex flex-col-reverse min-h-60 max-h-60 mb-10 pr-3  overflow-y-scroll"
          >
            <wrapper component-type="default" class="hidden"></wrapper>
          </div>

          <div id="userInputContainer" class="w-full">
            <div class="tags mb-3">
              <span
                class="actionTag"
                :key="index"
                v-for="(tag, index) in tags"
                @click="replyToTagClick(index)"
                >{{ tag }}</span
              >
            </div>
            <div class="w-full flex items-center">
              <div class="text-input w-full mr-6">
                <input
                  type="text"
                  class="dixa-input  w-full"
                  placeholder="Ask me anything..."
                  v-model="userInputQuery"
                  v-on:keyup.enter="handleEnterEvent"
                />
              </div>
              <button
                type="button"
                class="submitBtn p-3 flex items-center justify-between"
              >
                <ion-icon name="send" class="text-2xl"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <templates></templates>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
import Wrapper from "./responses/Wrapper";
import Templates from "./Templates";
import { dixaMixin } from "../../mixins/DixaMixin";
import Vue from "vue";
export default {
  mixins: [dixaMixin],

  components: { Profile, Wrapper, Templates },

  directives: {},

  filters: {},

  props: {},

  data() {
    return {
      userInputQuery: null,
      messagesContainer: null,
    };
  },

  created() {},

  mounted() {
    this.messagesContainer = document.getElementById("messagesContainer");
  },

  computed: {},

  watch: {},

  methods: {
    // tag events
    replyToTagClick(tagId) {
      this.addMessageByUser(this.tags[tagId]);

      setTimeout(() => {
        this.insertNewTagReply(tagId);
      }, 200);
    },

    insertNewTagReply(tagId) {
      let componentType = this.getTagAnswer(tagId);
      let ComponentClass = Vue.extend(Wrapper);
      let instance = new ComponentClass({
        propsData: { componentType: componentType },
      });
      instance.$mount();
      let template = document.querySelector(".templates .botTagResponse");
      let clone = template.cloneNode(true);
      clone.querySelector(".componentContainer").append(instance.$el);
      this.messagesContainer.prepend(clone);
    },

    // input events
    handleEnterEvent() {
      this.addMessageByUser(this.userInputQuery);

      this.replyToUserInput("I didnt quite pick that ..");
      this.userInputQuery = "";
    },
    addMessageByUser(text) {
      let template = document.querySelector(".templates .dixaUserMessage");
      let clone = template.cloneNode(true);
      clone.querySelector("p").innerHTML = text;
      this.messagesContainer.prepend(clone);
    },
    replyToUserInput(text) {
      let template = document.querySelector(".templates .botInputResponse");
      let clone = template.cloneNode(true);
      clone.querySelector("p").innerHTML = text;
      this.messagesContainer.prepend(clone);
    },
  },
};
</script>
