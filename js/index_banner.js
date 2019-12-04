$(function(){

	var $banner=$("#banner li");
	var len=$banner.length;
	var index=0;
	var adTimer=null;

	$banner.click(function(){
		index=$banner.index(this);
		showxList(index);
	}).eq(0).click();
	//鼠标滑入停止动画，滑出开始动画
	$('#banner').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showxList(index);
			index++;
			if(index==len){index=0;}
		},2500);//定时器
	}).trigger("mouseleave");

	setInterval("wh()",100);//定时器可以重复循环执行方法
	//检查宽度，把图片放到中间

})

//显示不同的模块
function showxList(index){
	var $rollobj=$(".bn");
	$("#banner li").eq(index).addClass("bannerxz")
	 			  .siblings().removeClass("bannerxz");
	$("#banner .banimg a").eq(index).show().animate({opacity: 1},500)
					.siblings().hide().animate({opacity: 0},0);
}

function wh(){
		var bannerW=$("#banner").width();
		var imgl=(1903-bannerW)/2;
		$(".banimg").css('left', -imgl);
}