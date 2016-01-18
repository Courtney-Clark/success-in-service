
 $(document).ready(function() {

$( '.dropdown' ).hover(
        function(){
            $(this).children('.childnav').slideDown(200);
        },
        function(){
            $(this).children('.childnav').slideUp(200);
        }
 );


 $(".secondvid").hide();
 $(".thirdvid").hide();

function changeVid(){
$(".featurevid").hide();
$(".secondvid").show('slide', 400)
}
$(".change").click(changeVid)

function changeVidTwo(){
$(".secondvid").hide();
$(".thirdvid").show('slide', 400)
}
$(".twochange").click(changeVidTwo)

function changeVidThree(){
$(".thirdvid").hide();
$(".featurevid").show('slide', 400)
}
$(".threechange").click(changeVidThree)

})

 //watch videos

 $(".readmore").click(function(){
	event.preventDefault()
    $("#show-this-on-click").slideDown();
    $(".readless").show();
    $(".readmore").hide();
});


$(".readless").click(function(){
	event.preventDefault()
	$("#show-this-on-click").slideUp();
	$(".readless").hide();
	$(".readmore").show();
});