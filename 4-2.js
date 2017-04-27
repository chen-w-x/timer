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
		if (scrtop<800) {
			$('.pic1').show(500).animate({'margin-left':'3px'},500)
			$('.pic4').show(500).animate({'margin-left':'3px'},500)
			setTimeout(function(){
				$('.pic2').show(500).animate({'margin-left':'40px'},500)
				$('.pic5').show(500).animate({'margin-left':'40px'},500)
			},500);
			setTimeout(function(){
				$('.pic3').show(500).animate({'margin-left':'40px'},500)
				$('.pic6').show(500).animate({'margin-left':'40px'},500)
			},1000);

		}
		if (scrtop>650){
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

					$('.pic1').show(500).animate({'margin-left':'3px'},500)
					$('.pic4').show(500).animate({'margin-left':'3px'},500)
					setTimeout(function(){
						$('.pic2').show(500).animate({'margin-left':'40px'},500)
						$('.pic5').show(500).animate({'margin-left':'40px'},500)
					},500);
					setTimeout(function(){
						$('.pic3').show(500).animate({'margin-left':'40px'},500)
						$('.pic6').show(500).animate({'margin-left':'40px'},500)
					},1000);
				}
			},200);
		}

	$('.close').on('click',function(){
		$('.max').css('display','none');
	});

	// 点击显示对应的图片，↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	$('.dm').each(function(index,obj){

		$(obj).on('click',function(){
			
			console.log(index);
			$('.max').css('display','block');
			var wd = $('.picbox ').width();
			// console.log(index);
			$('.picbox>ul').css({left:-index*wd+'px'});
			// 点击图片右移动↓↓↓↓↓↓↓↓↓
				var num=index;
			$('.lt>span').on('click',function(){
				num-=1;
				if (num<=0) {
					$('.picbox>ul').css({left:-($('.picbox li').length-1)*wd+'px'});
					num=$('.picbox li').length-1;
				}$('.picbox>ul').css({left:-num*wd+'px'});
			});

			//点击图片左移动↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
			$('.rt>span').on('click',function(){
				num+=1;
				if (num>($('.picbox li').length-1) ){
					$('.picbox>ul').css('left','0');
					num=1;
				}
				$('.picbox>ul').css({left:-num*wd+'px'});
			});
		});
	});

	$('.page').on({mouseover:function(){
			$('.pag').stop().slideDown();
		},
		mouseleave:function(){
			$('.pag').stop().slideUp();
		}
	});

	$('.blo').on({'mouseover':function(){
		$('.blg').stop().slideDown();
		},
	'mouseleave':function(){
		$('.blg').stop().slideUp();
		}
	});
});
