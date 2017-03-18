$(document).ready(function() {
	$('#a').click(function(){
		alert("aaa");
	});
	$('#b').click(function(){
		alert("aba");
	});

	$(document).scroll(function () {
					var scroll = $(this).scrollTop();
					var topDist = $("#navbar").position();
					if (scroll > topDist.top) {
						$('.navbar').css({"position":"fixed","width":"100%","z-index":"1"});
					
					if($('#search').css("position") == "fixed"){
						$('#search').css({"position":"fixed" , "marginTop":"92px"});}
					}
					else if (scroll == topDist.top) {
						$('.navbar').css({"position":"fixed","width":"100%","z-index":"1"});
					
					if($('#search').css("position") == "fixed"){
						$('#search').css({"position":"fixed" , "marginTop":"0px"});
						$('.navbar').css({"position":"static","top":"auto"});}
					}
					
					
					else {
						$('.navbar').css({"position":"static","top":"auto"});
					}
		});
});
	$(window).load(function() {
		var width = $(window).width();
		if (width >= 991) {
			$('#search').css({"position":"fixed"});
		} else {
			$('#search').css({"position":"initial"});
		}
	});

	function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#upImage')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
}

