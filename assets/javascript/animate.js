$(document).ready(function () {

   // GreenSock Animations
   gsap.from(".jumbotron", {duration: 0.5, y: -300, scale: 1});
   gsap.from("#quiz-wrapper", {duration: 0.5, y: 800, scale: 1});

   $("#start").on("click", function() {
      gsap.to("#quiz-wrapper", {duration: 0.7, rotation: 360, scale: 1})
   });
})