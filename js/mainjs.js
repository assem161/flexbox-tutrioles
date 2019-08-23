/*console.log*/
$(function(){
	'use strict'
	$('.slidcontent').scroll(()=>{
		$('.contr2').css({
			'transform':'translateX(-0px)',
			'transition': 'all 2s',
		})
	})

	/*
	$('.slidcontent').on('drag',()=>{
		$('.contr2').css({
			'transform':'translateX('+ '-48%' +')',
			'transition': 'all 2s',
		})
	}) */

	$('.arrow-r').hover(()=>{
		$('.contr2').css({
			'transform':'translateX('+ '-49%' +')',
			'transition': 'all 10s',
		})
	})

	$('.arrow-l').hover(()=>{
		$('.contr2').css({
			'transform':'translateX('+ '0%' +')',
			'transition': 'all 10s',
		})
	})


	var sliderObj = {
		move:0,
		itemWidth : $('.contr2 .item').innerWidth(),
		elemCount : $('.contr2 .item').length,
		clicked: false,
		current: 1
	}


            function nextFn(){
                if(!sliderObj.clicked){

					$('.arrow-r2').click(()=>{	
                    	sliderObj.clicked = true;	
                    	sliderObj.current = sliderObj.current+1;
						$('.arrow-l2').removeClass('disabled')
                    	console.log(sliderObj.current);					
						var itemWidth = sliderObj.itemWidth;
						sliderObj.move += itemWidth;
						$('.contr2').css({
							'transform':'translateX(-'+ sliderObj.move +'px)',
							'transition': 'all 0.5s',
						})

						setTimeout(function(){
							sliderObj.clicked = false;	
						},1000)

                        if($(window).width() > 600){
		                    if(sliderObj.current> (sliderObj.elemCount)/2){
		                        $('.arrow-r2').addClass('disabled');
		                    	}else{
		                         $('.arrow-r2').removeClass('disabled');
		                    	}
                        }else {
		                    if(sliderObj.current> (sliderObj.elemCount-1)){
		                        $('.arrow-r2').addClass('disabled');
		                    	}else{
		                         $('.arrow-r2').removeClass('disabled');
		                   	   }
                        }						
								
					})
                }
            }

            nextFn();


            function prevFn(){
                if(!sliderObj.clicked){

					$('.arrow-l2').click(()=>{	
                    	sliderObj.clicked = true;	
                    	sliderObj.current = sliderObj.current-1;

						$('.arrow-r2').removeClass('disabled');                    						
						var itemWidth = sliderObj.itemWidth;
						sliderObj.move -= itemWidth;
						$('.contr2').css({
							'transform':'translateX(-'+ sliderObj.move +'px)',
							'transition': 'all 0.5s',
						})

						setTimeout(function(){
							sliderObj.clicked = false;	
						},1000)

                    if(sliderObj.current == 1){
                        $('.arrow-l2').addClass('disabled');
                    }else{
                         $('.arrow-l2').removeClass('disabled');
                    }						
								
					})						

                }
            }

            prevFn();



})