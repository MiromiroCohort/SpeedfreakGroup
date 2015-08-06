$(document).ready(function() {
  alert("jQuery loaded!");
  var playerPostion = 0
  var carManuvar = 6
  playerAlive = true
  var i =0
  function doMove() {
    if(!playerAlive){
      return;
    }
    $(".moving").css("margin-top", i+"%");
    setTimeout(doMove,30);
    i= i+0.1
    if(playerPostion> 400){
      playerAlive=false
    }
  }

  doMove()
  $(document).keydown(function(event){
    if(event.keyCode==39){
      playerPostion+=carManuvar
      $(avatar).css("margin-left", playerPostion)
    }else if(event.keyCode==37){
      playerPostion-=carManuvar
      $(avatar).css("margin-left", playerPostion)
    }
  })


});
// var i =0
// function doMove() {
//   if(i>50){
//     break;
//   }
//   $("#moving").css("margin-top", i+"%");
//   setTimeout(doMove,100);
// }
