var check = 0;
var x = 0;
var a = 0;
var y = 0;
var d = 0;
var c, imgObject, y, z;
var ctx1, ctx2, ctx3, ctx4, ctx5, ctx5, ctx6;
var game = 0;
var source;
var gamecheck = 0;
var new1 = 0;
var previous, current;
var new2 = 0;
var offset, offset1;
var p, m;
var checked;
var mult = 1;
var mult2 = 1;
var marleft;
var check2 = 0;
var gallerycheck;
var gallerycheck2 = 1;
var aboutcheck = 0;
var menucheck = 0;
var loader = 0;
var loadercounter = 0;
var extrachecker;
var pointerchecker = 0;
var superchecker;
var bug = 0;
var video = 0;
var rotcheck = 0;

/*ROTATION FUNCTION*/

function doOnOrientationChange() {
  document.getElementById('rsvp_form').style.marginTop = document.getElementById('nav').offsetHeight + 'px';
  document.getElementById('contact_form').style.marginTop = document.getElementById('nav').offsetHeight + 'px';

  marleft = $(window).width() * 4 * .005;
  marleft = marleft * 12;




  if ($(window).height() > $(window).width()) {



    if (rotcheck == 1) {

      $("#rotate").css("position", "fixed");
      $("#rotate").css("-webkit-transform", "rotate(0deg)");
      $("#rotate").css("-moz-transform", "rotate(0deg)");
      $("#rotate").css("-ms-transform", "rotate(0deg)");
      $("#rotate").css("-o-transform", "rotate(0deg)");
      $("#rotate").css("transform", "rotate(0deg)");
      $("#rotate").css("width", $(window).width() + 'px');
      $("#rotate").css("height", $(window).height() + 'px');
      $("#rotate").css("left", "0%");
      $("#rotate").css("top", "0%");
      $("#rotate").css("visibility", "visible");

      $(".nav-top").css("visibility", "hidden");
      $("#menu").css("visibility", "visible");

    } else {

      $("#rotate").css("-webkit-transform", "rotate(90deg)");
      $("#rotate").css("-moz-transform", "rotate(90deg)");
      $("#rotate").css("-ms-transform", "rotate(90deg)");
      $("#rotate").css("-o-transform", "rotate(90deg)");
      $("#rotate").css("transform", "rotate(90deg)");
      $("#rotate").css("position", "fixed");

      $("#rotate").css("left", (1 * ($(window).width() - $(window).height())) / 2 + 'px');
      $("#rotate").css("top", (-1 * ($(window).width() - $(window).height())) / 2 + 'px');
      $("#rotate").css("height", $(window).width() + 'px');
      $("#rotate").css("width", $(window).height() + 'px');
      $("#rotate").css("visibility", "visible");

      $(".nav-top").css("visibility", "visible");
      $("#menu").css("visibility", "hidden");
    }
  } else {


    if (rotcheck == 1) {
      $(".nav-top").css("visibility", "hidden");
      $("#menu").css("visibility", "visible");



    } else {
      $(".nav-top").css("visibility", "visible");
      $("#menu").css("visibility", "hidden");




    }


    $("#rotate").css("position", "fixed");
    $("#rotate").css("-webkit-transform", "rotate(0deg)");
    $("#rotate").css("-moz-transform", "rotate(0deg)");
    $("#rotate").css("-ms-transform", "rotate(0deg)");
    $("#rotate").css("-o-transform", "rotate(0deg)");
    $("#rotate").css("transform", "rotate(0deg)");
    $("#rotate").css("width", $(window).width() + 'px');
    $("#rotate").css("height", $(window).height() + 'px');
    $("#rotate").css("left", "0%");
    $("#rotate").css("top", "0%");
    $("#rotate").css("visibility", "visible");


  }
}




$(document).ready(function() {



  $(".movement").css('-webkit-transform', "translateX(0%)");
  $(".movement").css('-moz-transform', "translateX(0%)");
  $(".movement").css('-ms-transform', "translateX(0%)");
  $(".movement").css('-o-transform', "translateX(0%)");
  $(".movement").css('transform', "translateX(0%)");



  doOnOrientationChange();


  window.addEventListener('resize', doOnOrientationChange);




  $.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
      $("<img />").load(function() {
        loader++;
      }).attr("src", arguments[i]);
    }
  }




  $(".nav-top").css('z-index', 100);




  /*FUNCTION TRAILER EXIT*/

  $("body").click(function() {

    if (video == 1) {



      $("#videowrap").css('display', 'none');
      $("#blackout2").css('opacity', '0');


      var inter = setInterval(function() {



        $("#blackout2").css('display', 'none');

        $("#menu").css("pointer-events", "visible");


        clearInterval(inter);

      }, 500);


      $("#homepage").css('display', 'none');


      $(".icon").css("pointer-events", "visible");
      video = 0;
      var vidsrc = $("#video").attr('src');


      $("#video").attr('src', '');




    }

  });


  /*FUNCTION TRAILER OPEN*/


  $("#trailer").click(function() {

    $(".icon").css("pointer-events", "none");

    $("#menu").css("pointer-events", "none");


    $("#video").attr('src', "//www.youtube.com/embed/wWf4WTp0RAA?autoplay=1");

    $("#blackout2").css('display', 'block');

    var inter2 = setInterval(function() {



      $("#blackout2").css('opacity', '1');

      clearInterval(inter2);

    }, 50);



    $("#videowrap").css('display', 'block');

    $("#homepage").css('display', 'block');




    var intervalvideo = setInterval(function() {

      video = 1;

      clearInterval(intervalvideo);


    }, 300);



  });




  /*FUNCTIONS FOR MENU CLICKS*/

  $("#menu3,.nav-top #menu3").click(function() {

    rotcheck = 1;




    $(".movement").css("opacity", "0");

    var int = setInterval(function() {

      $(".movement").css('opacity', '1');
      /*$(".movement").css('-webkit-transform', "translateX(-200%)");
      $(".movement").css('-moz-transform', "translateX(-200%)");
      $(".movement").css('-ms-transform', "translateX(-200%)");
      $(".movement").css('-o-transform', "translateX(-200%)");
      $(".movement").css('transform', "translateX(-200%)");*/
      $('#rsvp').show();
      $('#contact1').hide();
      doOnOrientationChange();
      $("#button3").css('display', 'none');
      $("#button2").css('display', 'block');
      clearInterval(int);

    }, 500);



    var element = document.getElementById("chain");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("chain5");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementsByName("chainani")[0];
    element.style.webkitAnimationPlayState = "paused";

    element = document.getElementById("dust1");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("dust2");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("dust3");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementsByName("dustani")[0];
    element.style.webkitAnimationPlayState = "paused";




    $(".icon").css("pointer-events", "none");
    $("#icon7").css("pointer-events", "visible");



    $("#scene").parallax('disable');

    if ($(".movement").css("marginLeft") == -1 * $(window).width() * 3 + "px") {

    } else {




      $("#menu").css("pointer-events", "none");
      $("#bigcontainer").css("pointer-events", "visible");
    }




    $("#blackout").css('display', 'block');

    var inter5 = setInterval(function() {



      $("#blackout").css('opacity', '1');

      clearInterval(inter5);

    }, 50);



    var interval101 = setInterval(function() {



      $("#menu").css("pointer-events", "visible");
      $("#bigcontainer").css("pointer-events", "none");


      clearInterval(interval101);


    }, 500);




  });




  $("#menu5,.nav-top #menu5").click(function() {

    rotcheck = 1;



    $(".movement").css("opacity", "0");

    var int = setInterval(function() {

      $(".movement").css('opacity', '1');
      /*$(".movement").css('-webkit-transform', "translateX(-400%)");
      $(".movement").css('-moz-transform', "translateX(-400%)");
      $(".movement").css('-ms-transform', "translateX(-400%)");
      $(".movement").css('-o-transform', "translateX(-400%)");
      $(".movement").css('transform', "translateX(-400%)");*/
      doOnOrientationChange();
      $('#contact1').show();
      $('#rsvp').hide();

      $("#button2").css('display', 'none');
      $("#button3").css('display', 'block');

      clearInterval(int);

    }, 500);

    var element = document.getElementById("chain");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("chain5");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementsByName("chainani")[0];
    element.style.webkitAnimationPlayState = "paused";

    element = document.getElementById("dust1");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("dust2");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementById("dust3");
    element.style.webkitAnimationPlayState = "paused";
    element = document.getElementsByName("dustani")[0];
    element.style.webkitAnimationPlayState = "paused";




    $("#scene").parallax('disable');

    $(".icon").css("pointer-events", "none");
    $("#icon7").css("pointer-events", "visible");


    if ($(".movement").css("marginLeft") == -1 * $(window).width() * 5 + "px") {

    } else {




      $("#menu").css("pointer-events", "none");
      $("#bigcontainer").css("pointer-events", "visible");

    }



    $("#blackout").css('display', 'block');

    var inter7 = setInterval(function() {



      $("#blackout").css('opacity', '1');

      clearInterval(inter7);

    }, 50);




    var interval103 = setInterval(function() {




      $("#bigcontainer").css("pointer-events", "none");
      $("#menu").css("pointer-events", "visible");



      clearInterval(interval103);


    }, 500);

  });




  $(".nav-top #menu0,#menu0").click(function() {

    $("#menu").css("pointer-events", "none");

    rotcheck = 0;
    doOnOrientationChange();

    $("#button2,#button3").css('display', 'none');


    $(".movement").css("opacity", "0");



    var element = document.getElementById("chain");
    element.style.webkitAnimationPlayState = "running";
    element = document.getElementById("chain5");
    element.style.webkitAnimationPlayState = "running";
    element = document.getElementsByName("chainani")[0];
    element.style.webkitAnimationPlayState = "running";

    element = document.getElementById("dust1");
    element.style.webkitAnimationPlayState = "running";
    element = document.getElementById("dust2");
    element.style.webkitAnimationPlayState = "running";
    element = document.getElementById("dust3");
    element.style.webkitAnimationPlayState = "running";
    element = document.getElementsByName("dustani")[0];
    element.style.webkitAnimationPlayState = "running";




    $(".movement").css({
      marginLeft: '0%'
    });

    $(".movement").css('-webkit-transform', "translateX(0%)");
    $(".movement").css('-moz-transform', "translateX(0%)");
    $(".movement").css('-ms-transform', "translateX(0%)");
    $(".movement").css('-o-transform', "translateX(0%)");
    $(".movement").css('transform', "translateX(0%)");




    $("#blackout").css('opacity', '0');

    var inter8 = setInterval(function() {



      $("#blackout").css('display', 'none');

      $("#menu").css("pointer-events", "visible");

      clearInterval(inter8);

    }, 500);


    $("#scene").parallax('enable');




    $(".icon").css("pointer-events", "visible");




  });




  /*ICON HOVER FUNCTIONS*/
  $(".icon").mouseover(function() {
    $(this).children(".hide").fadeTo(300, 1);
    $(this).children(".show").fadeTo(300, 0);
  });

  $(".icon").mouseout(function() {
    $(this).children(".show").fadeTo(300, 1);
    $(this).children(".hide").fadeTo(300, 0);
  });

  $("form#input2").submit(function(e) {
    e.preventDefault();
  });

  $("textarea#select2,textarea#textarea").focus(function(e) {
    e.preventDefault();
  });

});

(function(){
  'use strict'

  function isTouchDevice(){
    try{
      document.createEvent("TouchEvent");
      return true;
    }catch(e){
      return false;
    }
  }


  function touchScroll(id){
    if(isTouchDevice()){ //if touch events exist...
      var el=document.getElementById(id);
      var scrollStartPos=0;
      // console.log(document.getElementById('nav').offsetHeight)
      el.style.marginTop = document.getElementById('nav').offsetHeight + 'px';
   
      el.addEventListener("touchstart", function(event) {
        scrollStartPos=-parseInt(this.style.marginTop.split('px')[0])+event.touches[0].pageY;
        // event.preventDefault();
      },false);
   
      el.addEventListener("touchmove", function(event) {
        var dy = -(scrollStartPos-event.touches[0].pageY);
        if (dy > document.getElementById('menu').offsetHeight) {
          dy = document.getElementById('menu').offsetHeight;
        } else if (dy <= -(this.offsetHeight - window.innerHeight)) {
          dy = -(this.offsetHeight - window.innerHeight);
        }
        // console.log(dy, -(this.offsetHeight - window.innerHeight))
        this.style.marginTop = dy + 'px';
        // event.preventDefault();
      },false);
    }
  }

  $(document).ready(function() {
    // alert(isTouchDevice());
    touchScroll('contact_form');
    touchScroll('rsvp_form');
  });

})();
