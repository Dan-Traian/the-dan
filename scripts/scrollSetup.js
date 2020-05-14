// $(document).scrollTop(0);
let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
    },
  }),
  wh = window.innerWidth;

// ---  what am i doing section

new ScrollMagic.Scene({ triggerElement: "#whatnow", duration: wh / 4, offset: -100 })
  .setPin("#whatnow_pinned")
  .addIndicators({ name: "WN pinn", colorTrigger: "yellow", colorStart: "red", colorEnd: "red" })
  .addTo(controller);

let tween_02 = new TimelineMax();
tween_02.staggerFromTo(
  "#whatNowText p",
  2,
  { top: "80px", opacity: 0 },
  { top: 0, opacity: 1, ease: Linear.easeNone },
  0.2,
  "+=0.4"
);

// build scene
new ScrollMagic.Scene({
  triggerElement: "#whatnow_pinned",
  duration: 200,
  offset: -wh * 0.2,
})
  .setTween(tween_02)
  .addIndicators({ name: "current stagger" })
  .addTo(controller);

// ---------------------------------------------
let tween_00 = new TimelineMax().staggerFromTo(
  "#contact .animate",
  4,
  { opacity: 0 },
  { opacity: 1, ease: Linear.easeNone },
  0.1
);

// build scene
new ScrollMagic.Scene({
  triggerElement: "#contact",
  duration: 200,
  offset: -wh * 0.3,
})
  .setTween(tween_00)
  // .addIndicators({ name: "scene 00 start" })
  .addTo(controller);

// let scene_00_pin = new ScrollMagic.Scene({
//   // triggerElement: ".start-section",
//   duration: ,
// })
//   .setPin("#scrollMagicScene")
//   .addIndicators({ name: "pin hello (duration: 0)" })
//   .addTo(controller);

// // adding a class
// new ScrollMagic.Scene({
//   triggerElement: "#whatnow_pinned",
//   triggerHook: 0.9, // show, when scrolled 10% into view
//   duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
//   offset: -wh * 0.3,
// })
//   .setClassToggle("#whatnow_pinned", "textVisible") // add class to reveal
//   .addIndicators({ name: "scene what now intro text start class" })
//   .addTo(controller);
