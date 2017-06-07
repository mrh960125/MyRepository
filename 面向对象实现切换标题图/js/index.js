;(function(){
	var Carousel=function(poster){
//		获取单个配置参数
		var self=this;
		this.poster=poster;
		this.posterItemMain=poster.find("ul.poster-list");
		this.nextBtn=poster.find("div.poster-btn-next");
		this.prevBtn=poster.find("div.poster-btn-prev");
		this.posterItems=poster.find("li.poster-item");
		this.posterFirstItem=this.posterItems.first();
		this.posterLastItem=this.posterItems.last();
		this.rotateFlag=true;
		this.setting={
			"width":1000,
			"height":200,
			"posterWidth":600,
			"posterHeight":200,
			"speed":500,
			"scale":0.9,
			"verticalAlign":"middle",
			"autoPlay":true,
			"delay":500
		};
		$.extend(this.setting,this.getSetting());
		this.setSettingValue();
		this.setPosterPos();
		this.nextBtn.click(function(){
			if(self.rotateFlag==true){
				self.rotateFlag=false;
				self.carouseRotate("left")
			}
			
		});
		this.prevBtn.click(function(){
			if(self.rotateFlag==true){
				self.rotateFlag=false;
				self.carouseRotate("right")
			}
		});
		if(this.setting.autoPlay==true){
			this.autoPlay();
			this.poster.hover(function(){
				window.clearInterval(self.timer)
			},function(){
				self.autoPlay();
			})
			
		}
	};
	
	
	Carousel.prototype={
		autoPlay:function(){
			var self=this;
			this.timer=window.setInterval(function(){
				self.nextBtn.click();
			},self.setting.delay)
		},
//		旋转函数
 		carouseRotate:function(dir){
 			var _this_=this;
 			var setIndex=[];
// 			var setHeight=[];
// 			var setTop=[];
 			if (dir==="left") {
 				this.posterItems.each(function(){
 				 var self=$(this),
 				 	prev=self.prev().get(0)?self.prev():_this_.posterLastItem,
 				 	width=prev.width(),
 				 	height=prev.height(),
 				 	zIndex=prev.css("zIndex"),
 				 	opacity=prev.css("opacity"),
 				 	left=prev.css("left"),
 				 	top=prev.css("top");
 				 	setIndex.push(zIndex);
// 				 	setHeight.push(height);
// 				 	setTop.push(top);
 				 	self.animate({
   				 		
   				 		opacity:opacity,
 				 		width:width,
   				 		height:height,
 				 		left:left,
 				 		top:top,
// 				 		zIndex:zIndex
 				 		
 				 	},_this_.setting.speed,function(){
 				 		_this_.rotateFlag=true;
 				 	})
 				 	
 				});
 				this.posterItems.each(function(i){
 					$(this).css({
   						zIndex:setIndex[i],
// 						height:setHeight[i]
 					})
 				});
// 				this.posterItems.each(function(i){
// 					$(this).css({
// 						height:setHeight[i]
// 					})
// 				});
 				
 				
 				
 				
 			} else if(dir==="right"){
 				this.posterItems.each(function(){
 				 var self=$(this),
 				 	next=self.next().get(0)?self.next():_this_.posterFirstItem,
 				 	width=next.width(),
 				 	height=next.height(),
 				 	zIndex=next.css("zIndex"),
 				 	opacity=next.css("opacity"),
 				 	left=next.css("left"),
 				 	top=next.css("top");
 				 	setIndex.push(zIndex);
 				 	self.animate({
   				 		
   				 		opacity:opacity,
 				 		width:width,
   				 		height:height,
 				 		left:left,
 				 		top:top,
// 				 		zIndex:zIndex
 				 		
 				 	},_this_.setting.speed,function(){
 				 		_this_.rotateFlag=true;
 				 	})
 				 	
 				});
 				this.posterItems.each(function(i){
 					$(this).css({
 						zIndex:setIndex[i]
 					})
 				});
// 				this.posterItems.each(function(i){
// 					$(this).css({
// 						height:setHeight[i]
// 					})
// 				});
// 				this.posterItems.each(function(i){
// 					$(this).css({
// 						zIndex:setIndex[i]
// 					})
// 				});
 			}
 		},
//		设置剩余广告位置
		setPosterPos:function(){
			var sliceItems=this.posterItems.slice(1),
			    sliceSize=sliceItems.length/2,
			    rightSlice=sliceItems.slice(0,sliceSize),
			    level   =Math.floor(this.posterItems.length/2),
			    rw=this.setting.posterWidth,
			    rh=this.setting.posterHeight,
			    scale=this.setting.scale,
			    gap=((this.setting.width-this.setting.posterWidth)/2)/level,
			    firstLeft=(this.setting.width-this.setting.posterWidth)/2,
			    fixOffsetLeft=firstLeft+rw,
				settingHeight=this.setting.height;
			    
			var leftSlice=sliceItems.slice(sliceSize);
		
//			    设置右边的位置关系
			    rightSlice.each(function(i){
			    	level--;
			    	rw=rw*scale;
			    	rh=rh*scale;
			    	var j=i;
			    	
			    	$(this).css({
			    		zIndex:level,
			    		width:rw,
			    		height:rh,
			    		opacity:1/(++i),
			    		left:fixOffsetLeft+(++j)*gap-rw,
			    		top:(settingHeight-rh)/2
//						top:setVertucalAlign(lh)
			    	})
			    	
			    	
			    })
//			    设置左边的位置关系
				var lw=rightSlice.last().width(),
				    lh=rightSlice.last().height(),
				    oloop=Math.floor(this.posterItems.length/2);
				   
			    leftSlice.each(function(i){
			    	$(this).css({
			    		zIndex:i,
			    		width:lw,
			    		height:lh,
			    		opacity:1/oloop,
			    		left:i*gap,
			    		top:(settingHeight-lh)/2
//			    		top:setVertucalAlign(lh)
			    	})
			    	lw=lw/scale;
			    	lh=lh/scale;
			    	oloop--;
			    	
			    })
			    
		},
//		设置高度值
         setVertucalAlign:function(height){
        	var alignNum=this.setting.verticalAlign,
        		settingHeight=this.setting.height;
        	
        	if(alignNum=="top"){
        		return 0;
        	}else if(alignNum=="bottom"){
        		return settingHeight-height;
        	}else if(alignNum=="middle"){
        		return (settingHeight-height)/2;
        	}else{
        		return (settingHeight-height)/2;
        	}
        },
//		设置初始宽度高度值
		setSettingValue:function(){
			
			this.poster.css({
							width:this.setting.width,
							height:this.setting.height,
							
						});
			this.posterItemMain.css({
							width:this.setting.width,
							height:this.setting.height,
				});
			var w=(this.setting.width-this.setting.posterWidth)/2;
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.length/2)
			})
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.length/2)
			});
			this.posterFirstItem.css({
				left:w,
				zIndex:Math.floor(this.posterItems.length/2),
				width:this.setting.posterWidth,
				height:this.setting.posterHeight
			})
		},
		
//			获取人工配置参数
		getSetting:function(){
			var setting=this.poster.attr("data-setting");
			if (setting&&setting!="") {
				return $.parseJSON(setting)
			} else{
				return {}
			}
		}
	};
	
	Carousel.init=function(posters){
		var _this_=this;
		posters.each(function(){
			new _this_($(this))
		})
	}
	window["Carousel"]=Carousel;
	}
)(jQuery)
