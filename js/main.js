
// $(document).ready(function() {

// $( '.dropdown' ).hover(
//         function(){
//             $(this).children('.childnav').slideDown(200);
//         },
//         function(){
//             $(this).children('.childnav').slideUp(200);
//         }
//  );


//  $(".secondvid").hide();
//  $(".thirdvid").hide();

// function changeVid(){
// $(".featurevid").hide();
// $(".secondvid").show('slide', 400)
// }
// $(".change").click(changeVid)

// function changeVidTwo(){
// $(".secondvid").hide();
// $(".thirdvid").show('slide', 400)
// }
// $(".twochange").click(changeVidTwo)

// function changeVidThree(){
// $(".thirdvid").hide();
// $(".featurevid").show('slide', 400)
// }
// $(".threechange").click(changeVidThree)


//  //watch videos

//  function readMore () {
// 	event.preventDefault()
//     $(this).parent().next().slideDown(300);
//     $(".readless").show();
//     $(".readmore").hide();
//     console.log ('test')
//   }

//  $(".readmore").click(readMore)

//  function readLess () {
//  	event.preventDefault()
//   	$(this).parent().next().slideDown(300);
// 	$(".readless").hide();
// 	$(".readmore").show();
//  }

// $(".readless").click(readLess)

// })

$(document).ready(function() {
   $("#readmore").click(function() {
   		event.preventDefault()
     	$("#showthisonclick").slideDown(300);
     	$("#readmore").hide()
     	$("#readless").show()
      	console.log("test")
    }); // end click

   $("#readless").click(function(){
   		event.preventDefault()
   		$("#showthisonclick").slideUp(300);
   		$("#readmore").show()
   		$("#readless").hide()
   })

}); 
