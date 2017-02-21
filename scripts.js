
  //Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	//Facebook
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
	//Map

      function initMap() {
      	var myLatLng = {lat: 40.586098, lng: -73.9585167};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 9
        });
        var marker = new google.maps.Marker({
        	position: myLatLng,
        	map: map,
        	title: 'Hello World!'
        });
      }

$(document).ready(function(){
	
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
	});

	  // Stellar
	

	  // Tooltips
	$(function () {
	    $('[data-toggle="tooltip"]').tooltip();
	});
		// Message box
	$('#button').on('click', function(){
		// console.log('clicked');
		var comment = $('#boxText').val();
		if (comment === "") {
			$("#boxText").css("border", "2px solid red");
		} else {
		// console.log(comment);
			$('#visible-comment').html(comment);
			$('#boxText').hide(1125, function(){
			alert("Thank you for the message!")
			});
		};
		return false;
	});
		 // KeyUp
	$('.boxText').on("keyup", function() {
		var charCount = $('.boxText').val().length;
		console.log(charCount);
		$("#char-count").html(charCount);
		if(charCount > 50) {
      		$("#char-count").css("color", "red");
		} else {
       		$("#char-count").css("color", "black");
			};
	});
	// work section
	for(var i = 0; i < works.length; ++i ) {
		$("#work").append("\
			<div class='col-md-4 col-xs-6'>\
			      <a href='" + works[i].url + "' class='work-img'>\
            		<img class='img-responsive' src='" + works[i].pic + "'>\
            		<span class='info'><p class='proj-title'>Title: " + works[i].title + "</p></span>\
             	 </a>\
            </div>\
          ");
		var images = $('#works img');
      if (i % 2 === 0) {
      $(images[i]).css('box-shadow', '3px 3px 5px black');
      } else {
      $(images[i]).css('box-shadow', '3px 3px 5px black');
      }
		$(".work-img").mouseenter( function() {
  			 $(".info", this).show();
  			}).mouseleave (function(){
  			 $(".info", this).hide();
		});
	};

 });
