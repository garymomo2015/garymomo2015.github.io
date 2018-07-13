$(document).ready(function() {
	var optionNum = $("#datatimeNum");

	$(".glyphicon-triangle-left").on("click", function() {
		var num = parseInt(optionNum.text());
		num--;
		if (num < 1) {
			num = 12;
		}
		optionNum.text(num);
		$("#datatimeGo").attr("href", "#month" + num.toString());
	});

	$(".glyphicon-triangle-right").on("click", function() {
		var num = parseInt(optionNum.text());
		num++;
		if (num > 12) {
			num = 1;
		}
		optionNum.text(num);
		$("#datatimeGo").attr("href", "#month" + num.toString());
	});

	
});