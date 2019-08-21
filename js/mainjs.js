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

})