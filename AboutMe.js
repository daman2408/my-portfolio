$(document).ready(function(){
  $("img").hover(function(){
    $(this).fadeOut("slow");
  }, function(){
    $(this).fadeIn("slow");
  })
})
