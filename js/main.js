$(document).ready(function(){

var tips = [
'"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
'"aojsfoagonaogno"',
'"qieng0qje"'
];



var tip = $('.general-tip');
tip.html(tips[Math.floor((Math.random() * tips.length))]);

var gmail = $('#gmail').on('click', function() {
	$('.gmail-tip').toggle();
});


$('.profile-photo').delay(500).animate({opacity:1},1000);
$('.profile-name').delay(1500).animate({opacity:1},1000);
$('.profile-subtitle').delay(2500).animate({opacity:1},1000);


});
