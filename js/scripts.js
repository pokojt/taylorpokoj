$(document).ready(function() {
  $('#work').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("notClicked");
    $(".spaceTwo").toggleClass("clicked");
    $(".spaceOne").toggleClass("notClicked");
    $(".spaceThree").toggleClass("notClicked");
  });
  $('#about').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceThree").removeClass("notClicked");
    $(".spaceThree").toggleClass("clicked");
    $(".spaceOne").toggleClass("notClicked");
    $(".spaceTwo").toggleClass("notClicked");
  });
  $('#contact').click(function() {
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceOne").removeClass("notClicked");
    $(".spaceOne").toggleClass("clicked");
    $(".spaceThree").toggleClass("notClicked");
    $(".spaceTwo").toggleClass("notClicked");
  });
})
