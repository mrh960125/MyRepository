$(function(){
	$(".st-container input").click(cli)
	$(".st-container input:checked").next("a").addClass("abg");
	$("#st-panel-1 h2").addClass("anmh");
	$("#st-panel-1 h2").on("animationend",function(){
		$(this).removeClass("anmh")
	})
	$("#st-panel-1 p").addClass("anmhtwo");
	$("#st-panel-1 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})
	
	
})
function cli(){
	
		$(this).next("a").addClass("abg");
		$(this).next("a").siblings().removeClass("abg");
		var num=$(this).index();
		
		if(num==0){
			$("#st-panel-1 h2").addClass("anmh");
			$("#st-panel-1 p").addClass("anmhtwo");
			$(".st-scroll").addClass("st-scrollone");
			$(".st-scroll").removeClass("st-scrollotwo st-scrollthree st-scrollfour st-scrollfive");
			$("#st-panel-1 h2").on("webkitAnimationEnd", function(){ 
				$(this).removeClass("anmh")
			$("#st-panel-1 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})
})
			
		}
		else if(num==2){
			$("#st-panel-2 h2").addClass("anmh");
			$("#st-panel-2 p").addClass("anmhtwo");
			$(".st-scroll").addClass("st-scrollotwo")
			$(".st-scroll").removeClass("st-scrollone st-scrollthree st-scrollfour st-scrollfive");
			$("#st-panel-2 h2").on("webkitAnimationEnd", function(){ 
     $(this).removeClass("anmh")
})
			$("#st-panel-2 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})
		}
		else if(num==4){
				$("#st-panel-3 h2").addClass("anmh");
				$("#st-panel-3 p").addClass("anmhtwo");
			$(".st-scroll").addClass("st-scrollthree")
			$(".st-scroll").removeClass("st-scrollotwo st-scrollone st-scrollfour st-scrollfive");
			$("#st-panel-3 h2").on("webkitAnimationEnd", function(){ 
      $(this).removeClass("anmh")
} )
		  $("#st-panel-3 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})
		}
		else if(num==6){
			$("#st-panel-4 h2").addClass("anmh");
			$("#st-panel-4 p").addClass("anmhtwo");
			$(".st-scroll").addClass("st-scrollfour")
			$(".st-scroll").removeClass("st-scrollotwo st-scrollthree st-scrollone st-scrollfive");
			$("#st-panel-4 h2").on("webkitAnimationEnd", function(){ 
  $(this).removeClass("anmh")
})
	$("#st-panel-4 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})		
		}
		else if(num==8){
			$("#st-panel-5 h2").addClass("anmh");
			$("#st-panel-5 p").addClass("anmhtwo");
			$(".st-scroll").addClass("st-scrollfive")
			$(".st-scroll").removeClass("st-scrollotwo st-scrollthree st-scrollfour st-scrollone");
			$("#st-panel-5 h2").on("animationend", function(){ 
    $(this).removeClass("anmh")

})
	$("#st-panel-5 p").on("animationend",function(){
		$(this).removeClass("anmhtwo")
	})		
		}
		
		

}


