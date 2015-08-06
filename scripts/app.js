$(document).ready(function() {
  alert("jQuery loaded!");
  var playerPostion = 0
  var carManuvar = 6
  playerAlive = true
  var i =0


  // Have to communicate on class names, so that it is styled by the CSS

  $("#start").on("click", Board);

  function Board(){
    $("body").append( $("<div class='board'>").css({ "height": "480px", "width": "640px", "background-color": "black", "margin": "auto", "z-index": "1"}) );

    $(".board").append(
      "<div class='grass'></div>\
      <div class='side_line'></div>\
      <div class='road'></div>\
      <div class='centre-line'></div>\
      <div class='road'></div>\
      <div class='side_line'></div>\
      <div class='grass'></div>" );

    $(".side_line").append(
      "<div class='stripe moving'></div>")
  };


Board()

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

