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

		// if (scrtop<900) {
		// 	$('.uls').stop().slideDown(900);
		// }
		
		if(scrtop>2200){
			$('.ft1t').stop().slideDown(1000);	
			setTimeout(function(){
				$('#m5btn').stop().slideDown(1500);
			},500);
			
		}
	});


	// ftime();
	// 	function ftime(){
	// 		// alert()
	// 		setTimeout(function() {
	// 			if (scrtop<900||scrtop==null) {
	// 				$('.uls').stop().slideDown(900);
	// 			}
	// 		},200);
	// 	}

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


window.onload=function(){
	// 轮播图
	var uls = document.getElementsByClassName('uls')[0];
	var lis = document.getElementsByClassName('lbpic');
	var w = lis[0].offsetWidth;
	var bw = uls.offsetWidth;
	var num = 0;
	var stop = setInterval(run,10);
	function run(){
		num++;
		uls.style.left=-num+'px';
		if (num%w==0) {
			clearInterval(stop);
			setTimeout(function(){
				stop = setInterval(run,10);
			},1000)
		}
		if (num>(bw-w)) {
			num=0;
		}
	}

	var nam = document.getElementById('nm');
	var ema = document.getElementById('em');
	var spans = document.getElementsByClassName('spa');
	
	var nres= /^[a-zA-Z]+$/;
	var eres=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
	var tur

	nam.onfocus=function(){
		// alert(1)
		if (nam.value==''){
			spans[0].innerHTML='请输入姓名';
		}else if (!nres.test(nam.value)) {
			spans[0].innerHTML='姓名仅能为字母';
		}
		 else{
			spans[0].innerHTML='<b></b>';
			tur=true;
		}
	}
	nam.onblur=function(){
		if (nam.value==''){
			spans[0].innerHTML='请输入姓名';
		}else if (!nres.test(nam.value)) {
			spans[0].innerHTML='姓名仅能为字母';
		}
		 else{
			spans[0].innerHTML='<b></b>';
			tur=true;
		}
	}
	ema.onfocus=function(){
		// alert(1)
		if (ema.value==''){
			spans[1].innerHTML='请输入Email';
		}else if (!eres.test(ema.value)) {
			spans[1].innerHTML='Email格式不正确';
		}else{
			spans[1].innerHTML='<b></b>';
			tur=true;
		}
	}
	ema.onblur=function(){
		if (ema.value==''){
			spans[1].innerHTML='请输入Email';
		}else if (!eres.test(ema.value)) {
			spans[1].innerHTML='Email格式不正确';
		} else{
			spans[1].innerHTML='<b></b>';
			tur=true;
		}
	}
}
