

$(document).ready(function () {
	var scrtop;
	$(window).scroll(function(){
		scrtop = $(window).scrollTop();
		console.log(scrtop);
		//下面是判断页面是否发生滚动，触发导航栏高度变化
		if (scrtop > 0){
			$('header').stop().animate({'padding':'10px 0'},100);
		
		}
		if(scrtop == 0){
			
			$('header').stop().animate({'padding':'20px 0'},100);
		}
		if (scrtop<700) {
			$('h2').stop().slideDown(500);
			setTimeout(function(){
				$('.conl>p,.conr>p').stop().slideDown(900);
			},500);
			setTimeout(function(){
				$('form,video').stop().slideDown(900);
			},1500);
		}
			if (scrtop>400&&scrtop<1000) {
			$('.conb').stop().slideDown(500);
		}
		if (scrtop>700) {
			$('.ft1t').stop().slideDown(500);
			setTimeout(function(){
				$('#m5btn').stop().slideDown(500);
			},1000);
		}


	});	
	ftime();
		function ftime(){
			// alert()
			setTimeout(function() {
				if (scrtop<700||scrtop==null) {

					$('h2').stop().slideDown(500);
					setTimeout(function(){
						$('.conl>p,.conr>p').stop().slideDown(900);
					},500);
					setTimeout(function(){
						$('form,video').stop().slideDown(900);
					},1500);
				}
			},200);
		}




	
	var pro=[
					{'id':'01','name':'河北'},
					{'id':'02','name':'山东'},
					{'id':'03','name':'河南'},
					{'id':'04','name':'山西'},
				];
				var cit=[
					{'cid':'01','name':[{'id':'011','name':'邯郸'},{'id':'012','name':'沧州'}]},
					{'cid':'02','name':[{'id':'021','name':'济南'},{'id':'022','name':'德州'}]},
					{'cid':'03','name':[{'id':'031','name':'郑州'},{'id':'032','name':'安阳'}]},
					{'cid':'04','name':[{'id':'041','name':'太原'},{'id':'042','name':'晋城'}]},
				];
				var cou=[
					{'cid':'011','name':[{'id':'0111','name':'丛台区'},{'id':'0112','name':'邯山区'}]},
					{'cid':'012','name':[{'id':'0121','name':'运河区'},{'id':'0122','name':'新华区'}]},
					{'cid':'021','name':[{'id':'0211','name':'开发区'},{'id':'0212','name':'高新区'}]},
					{'cid':'022','name':[{'id':'0221','name':'德诚区'},{'id':'0222','name':'平原区'}]},
					{'cid':'031','name':[{'id':'0311','name':'郑州区'},{'id':'0312','name':'河南区'}]},
					{'cid':'032','name':[{'id':'0321','name':'丛台区'},{'id':'0322','name':'邯山区'}]},
					{'cid':'041','name':[{'id':'0411','name':'运河区'},{'id':'0412','name':'新华区'}]},
					{'cid':'042','name':[{'id':'0421','name':'开发区'},{'id':'0422','name':'高新区'}]},
				]
				$.each(pro,function(index,obj){
					$('#pro').append('<option value='+obj.id+'>'+obj.name+'</option>')
				})
				$('#pro').change(function(){
					$('#cit').length=1;
					var pval=$(this).val();
					$.each(cit,function(index,obj){
						if (pval==obj.cid) {
							$.each(obj.name,function(index,obj){
								$('#cit').append('<option value='+obj.id+'>'+obj.name+'</option>')
							})
						}
					})
				})
				$('#cit').change(function(){
					$('#cou').length=1;
					var cval=$(this).val();
					$.each(cou,function(index,obj){
						if (cval==obj.cid) {
							$.each(obj.name,function(index,obj){
								$('#cou').append('<option value='+obj.id+'>'+obj.name+'</option>');
							})
						}
					})
					
				})

});




window.onload=function(){
	var nam = document.getElementById('nam');
	var ema = document.getElementById('ema');
	var spans = document.getElementsByClassName('spa');
	var pro=document.getElementById('pro');
	var cit=document.getElementById('cit');
	var cou=document.getElementById('cou');
	var che = document.getElementsByClassName('che');
	var sub=document.getElementById('sub');
	var nres= /^[a-zA-Z]+$/;
	var eres=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var tur

	nam.onfocus=function(){
		// alert(1)
		if (nam.value==''){
			spans[0].innerHTML='请输入姓名';
		}else if (!nres.test(nam.value)) {
			spans[0].innerHTML='姓名仅能为字母';
		}
		 else{
			spans[0].innerHTML='<i></i>';
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
			spans[0].innerHTML='<i></i>';
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
			spans[1].innerHTML='<i></i>';
			tur=true;
		}
	}
	ema.onblur=function(){
		if (ema.value==''){
			spans[1].innerHTML='请输入Email';
		}else if (!eres.test(ema.value)) {
			spans[1].innerHTML='Email格式不正确';
		} else{
			spans[1].innerHTML='<i></i>';
			tur=true;
		}

	}

	pro.onblur=function(){
		if (pro.value==''){
			spans[2].innerHTML='请先选择省份';
		}
	}
	cit.onfocus=function(){
	
		if (pro.value==''){
			spans[2].innerHTML='请先选择省份';
		}
	}
	cit.onblur=function(){
		if (pro.value!=''&&cit.value!=''&&cou.value!='') {
			spans[2].innerHTML='<i></i>';
			tur=true;
		}else if (cit.value==''){
			spans[2].innerHTML='请先选择城市';
		}
	}
	// else {
	// 		spans[2].innerHTML='地址信息不全';
	// 	}
	// }
	cou.onfocus=function(){
	
		if (pro.value==''){
			spans[2].innerHTML='请先选择省份';
		}else if (cit.value==''){
			spans[2].innerHTML='请先选择城市';
		}
	}
	cou.onblur=function(){

	
		if (pro.value!=''&&cit.value!=''&&cou.value!='') {
			spans[2].innerHTML='<i></i>';
			tur=true;
		}else {
			spans[2].innerHTML='地址信息不全';
		}

	}
	$('.page').on({mouseover:function(){
		$('.pag').stop().slideDown();
		},
		mouseleave:function(){
		$('.pag').stop().slideUp();
		}
	});
	$('.blo').on({'mouseover':function(){
		$('.blg').stop().slideDown()
		},
	'mouseleave':function(){
		$('.blg').stop().slideUp()	
		}
	});
	





}
