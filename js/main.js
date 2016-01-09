
 $(document).ready(function() {

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