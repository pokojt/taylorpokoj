var project1gallery = function() {
  var project1click = 0;

    $('#plus1').click(function() {
      if (project1click < 3) {
        project1click +=1;
      }
      console.log(project1click);

      if (project1click === 1) {
        $("#back1").show();
        $("#image1").hide();
        $("#image2").show();
        $("#image3").hide();
        $("#image4").hide();
      } else if (project1click ===2) {
        $("#image1").hide();
        $("#image2").hide();
        $("#image3").show();
        $("#image4").hide();
      } else if (project1click ===3){
        $("#image1").hide();
        $("#image2").hide();
        $("#image3").hide();
        $("#image4").show();
      } else {
          $("#image1").show();
          $("#image2").hide();
          $("#image3").hide();
          $("#image4").hide();
          $("#back1").hide();
      }

    });
    $('#back1').click(function() {
      if (project1click > 0) {
        project1click -=1;
      }
      console.log(project1click);
      if (project1click === 1) {
        $("#image1").hide();
        $("#image2").show();
        $("#image3").hide();
        $("#image4").hide();
      } else if (project1click ===2) {
        $("#image1").hide();
        $("#image2").hide();
        $("#image3").show();
        $("#image4").hide();
      } else if (project1click ===3){
        $("#image1").hide();
        $("#image2").hide();
        $("#image3").hide();
        $("#image4").show();
      } else {
          $("#image1").show();
          $("#image2").hide();
          $("#image3").hide();
          $("#image4").hide();
          $("#back1").hide();
      }

    });

}

var project2gallery = function() {
  var project2click = 0;

    $('#plus2').click(function() {
      if (project2click < 3) {
        project2click +=1;
      }
      console.log(project2click);

      if (project2click === 1) {
        $("#back2").show();
        $("#image5").hide();
        $("#image6").show();
        $("#image7").hide();
        $("#image8").hide();
      } else if (project2click ===2) {
        $("#image5").hide();
        $("#image6").hide();
        $("#image7").show();
        $("#image8").hide();
      } else if (project2click ===3){
        $("#image5").hide();
        $("#image6").hide();
        $("#image7").hide();
        $("#image8").show();
      } else {
          $("#image5").show();
          $("#image6").hide();
          $("#image7").hide();
          $("#image8").hide();
          $("#back2").hide();
      }

    });
    $('#back2').click(function() {
      if (project2click > 0) {
        project2click -=1;
      }
      console.log(project2click);
      if (project2click === 1) {
        $("#image5").hide();
        $("#image6").show();
        $("#image7").hide();
        $("#image8").hide();
      } else if (project2click ===2) {
        $("#image5").hide();
        $("#image6").hide();
        $("#image7").show();
        $("#image8").hide();
      } else if (project2click ===3){
        $("#image5").hide();
        $("#image6").hide();
        $("#image7").hide();
        $("#image8").show();
      } else {
          $("#image5").show();
          $("#image6").hide();
          $("#image7").hide();
          $("#image8").hide();
          $("#back2").hide();
      }
    });
}

var project3gallery = function() {
  var project3click = 0;

    $('#plus3').click(function() {
      if (project3click < 3) {
        project3click +=1;
      }
      console.log(project3click);

      if (project3click === 1) {
        $("#back3").show();
        $("#image9").hide();
        $("#image10").show();
        $("#image11").hide();
        $("#image12").hide();
      } else if (project3click ===2) {
        $("#image9").hide();
        $("#image10").hide();
        $("#image11").show();
        $("#image12").hide();
      } else if (project3click ===3){
        $("#image9").hide();
        $("#image10").hide();
        $("#image11").hide();
        $("#image12").show();
      } else {
          $("#image9").show();
          $("#image10").hide();
          $("#image11").hide();
          $("#image12").hide();
          $("#back3").hide();
      }

    });
    $('#back3').click(function() {
      if (project3click > 0) {
        project3click -=1;
      }
      console.log(project3click);
      if (project3click === 1) {
        $("#image9").hide();
        $("#image10").show();
        $("#image11").hide();
        $("#image12").hide();
      } else if (project3click ===2) {
        $("#image9").hide();
        $("#image10").hide();
        $("#image11").show();
        $("#image12").hide();
      } else if (project3click ===3){
        $("#image9").hide();
        $("#image10").hide();
        $("#image11").hide();
        $("#image12").show();
      } else {
          $("#image9").show();
          $("#image10").hide();
          $("#image11").hide();
          $("#image12").hide();
          $("#back3").hide();
      }
    });
}

var project4gallery = function() {
  var project4click = 0;

    $('#plus4').click(function() {
      if (project4click < 3) {
        project4click +=1;
      }
      console.log(project4click);

      if (project4click === 1) {
        $("#back4").show();
        $("#image13").hide();
        $("#image14").show();
        $("#image15").hide();
        $("#image16").hide();
      } else if (project4click ===2) {
        $("#image13").hide();
        $("#image14").hide();
        $("#image15").show();
        $("#image16").hide();
      } else if (project4click ===3){
        $("#image13").hide();
        $("#image14").hide();
        $("#image15").hide();
        $("#image16").show();
      } else {
          $("#image13").show();
          $("#image14").hide();
          $("#image15").hide();
          $("#image16").hide();
          $("#back4").hide();
      }

    });
    $('#back4').click(function() {
      if (project4click > 0) {
        project4click -=1;
      }
      console.log(project4click);
      if (project4click === 1) {
        $("#image13").hide();
        $("#image14").show();
        $("#image15").hide();
        $("#image16").hide();
      } else if (project4click ===2) {
        $("#image13").hide();
        $("#image14").hide();
        $("#image15").show();
        $("#image16").hide();
      } else if (project4click ===3){
        $("#image13").hide();
        $("#image14").hide();
        $("#image15").hide();
        $("#image16").show();
      } else {
          $("#image13").show();
          $("#image14").hide();
          $("#image15").hide();
          $("#image16").hide();
          $("#back4").hide();
      }
    });
}

var project5gallery = function() {
  var project5click = 0;

    $('#plus5').click(function() {
      if (project5click < 3) {
        project5click +=1;
      }
      console.log(project5click);

      if (project5click === 1) {
        $("#back5").show();
        $("#image17").hide();
        $("#image18").show();
        $("#image19").hide();
        $("#image20").hide();
      } else if (project5click ===2) {
        $("#image17").hide();
        $("#image18").hide();
        $("#image19").show();
        $("#image20").hide();
      } else if (project5click ===3){
        $("#image17").hide();
        $("#image18").hide();
        $("#image19").hide();
        $("#image20").show();
      } else {
          $("#image17").show();
          $("#image18").hide();
          $("#image19").hide();
          $("#image20").hide();
          $("#back5").hide();
      }

    });
    $('#back5').click(function() {
      if (project5click > 0) {
        project5click -=1;
      }
      console.log(project5click);
      if (project5click === 1) {
        $("#image17").hide();
        $("#image18").show();
        $("#image19").hide();
        $("#image20").hide();
      } else if (project5click ===2) {
        $("#image17").hide();
        $("#image18").hide();
        $("#image19").show();
        $("#image20").hide();
      } else if (project5click ===3){
        $("#image17").hide();
        $("#image18").hide();
        $("#image19").hide();
        $("#image20").show();
      } else {
          $("#image17").show();
          $("#image18").hide();
          $("#image19").hide();
          $("#image20").hide();
          $("#back5").hide();
      }
    });
}

var clickWork = function() {
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
    $(".contactInfo").addClass("hidden");
    $(".twoHeader").hide();
    $(".contactLastName").addClass("hidden");
  });
}
var clickAbout = function() {
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
    $(".contactInfo").addClass("hidden");
    $(".contactLastName").addClass("hidden");
  });
}
var clickContact = function() {
  $('#contact').click(function() {
    $(".spaceThree").removeClass("clicked");
    $(".spaceTwo").removeClass("clicked");
    $(".contactLastName").removeClass("hidden");
    $(".spaceOne").removeClass("notClicked");
    $(".spaceOne").addClass("clicked");
    $(".contactInfo").removeClass("hidden");
    $(".spaceThree").addClass("notClicked");
    $(".spaceTwo").addClass("notClicked");
    $(".logo").addClass("logoMoved");
    $(".projects").addClass("hidden");
    $(".logo").removeClass("logoMoved2");
    $(".aboutTaylor").addClass("hidden");

  });
}
var clickLogo = function() {
  $('.logo').click(function() {
    $(".spaceThree").removeClass("clicked").removeClass("notClicked");
    $(".spaceTwo").removeClass("clicked").removeClass("notClicked");
    $(".spaceOne").removeClass("notClicked").removeClass("clicked");
    $(".logo").removeClass("logoMoved");
    $(".logo").removeClass("logoMoved2");
    $(".projects").addClass("hidden");
    $(".aboutTaylor").addClass("hidden");
    $(".contactInfo").addClass("hidden");
    $(".contactLastName").addClass("hidden");
    $(".twoHeader").show();
  });
}

var scroll1 = function() {
  $('.scroll').click(function() {
    $('.spaceTwo').animate({
      scrollTop: $("#project2").offset().top -100
    }, 1500);
  });
}
var scroll2 = function() {
  $('.scroll2').click(function() {
    $('.spaceTwo').animate({
      scrollTop: $("#project3").offset().top +600
    }, 1500);
  });
}
var scroll3 = function() {
  $('.scroll3').click(function() {
    $('.spaceTwo').animate({
      scrollTop: $("#project4").offset().top +1300
    }, 1500);
  });
}
var scroll4 = function() {
  $('.scroll4').click(function() {
    $('.spaceTwo').animate({
      scrollTop: $("#project5").offset().top +2400
    }, 1500);
  });
}

$(document).ready(function() {

  clickWork();
  clickAbout();
  clickContact();
  clickLogo();

  scroll1();
  scroll2();
  scroll3();
  scroll4();

  project1gallery();
  project2gallery();
  project3gallery();
  project4gallery();
  project5gallery();

})
