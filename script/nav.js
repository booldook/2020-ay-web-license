$(".header .navi").mouseover(function(){
	$(this).find("ul").stop().slideDown(300);
});
$(".header .navi").mouseleave(function(){
	$(this).find("ul").stop().slideUp(300);
});

$(".header2 .navi-wrap").mouseover(function(){
	$(this).find(".subs").stop().slideDown(300);
});
$(".header2 .navi-wrap").mouseleave(function(){
	$(this).find(".subs").stop().slideUp(300);
});

$(".header3 .navi").mouseover(function(){
	$(".header3").find(".navi-wrap").stop().slideDown(300);
});
$(".header3").mouseleave(function(){
	$(this).find(".navi-wrap").stop().slideUp(300);
});

var now = 0;
//setInterval(ani, 4000);
$(".prev").click(function(){
	if(now > 0) {
		now--;
		ani();
	}
});
$(".next").click(function(){
	if(now < 2) {
		now++;
		ani();
	}
});
function ani() {
	$(".ban").stop().fadeOut(500);
	$(".ban").eq(now).stop().fadeIn(500);
	/* $(".ban").stop().animate({"opacity": 0}, 500);
	$(".ban").eq(now).stop().animate({"opacity": 1}, 500); */
}