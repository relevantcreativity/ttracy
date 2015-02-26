// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$('#drop-nav:first').children().hover(
    		function(){
				$(this).addClass('hover');
    		},
    		function(){
        		$(this).removeClass('hover');
    		}
    	);
		$('#drop-nav').sdNavCol({liSize:4, colCount:2, assignedColumns:'yes'});
		$('>li>ul', '#drop-nav').wrap('<div></div>');
		$('#drop-nav div ul').append('<br class="clear"/>');
		
		$('.content-right ul.menu').sdAccordion();
		$('.fancy').fancybox();
		$('.iframe').fancybox({
			hideOnContentClick: false,
            padding: 0,
            width: 700,
            height: 500
   		});
		$('.example').sdExample();
    });
})(jQuery);