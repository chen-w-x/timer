
$(document).ready(function () {
	var scrtop;
	var top1;
	var top
	$(window).scroll(function(){
		scrtop = $(window).scrollTop()+300;
		top=$(window).scrollTop();
		//下面是判断页面是否发生滚动，触发导航栏高度变化
		if (scrtop > 300){
			$('header').stop().animate({'padding':'10px 0'},100);
		}
		if(scrtop == 300){
			$('header').stop().animate({'padding':'20px 0'},100);
		}	
	
		//获取每个大div距离顶部的距离↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		top1 = $('.mainb>div').eq(1).offset().top;
		var top2 = $('.mainb>div').eq(2).offset().top;
		var top3 = $('.mainb>div').eq(3).offset().top;
		var top4 = $('.mainb>div').eq(4).offset().top;
		// console.log(top1)
		// console.log(scrtop)
		// var top5 = $('.mainb>div').eq(5).offset().top;
		// var top6 = $('.mainb>div').eq(6).offset().top;



		if (scrtop<top1&&scrtop>=300) {
			$('.main11').slideDown(1000);
		}
		if(scrtop>top1&& scrtop<top2){
			$('.abt h3').stop().fadeIn(500);
			setTimeout(function(){
				$('.abt p').stop().slideDown(500);
				$('.m2abm img').stop().show(500);
			},600);
		}
		if(scrtop>top2&& scrtop<top3){
			$('.m3t h1').stop().slideDown(500);
			setTimeout(function(){
				$('.m3t h5').stop().slideDown(500);
				$('.m3p ul').stop().slideDown(800);
			},600);
			setTimeout(function(){
				$('.m3p li').stop().slideDown(1500);
			},700);
		}
		if(scrtop>top3&& scrtop<top4){
			$('.m4t h1').stop().slideDown(500);
			setTimeout(function(){
				$('.m4t h5').stop().slideDown(500);
			},600);
			setTimeout(function(){
				$('.m4p li').stop().show(1500);
			},1000);
		}
		if(scrtop>top4){
			$('.m5t h1').stop().slideDown(500);
			setTimeout(function(){
				$('.m5t h5').stop().slideDown(500);
			},600);
			setTimeout(function(){
				$('#m5btn').stop().slideDown(500);
			},1000);
		}

	})
	ftime();
		function ftime(){
			// alert()
			setTimeout(function() {
				if (scrtop<top1||top==null) {

					$('.main11').slideDown(1000);
				}
			},200);
		}
		
	//导航栏小菜单↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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

	//蓝字容滚动↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	var m1_top = $('.m1box').height();
	var num = 0;
	var stop = setInterval(run,10);
	function run(){
		num--;
		$('.m1box>ul').css({top:num});
		if((-num)%m1_top==0){
			clearInterval(stop);
			setTimeout(function(){
				stop = setInterval(run,10);
			},500);
		}
		if ((-num)==180) {
			num = 0;
		}
	}


	//点击后的屏幕点击事件---图片点击移动
	// 点击显示对应的图片，↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	$('.dm').each(function(index,obj){
		var wd = $('.picbox ').width();
		var ht = $('.picbox ').height();
		$(obj).click(function(event){
			$('.box').css({'left':-index*wd+'px'})
			$('.max').css('display','block');

			// 获取点击按钮的位置坐标
			var ev=event||window.event;
			var x=ev.clientX;
			var y=ev.clientY;

			// 图片由点击位置飞出
			$('.picbox').css({'position':'absolute','left':x-wd/2+'px' ,'top':y-ht/2+'px'})
			var stop=setInterval(function(){
			$('.picbox').css({'transition':'all .5s','left':'28%','top':'100px','transform':'scale(1)'})
			},80);
			setTimeout(function(){
				clearInterval(stop);
			},1500);


			// 关闭模态框
			$('.close').click(function(){
				var stop1=setInterval(function(){
				$('.picbox').css({'transition':'all .5s','left':x-wd/2+'px' ,'top':y-ht/2+'px','transform':'scale(0.001)'})
				},100);
				setTimeout(function(){
					$('.max').css('display','none');
					clearInterval(stop1);
				},600);
			});

			// 点击切换图片
			var num=0;
			num=index+num;
			$('.lt>span').on('click',function(){
				num-=1;
				if (num<0) {
					num=$('.box img').length-1;
				}
				setTimeout(function(){
					$('.picbox').css({'transition':'all 0.3s','left':'20%' ,'top':'100px','opacity':'0'});
					// $('.picbox').css({'right':'50%' ,'top':'100px','opacity':'1'});
					setTimeout(function(){
						$('.picbox').css({'left':'40%' ,'top':'100px'});
						$('.box').css({left:-num*wd+'px'});
						setTimeout(function(){
							$('.close').css('opacity','1');
							$('.picbox').css({'transition':'all 0.3s','left':'28%','top':'100px','opacity':'1'});
						},300);
					},300);
				},300);
			});

			//点击图片you移动↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
			$('.rt>span').on('click',function(){
				num +=1;
				if (num>($('.box img').length-1) ){
					num=0;
				// console.log(num);
				}
				// console.log(num);
				$('.close').css('opacity','0');
				setTimeout(function(){
					$('.picbox').css({'transition':'all 0.3s','left':'40%' ,'top':'100px','opacity':'0'});
					// $('.picbox').css({'right':'50%' ,'top':'100px','opacity':'1'})
					setTimeout(function(){
						$('.picbox').css({'left':'20%' ,'top':'100px'});
						$('.box').css({left:-num*wd+'px'});
						setTimeout(function(){
							
							$('.close').css('opacity','1');
							$('.picbox').css({'transition':'all 0.3s','left':'28%','top':'100px','opacity':'1'});
						},300);
					},300);
				},300);
			});
	    });
	});			
});

window.onload=function(){
	// 点击按钮页面移动到指定位置
	var btn=document.getElementById('m1btn');
	var main3=document.getElementsByClassName('main3')[0];
	var leader = 0;
	var target = main3.offsetTop;
	// alert(target);
	btn.onclick=function(){
		var stop=setInterval(function(){
			leader=leader+(target-leader)/5;
		window.scrollTo(0,leader);

	},100);
		setTimeout(function(){
			clearInterval(stop);
		},1500);	
	}
}


