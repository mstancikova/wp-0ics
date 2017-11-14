// JavaScript Document
jQuery(document).ready(function($){
	$('.wphi .wphi_settings h3').click(function(){
		var target = '.wphi .wphi_settings ul.menu-class.pages_'+$(this).attr('data-id');
		if(!$(target).is(':visible')){
			$('.wphi .wphi_settings ul.menu-class').slideUp();
			$(target).slideDown();
		}
	});
	
	if ($('.wphi div.banner_wrapper').length > 0) {
   	 if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {
			$('.wphi').on('click', 'div.banner_wrapper', function(e) {
				e.preventDefault();

				var id = $(this).find('.hi_vals');
				wp.media.editor.send.attachment = function(props, attachment) {
					id.val(attachment.id);
					
					$(id).parent().attr('style', "background:url('"+attachment.url+"'); background-repeat:no-repeat;");
				};
				wp.media.editor.open($(this));
				return false;
			});
			
		}
		
	};
	
	if ($('.wphi').length > 0) {
			setInterval(function(){
				wphi_methods.update_hi();
				//console.clear();
			}, 1000);
	}
	
	$('.wphi').on('click', '.head_area a.how', function(){
		$('.wphi .head_area .pre, .wphi .head_area a.templates').toggle();
	});
	$('.wphi').on('click', '.head_area a.templates', function(){
		
		$(this).toggleClass('clicked');
		$('.wphi .head_area .pre, .wphi .head_area a.how').toggle();
		$('.wphi .shortcode_area, .wphi .templates_area').toggle();
		
		
		$(this).find('span').html($(this).find('span').html()!=$(this).data('close')?$(this).data('close'):$(this).data('text'));
		
		
	});	

	$('.wphi li a').on('click', function(){
		console.log($(this));
		$(this).parent().find('.hi_vals').val('');
		$(this).parent().find('.banner_wrapper').removeAttr('style');
	});
	
	$('.wphi .pre form.templates ul li').on('click', function(){
		$('.wphi .pre form.templates input[name="wphi_template"]').val($(this).data('id'));
		var selected_item = $(this).parent().find('.selected').data('id');
		$(this).parent().find('.selected').removeClass('selected');
		$(this).addClass('selected');
		switch($(this).data('id')){
			case "reset":
				if(selected_item!=$(this).data('id'))
				alert("This tempalte will reset the settings and you can continue as default.");
			break;
			case "custom":
				if(selected_item!=$(this).data('id'))
				alert("You can implement your own HTML, Styles and Scripts with this option.");
				
				$('.wphi_template_custom').fadeIn();
			break;
		}
		
	});
});		
	
						
var wphi_methods = {

		update_hi: function(){
			jQuery.each(jQuery('.banner_wrapper .hi_vals'), function(){
				if(jQuery(this).val()>0){
					jQuery(this).parent().find('.dashicons').fadeIn();
				}else{
					jQuery(this).parent().find('.dashicons').fadeOut();
				}
			});
		}
}



