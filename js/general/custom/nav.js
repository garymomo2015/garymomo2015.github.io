document.writeln("<nav class='navbar navbar-default'>");
document.writeln("	<div class='container-fluid'>");
document.writeln("		<div class='navbar-header'>");
document.writeln("			<button type='button' class='navbar-toggle' id='navbar-toggle-custom' data-toggle='collapse' data-target='#momoNavbar'>");
document.writeln("				<span class='icon-bar'></span>");
document.writeln("				<span class='icon-bar'></span>");
document.writeln("				<span class='icon-bar'></span>");
document.writeln("			</button>");
document.writeln("			<a class='navbar-brand' href='https://ppt.cc/f8kymx'>回首頁圖</a>");
document.writeln("		</div>");
document.writeln("		<div class='collapse navbar-collapse' id='momoNavbar'>");
document.writeln("			<ul class='nav navbar-nav'>");

document.writeln("				<li class='dropdown'>");
document.writeln("					<a class='dropdown-toggle' data-toggle='dropdown'>穿越 -時-<span class='caret'></span></a>");
document.writeln("					<ul class='dropdown-menu' id='momoNavTime'>");
document.writeln("						<li><a href='https://ppt.cc/f8FQGx'>2018 -守護四葉-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fLylvx'>2017 -綠意青春-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fnI0tx'>2016 -自由獨行-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/f3qmxx'>2015 -影音勇進-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fxHgdx'>2014 -飛躍國立-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fxxY7x'>2013 -反轉次元-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/f6yoHx'>2012 -決戰紅白-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fyJsgx'>2011 -五境革命-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fYhC4x'>2010 -突圍怪盜-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/f4E9bx'>2009 -舟車苦行-</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fVlANx'>2008 -破土萌芽-</a></li>");
document.writeln("					</ul>");
document.writeln("				</li>");

document.writeln("				<li class='dropdown'>");
document.writeln("					<a class='dropdown-toggle' data-toggle='dropdown'>四葉 -絆-<span class='caret'></span></a>");
document.writeln("					<ul class='dropdown-menu' id='momoNavMember'>");
document.writeln("						<li><a href='https://ppt.cc/f5vNMx'>-若大將- 玉井詩織</a></li>");
document.writeln("						<li><a href='https://ppt.cc/f10c4x'>-太陽神- 百田夏菜子</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fHJiBx'>-BOSS- 佐佐木彩夏</a></li>");
document.writeln("						<li><a href='https://ppt.cc/fy4yLx'>-鋼鐵娘- 高城蕾妮</a></li>");
document.writeln("					</ul>");
document.writeln("				</li>");

document.writeln("				<li class='dropdown'>");
document.writeln("					<a class='dropdown-toggle' data-toggle='dropdown'>傾聽 -音-<span class='caret'></span></a>");
document.writeln("					<ul class='dropdown-menu'>");
document.writeln("						<li class='dropdown-submenu'><a>依年份<span class='caret'></span></a>");
document.writeln("							<ul class='dropdown-menu'>");
document.writeln("								<li><a href='https://ppt.cc/fz0ihx'>&nbsp;&nbsp;&nbsp;2018</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2017</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2016</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2015</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2014</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2013</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2012</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2011</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2010</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2009</a></li>");
document.writeln("								<li><a>&nbsp;&nbsp;&nbsp;2008</a></li>");
document.writeln("							</ul>");
document.writeln("						</li>");
document.writeln("						<li><a>依曲風</a></li>");
document.writeln("					</ul>");
document.writeln("				</li>");

document.writeln("				<li><a href='https://ppt.cc/f6qcZx'>情報 -繫-</a></li>");
document.writeln("				<li><a href='https://ppt.cc/fad5xx'>關於</a></li>");
document.writeln("			</ul>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</nav>");

$(document).ready(function() {
	$(".dropdown-submenu>a").on("click tap", function(e) {
		$(this).next("ul").toggle();
		e.stopPropagation();
	});

	$('#momoNavbar').on("hide.bs.dropdown", function () {
		$(".dropdown-submenu .dropdown-menu").hide();
	});
});