$(document).ready(function() {
  $('#work').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("notClicked");
    $(".spaceTwo").addClass("clicked");
    $(".spaceOne").addClass("notClicked");
    $(".spaceThree").addClass("notClicked");
    $(".logo").addClass("logoMoved");
  });
  $('#about').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceThree").removeClass("notClicked");
    $(".spaceThree").addClass("clicked");
    $(".spaceOne").addClass("notClicked");
    $(".spaceTwo").addClass("notClicked");
    $(".logo").addClass("logoMoved");
  });
  $('#contact').click(function() {
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceOne").removeClass("notClicked");
    $(".spaceOne").addClass("clicked");
    $(".spaceThree").addClass("notClicked");
    $(".spaceTwo").addClass("notClicked");
    $(".logo").addClass("logoMoved");
  });

  $('.logo').click(function() {
    location.reload();
  })
})
