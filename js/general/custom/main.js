$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";

	resize();
	$(window).on("resize", resize);
	$(window).on("scroll", resize);

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

	$("#collapseParent").on("show.bs.collapse", function() {
		$("#arrowHead").css("display", "none");
	});

	$("#collapseParent").on("shown.bs.collapse", function() {
		$("#arrowBody").css("height", $(".actions").css("height"));
		$("#arrowHead").css("display", "inline");
	});

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 10;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#cc3399", borderColor: "#cc3399"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#cccc33", borderColor: "#cccc33"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#cc3333", borderColor: "#cc3333"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#9933cc", borderColor: "#9933cc"},
		ease:Back.easeOut
	});
	
	var actionTL = new TimelineMax({paused : true, onComplete : nextStep});
	
	var itemsSelector = $(".items");

	actionTL.from(itemsSelector, 1, {
		alpha : 0,
		scale : 5,
		ease : SlowMo.ease.config(0.1, 0.1, false)
	});

	actionTL.play();

	setTimeout(afterload, 1000);
});

function afterload() {
	$("#arrowBody").css("opacity", "1");
	$("#arrowBody").css("height", $(".actions").css("height"));
	
	var arrowTL = new TimelineMax();

	arrowTL.from($("#arrowBody"), 5, {
		height : 0
	})
	.to($("#arrowHead"), 1.5, {
		alpha : 1
	});
}

function nextStep() {
	$(".anchor2").css("display", "block");
}