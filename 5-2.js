$(document).ready(function () {
	var scrtop;
	$(window).scroll(function(){
		scrtop = $(window).scrollTop();
		console.log(scrtop)


		//下面是判断页面是否发生滚动，触发导航栏高度变化
		if (scrtop > 0){
			$('header').stop().animate({'padding':'10px 0'},100);
		}
		if(scrtop == 0){
			
			$('header').stop().animate({'padding':'20px 0'},100);
		}

		if (scrtop<800) {
			$('.fist').stop().slideDown(900)
		}
		if(scrtop>500&&scrtop<1400){
			$('.second').stop().slideDown(900);	
			
		}
		if(scrtop>1100&&scrtop<2000){
			$('.last').stop().slideDown(900);	
			
		}
		if(scrtop>1800){
			$('.ft1t').stop().slideDown(1000);	
			setTimeout(function(){
				$('#m5btn').stop().slideDown(1500);
			},500);
			
		}
	});
	ftime();
		function ftime(){
			// alert()
			setTimeout(function() {
				if (scrtop<800||scrtop==null) {

					$('.fist').stop().slideDown(900);
				}
			},200);
		}



	$('.page').on({'mouseover':function(){
		$('.pag').stop().slideDown()
		},
	'mouseleave':function(){
		$('.pag').stop().slideUp()	
		}
	});

	$('.blo').on({'mouseover':function(){
		$('.blg').stop().slideDown()
		},
	'mouseleave':function(){
		$('.blg').stop().slideUp()	
		}
	});
});	