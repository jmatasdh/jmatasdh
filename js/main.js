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

});