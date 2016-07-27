$(document).ready(function(){

var tips = [
'"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
'"aojsfoagonaogno"',
'"qieng0qje"'
];
console.log(Math.floor((Math.random() * tips.length)));
var tip = $('.general-tip');
tip.html(tips[0]);

var gmail = $('#gmail').on('click', function() {
	$('.gmail-tip').toggle();
});

});