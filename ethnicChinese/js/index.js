$(".myNav ul>li").hover(function(){
	$(this).children("ul").show().parent("li").siblings("li").children("ul").hide()
});
$(".myNav").mouseleave(function(){
	$(".myNav ul>li>ul").hide()
})
