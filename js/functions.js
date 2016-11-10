jQuery(document).ready(function($){

//░░░░░░░░░░░░░░░░░░░░░░░░
//
//	 DIRECTORY
//
//	 _Section
//
//░░░░░░░░░░░░░░░░░░░░░░░░

//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
// _Section
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

$time     = $(".time"),
$underlay = $(".underlay");

$time.on('update',function(){
	$time.text(moment().format('h:mm:ss a'));
});

$time.trigger('update');

setInterval(function(){
	$time.trigger('update');
}, 1000);

$underlay.click(function(){
	$(this).toggleClass('open');
});

});