export default {
  bind: function(el, binding) {
    console.log(binding.expression);
    let words = el.innerHTML.split(" ");
    let newText = "";
    words.shift();
    words.pop();
    words.forEach(word => {
      newText += "<div class=" + binding.expression + "><span>" + word + "</span></div>";
    });
    el.innerHTML = newText;
  },
};
