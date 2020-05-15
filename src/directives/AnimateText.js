export default {
  bind: function(el) {
    let words = el.innerHTML.split(" ");
    let newText = "";
    words.shift();
    words.pop();
    words.forEach(word => {
      newText += "<div><span>" + word + "</span></div>";
    });
    el.innerHTML = newText;
  },
};
