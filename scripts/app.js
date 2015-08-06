$(document).ready(function() {
  alert("jQuery loaded!");
  var playerPostion = 0
  var carManuvar = 6
  playerAlive = true
  var i = 0
  var speedFactor = 3
  var spawnCount = 10

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
      <div class='grass'></div>\
      <div class='car_slider'><img id='avatar' src='images/broombroomcar.png'></div> <br><br>");
     $(".board").append("<h1 id='scoreboard'><br>Score:</h1>" );


    if(i%100==0){$(".side_line").append(
      "<div class='stripe moving'></div>").css("margin-top", ""+(-i))
    }
  };


Board()

  function doMove() {

    if(!playerAlive){

      return;
    }
     // $(".moving").css("margin-top", ((i/10)+"%"));
    $(".moving").each(function(){
      $(this).css("margin-top", (parseFloat($(this).css('margin-top')))+speedFactor )
      if((parseInt($(this).css('margin-top')))>=470){
        $(this).remove();
      }
      $("#scoreboard").text("Score:"+parseInt((i/10)))
    });
    setTimeout(doMove,30);
    i= i+1
    if(playerPostion> 800){
      playerAlive=false
    }
    if(i%30==0){$(".side_line").append(
      "<div class='stripe moving' data-value='"+i+"'></div>").css('margin-top', '-10px')
    }
    if(i%100==0){$(".centre-line").append(
      "<div class='centre-line-stripe moving' data-value='"+i+"'></div>").css('margin-top', '-180px')
    }

    if(spawnCount==0){
        // var randnum =
        $($(".road")[0]).append(
        "<img class='obstacle moving' data-value='"+i+"' src='images/fwog.png' style='margin-left:" + Math.floor((Math.random() * 400) + 30) + "px'>");

        spawnCount = Math.floor((Math.random() * 70) + 30)
      // css({'margin-top' : '0px' , 'margin-left': Math.floor((Math.random() * 400) + 30)})
    }
    var carPos = (parseInt($("#avatar").css("margin-left")))
    $(".obstacle").each(function(){
      if(parseInt($(this).css("margin-top"))>320 &&parseInt($(this).css("margin-top"))<440 ){
        console.log($(this).css("margin-left"))
        if(parseInt($(this).css("margin-left"))>(carPos-20) && parseInt($(this).css("margin-left"))<(carPos+20) ) {
          alert("GAME OVER. score = " +parseInt((i/10)))
          playerAlive = false

        }
      }
    });
    spawnCount = spawnCount-1
  }

  doMove()
  $("body").keydown(function(event){
    if ((parseInt($("#avatar").css("margin-left")) >= 0) && (parseInt($(avatar).css("margin-left")) <= 438)) {
      if(event.keyCode==39){
        playerPostion+=carManuvar
        $("#avatar").css("margin-left", playerPostion)
      }else if(event.keyCode==37){
        playerPostion-=carManuvar
        $("#avatar").css("margin-left", playerPostion)
      }
    }
  })


});

