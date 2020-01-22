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