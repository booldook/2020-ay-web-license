$(".navi").mouseover(function(){
	$(this).find("ul").stop().slideDown(500);
});
$(".navi").mouseleave(function(){
	$(this).find("ul").stop().slideUp(500);
});

var now = 0;
setInterval(ani, 4000);
function ani() {
	if(now == 2) now = 0;
	else now++;
	$(".slides").stop().animate({"left":(-1000*now)+"px"}, 500);
}