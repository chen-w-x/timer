$(document).ready(function () {
	var scrtop;
	$(window).scroll(function(){
		scrtop = $(window).scrollTop();
		// console.log(scrtop)


		//下面是判断页面是否发生滚动，触发导航栏高度变化
		if (scrtop > 0){
			$('header').stop().animate({'padding':'10px 0'},100);
		}
		if(scrtop == 0){
			
			$('header').stop().animate({'padding':'20px 0'},100);
		}

		if (scrtop<450) {
			$('.main b').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});
			setTimeout(function(){
			$('.main h1').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});

			},500);
			setTimeout(function(){
			$('.main p').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});

			},1000)
			setTimeout(function(){
			$('.main a').css({'opacity':'1','transform':'translateY(-30px)','transition':'all 1s'});

			},1500)	
		}
		if(scrtop>200){
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
				if (scrtop<450||scrtop==null) {
					$('.main b').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});
					setTimeout(function(){
						$('.main h1').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});

					},500);
					setTimeout(function(){
						$('.main p').css({'opacity':'1','transform':'translateY(-40px)','transition':'all 1s'});

					},1000);
					setTimeout(function(){
						$('.main a').css({'opacity':'1','transform':'translateY(-30px)','transition':'all 1s'});

					},1500);
					
				}
			},200);
		}
	//导航小菜单滑出
	$('.page').on({mouseover:function(){
			$('.pag').stop().slideDown()
		},
		mouseleave:function(){
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

})	