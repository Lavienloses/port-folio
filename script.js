
jQuery(function(){
	var logo = jQuery('#logo');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) { //スクロールが500pxを越えたら
			logo.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			logo.removeClass('invert');
		}
	});
});