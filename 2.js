$(document).ready(function () {
	var scrtop;
	var top;
	var top1;
	var top2 ;
	$(window).scroll(function(){
		var scrtop = $(window).scrollTop()+100;
		top=$(window).scrollTop();
		var topp = $(window).height()+$(window).scrollTop();

		//下面是判断页面是否发生滚动，触发导航栏高度变化
		if (scrtop > 100){
			$('header').stop().animate({'padding':'10px 0'},100);
		}
		if(scrtop == 100){
			
			$('header').stop().animate({'padding':'20px 0'},100);
		}	
	
		//获取每个大div距离顶部的距离↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		top1 = $('.main>div').eq(1).offset().top;
		top2 = $('.main>div').eq(2).offset().top;
		var top3 = $('.main>div').eq(3).offset().top;
		var top4 = $('.main>div').eq(4).offset().top;

		if(scrtop>=0&& scrtop<top2){
			$('.abm2 img ').stop().show(1000);
			$('.abm2t h2').stop().slideDown(500);
			$('.serl h2').stop().slideDown(500);
			setTimeout(function(){	
				$('.abm2t p').stop().slideDown(500);
				$('.serl>p').stop().slideDown(500);
				$('.serr img').stop().show(1000);

			},600);
			setTimeout(function(){
				$('.serl li').stop().slideDown(900);
			},1000);
		}	
		if(scrtop>(top2-50)&&scrtop<(top3+100)){
			$('.abm4 h2').stop().slideDown(500);
			$('.serb h2').stop().slideDown(500);
			setTimeout(function(){

				$('.abm4 li').stop().slideDown(500);
				$('.serb>p').stop().slideDown(500);
			},600);
			setTimeout(function(){
				$('.abm4>ul>li>img').stop().show(1000);
				$('.spic1').fadeIn(500);
				$('.spic2').fadeIn(800);
				$('.spic3').fadeIn(1000);
				$('.spic4').fadeIn(1200);
			},1000);
			setTimeout(function(){
				$('.abm4 li .name').stop().slideDown(1000);
				$('.abm4 li .ltpic').stop().slideDown(1000);
				$('.spic1').animate({'margin-left':'2px'},300)
				$('.spic2').animate({'margin-left':'28px'},500)
				$('.spic3').animate({'margin-left':'28px'},800)
				$('.spic4').animate({'margin-left':'28px'},1100)
			},1800);
		}
		if ($('.ltbox').offset().top<=topp) {
			$('.ltbox ').stop().slideDown(800);
		}
		if(scrtop>(top4-200)){
			$('.Clinets h2').stop().slideDown(500);
			$('.Clinets p').stop().slideDown(500);
			
			//底部图片出现

			setTimeout(function(){
				$('.ft1t').stop().slideDown(1000);	
			},2000);
			setTimeout(function(){
				$('#m5btn').stop().slideDown(1500);
			},2500);
		}
	})
	ftime();
		function ftime(){
			// alert()
			setTimeout(function() {
				if (scrtop<top2||top==null) {

					$('.abm2 img ').stop().show(1000);
					$('.abm2t h2').stop().slideDown(500);
					$('.serl h2').stop().slideDown(500);
					setTimeout(function(){	
						$('.abm2t p').stop().slideDown(500);
						$('.serl>p').stop().slideDown(500);
						$('.serr img').stop().show(1000);

					},600);
					setTimeout(function(){
						$('.serl li').stop().slideDown(900);
					},1000);
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
	//手风琴效果；；；；；；；；
	$('.abmain3>div').mouseover(function(){
		$('.abmain3>div').stop();
		$(this).stop().animate({'width':'60%'},800).siblings('div').animate({'width':'10%'},800);
	})
	$('.abmain3>div').mouseleave(function(){
		$('.abmain3>div').stop().animate({'width':'20%'},1000);
	})

//底部轮播tu
	setInterval(function(){			
		$('.ltbox ul').append($('.ltbox ul li').eq(0).clone());
		setTimeout(function(){
			$('.ltbox ul li').eq(0).remove();
		},500);	
	},2000);	
})


window.onload=function(){

	// 名片hover效果
	var names = document.getElementsByClassName('name');
	var lis = document.getElementsByClassName('team');
	var imgs = document.getElementsByClassName('tpic');

	for (var i = 0; i < lis.length; i++) {
		lis[i].a=i;
		lis[i].onmouseover=function(){
			names[this.a].style.transform='translateY(-290px)';
			names[this.a].style.transition='all 2s';
			imgs[this.a].style.transform='translateY(155px)';
			imgs[this.a].style.transition='all 2s';
		}
		lis[i].onmouseout=function(){
			names[this.a].style.transform='translateY(0px)';
			names[this.a].style.transition='all 2s';
			imgs[this.a].style.transform='translateY(0px)';
			imgs[this.a].style.transition='all 2s';
		}
	}


	// 第三页模态框控制
	var max = document.getElementsByClassName('max')[0];
	var dms=document.getElementsByClassName('dm');
	var uls=document.getElementsByClassName('mul')[0];
	var img=document.getElementsByClassName('mpic');
	var lt=document.getElementsByClassName('lt')[0];
	var rt=document.getElementsByClassName('rt')[0];
	var close=document.getElementsByClassName('close')[0];
	var num=0;
	
	for (var i = 0; i < dms.length; i++) {
		dms[i].a=i;
		dms[i].onclick=function(){
			uls.style.left=-(this.a)*600+'px';
			max.style.display='block';
			num=this.a;
			rt.onclick=function(){
				num+=1	
				if(num>=img.length){
					num=0;
				}uls.style.left=-num*600+'px';
			}
			lt.onclick=function(){
				num-=1
				if(num<0){
					num=img.length-1;
				}uls.style.left=-num*600+'px';
			}
		}
	}
	close.onclick=function(){
		max.style.display='none';
	}
}
