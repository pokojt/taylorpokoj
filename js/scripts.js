$(document).ready(function() {
  $('#work').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("notClicked");
    $(".spaceTwo").addClass("clicked");
    $(".spaceOne").addClass("notClicked");
    $(".spaceThree").addClass("notClicked");
    $(".logo").addClass("logoMoved2");
    $(".projects").removeClass("hidden");
    $(".aboutTaylor").addClass("hidden");
    $(".twoHeader").hide();
  });
  $('#about').click(function() {
    $(".spaceOne").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceThree").removeClass("notClicked");
    $(".spaceThree").addClass("clicked");
    $(".spaceOne").addClass("notClicked");
    $(".spaceTwo").addClass("notClicked");
    $(".logo").addClass("logoMoved");
    $(".projects").addClass("hidden");
    $(".logo").removeClass("logoMoved2");
    $(".aboutTaylor").removeClass("hidden");

  });
  $('#contact').click(function() {
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".spaceOne").removeClass("notClicked");
    $(".spaceOne").addClass("clicked");
    $(".spaceThree").addClass("notClicked");
    $(".spaceTwo").addClass("notClicked");
    $(".logo").addClass("logoMoved");
    $(".projects").addClass("hidden");
    $(".logo").removeClass("logoMoved2");
    $(".aboutTaylor").addClass("hidden");
  });

  $('.logo').click(function() {
    $(".spaceThree").removeClass("clicked").removeClass("notClicked");
    $(".spaceTwo").removeClass("clicked").removeClass("notClicked");
    $(".spaceOne").removeClass("notClicked").removeClass("notClicked");
    $(".logo").removeClass("logoMoved");
    $(".logo").removeClass("logoMoved2");
    $(".projects").addClass("hidden");
    $(".aboutTaylor").addClass("hidden");
    $(".twoHeader").show();
  });

  $('.scroll').click(function() {
    $('.spaceTwo').animate({
      scrollTop: $("#project2").offset().top
    }, 1500);
  });
})
