export default {
  bind: function(el, binding) {
    el.addEventListener("click", () => {
      const el = document.createElement("textarea");
      el.value = binding.value.toString();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      document.getElementById("toolTipMaster").classList.add("active");
      setTimeout(() => {
        document.getElementById("toolTipMaster").classList.remove("active");
      }, 1500);
    });
  }
};
