$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";

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
				$("#arrowBody").css("height", $(".actions").css("height"));
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$("#arrowBody").css("height", $(".actions").css("height"));
			}
		}
		ori_width = width;
	}
	
	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 10;

	fontTL.to($(".datatime"), fTLTime, {
		css : {color : "#cc3399", borderColor: "#cc3399"},
		ease:Back.easeOut
	})
	.to($(".datatime"), fTLTime, {
		css : {color : "#cccc33", borderColor: "#cccc33"},
		ease:Back.easeOut
	})
	.to($(".datatime"), fTLTime, {
		css : {color : "#cc3333", borderColor: "#cc3333"},
		ease:Back.easeOut
	})
	.to($(".datatime"), fTLTime, {
		css : {color : "#9933cc", borderColor: "#9933cc"},
		ease:Back.easeOut
	});
});

window.onload = function afterload() {
	$("#arrowBody").css("height", $(".actions").css("height"));
	var actionTL = new TimelineMax({paused : true});
	var arrowTL = new TimelineMax();

	var itemsSelector = $(".items");

	itemsSelector.sort(function(a, b) {
		var aVal = $(a).attr("id").substring(2, $(a).attr("id").length);
		var bVal = $(b).attr("id").substring(2, $(b).attr("id").length);

		if (parseInt(aVal) < parseInt(bVal)) {return 1;}
		if (parseInt(aVal) > parseInt(bVal)) {return -1;}
	});

	$.each(itemsSelector, function(key, value) {
		actionTL.from($(this), 0.5, {
			alpha : 0,
			scale : 5,
			ease : SlowMo.ease.config(0.1, 0.1, false)
		},"-=0.3");
	});

	arrowTL.from($("#arrowHead"), 1, {
		alpha : 0
	})
	.from($("#arrowBody"), 3, {
		height : 0
	});

	actionTL.play();
}