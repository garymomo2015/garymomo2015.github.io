$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	// initial tab for IE problem
	$(".nav-tabs a:eq(0)").trigger("click");
	$(".nav-tabs a:eq(1)").trigger("blur");

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
				$(".music-intro-dummy-1").show();
				$(".music-intro-dummy-2").show();
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$(".music-intro-dummy-1").hide();
				$(".music-intro-dummy-2").hide();
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 8;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	$(".music-cover").on("click tap", function() {
		$(this).addClass("animated zoomOutLeft").one(animationEnd, function() {
			$(this).hide();
			var target = $(this).parents(".music-items").find(".music-intro-1");
			target.show();
			target.addClass("animated fadeInLeft");
			target = $(this).parents(".music-items").find(".music-intro-2");
			target.show();
			target.addClass("animated fadeInLeft");
			target = $(this).parents(".music-items").find(".music-intro-3");
			target.show();
			target.addClass("animated fadeInRight");
			resize();
			$("html, body").animate({scrollTop: $("#" + $(this).parents(".music-items").attr("id")).offset().top}, 500);
		});
	});
	
	$(".music-extra-back a").on("click tap", function() {
		var urlParam = window.location.search.split("back=")[1] ? window.location.search.split("back=")[1] : "no";

		if (urlParam != "no") {
			var mainClass = urlParam.split("-")[0] ? urlParam.split("-")[0] : "no";
			var subClass = urlParam.split("-")[1] ? urlParam.split("-")[1] : "no";
			var itemClass = urlParam.split("-")[2] ? urlParam.split("-")[2] : "no";
			if (mainClass != "no" && subClass != "no" && itemClass != "no") {
				var targetClass = "";
				if (mainClass == "") {
					
				} else {
					targetClass = "music";
				}
				if (subClass == "2016") {
					location.replace("https://garymomo" + subClass + ".github.io/redirection/" + targetClass + "?item=" + itemClass);
				} else {
					location.replace("https://garymomo" + subClass + ".github.io/" + targetClass + "?item=" + itemClass);
				}
			} else {
				location.replace("https://garymomoindex.github.io/?visit=true");
			}
		} else {
			location.replace("https://garymomoindex.github.io/?visit=true");
		}
	});
});

$(window).on("load", function() {
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	$(".loader").hide();

	var borderTL = new TimelineMax({onComplete : nextStep});

	borderTL.to($(".music-extra-box"), 0.5, {
		alpha : 0.5
	})
	.to($(".music-extra-box"), 0.1, {
		alpha : 0
	}, "+=0.5")
	.to($(".music-extra-box"), 0.8, {
		alpha : 1
	});

	function nextStep() {
		$(".music-extra-items").css("opacity", "1");
		$(".music-extra-title").css("animation-duration", "1s").addClass("animated fadeInDown");
		$(".music-extra-audit").css("animation-duration", "1s").addClass("animated fadeInRight");
		$(".music-extra-video").css("animation-duration", "1s").addClass("animated zoomIn");
		$(".music-extra-detail").css("animation-duration", "1s").addClass("animated fadeInUp");
	}
});