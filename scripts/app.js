  alert("jQuery loaded!");
  var playerPostion = 0
  var carManuvar = 6
  playerAlive = true
  var i = 0
  var speedFactor = 3
  var spawnCount = 10
  var sideLineCount = 30
  var roadLineCount = 15
  var centerLineCount = 0
  var bonusPoints = 0
  var shieled = false

  function Board(){
    $("body").append( $("<div class='board'>").css({ "height": "480px", "width": "640px", "background-color": "black", "margin": "auto", "z-index": "1"}) );

    $(".board").append(
      "<div class='grass'></div>\
      <div class='side_line'></div>\
      <div class='road '></div>\
      <div class='centre-line'></div>\
      <div class='road '></div>\
      <div class='side_line'></div>\
      <div class='grass'></div>\
      <div class='car_slider'><img id='avatar' src='images/broombroomcar.png'></div> \
      <br><br>");
     $(".board").append("<h1 id='scoreboard'><br>Score:</h1>   <img src='images/shield.png' class='shield-status'>" );


    if(i%100==0){$(".side_line").append(
      "<div class='stripe moving'></div>").css("margin-top", ""+(-i))
    }
  };


Board()

  function doMove() {

    if(!playerAlive){
      $("#avatar").attr("src", "images/explosion.gif").css({"width": "200px", "margin-top": "-100px"});
      return;
    }
     // $(".moving").css("margin-top", ((i/10)+"%"));
    $(".moving").each(function(){
      $(this).css("margin-top", (parseFloat($(this).css('margin-top')))+speedFactor )
      if((parseInt($(this).css('margin-top')))>=470){
        $(this).remove();
      }
      $("#scoreboard").text("Score:"+parseInt((i/10)) + "   Bonus points:"+bonusPoints)
    });
    setTimeout(doMove,30);
    i= i+1
    // if(playerPostion> 800){
    //   playerAlive=false
    // }
    // if(i%30==0){$(".side_line").append(
    //   "<div class='stripe moving' data-value='"+i+"'></div>").css('margin-top', '-10px')
    // }
    // if(i%100==0){$(".centre-line").append(
    //   "<div class='centre-line-stripe moving' data-value='"+i+"'></div>").css('margin-top', '-180px')
    // }

    if(sideLineCount<=0){$(".side_line").append(
      "<div class='stripe moving' data-value='"+i+"'></div>").css('margin-top', '-10px');
        sideLineCount = Math.floor(100/speedFactor)
    }

    if(roadLineCount<=0){$(".road").append(
      "<div class='road-stripe moving' data-value='"+i+"'></div>").css('margin-top', '-10px');
        roadLineCount = Math.floor(90/speedFactor)
    }

    if(centerLineCount<=0){$(".centre-line").append(
     "<div class='centre-line-stripe moving' data-value='"+i+"'></div>").css('margin-top', '-10px');
      centerLineCount = Math.floor(300/speedFactor)
    }




    if(spawnCount==0){
        var imgArray = ["<img class='obstacle moving death crash' src='images/crash.png' style='margin-left:" + Math.floor((Math.random() * 400) + 30) + "px'>", "<img class='obstacle moving bonus' src='images/fwog.png' style='margin-left:" + Math.floor((Math.random() * 400) + 30) + "px'>", "<img class='obstacle moving death barrel' src='images/barrel2.png' style='margin-left:" + Math.floor((Math.random() * 400) + 30) + "px'>"]
        powerup = Math.floor(Math.random()*10)
        // console.log(powerup)
        if(powerup == 5){
          powerupArray= ["<img class='obstacle moving bonus turle' src='images/turle.gif' style='margin-left:"+ Math.floor((Math.random() * 400) + 30) + "px'>", "<img class='obstacle moving bonus shield' src='images/shield.png' style='margin-left:"+ Math.floor((Math.random() * 400) + 30) + "px'>"]
          var icon =  powerupArray[Math.floor(Math.random()*imgArray.length)]
        }else {
          var icon = imgArray[Math.floor(Math.random()*imgArray.length)]
        }

        $($(".road")[0]).append(icon);


        spawnCount = Math.floor(((Math.random() * 70) + 30)/speedFactor)
      // css({'margin-top' : '0px' , 'margin-left': Math.floor((Math.random() * 400) + 30)})
    }
    var carPos = (parseInt($("#avatar").css("margin-left")))
    $(".obstacle").each(function(){
      if(parseInt($(this).css("margin-top"))>330 &&parseInt($(this).css("margin-top"))<440 ){
        if(parseInt($(this).css("margin-left"))>(carPos-35) && parseInt($(this).css("margin-left"))<(carPos + 35) ) {
          if (this.classList.contains('bonus')){
              bonusPoints = bonusPoints +10
              $(this).attr("src", "images/splat.png");
              $(this).removeClass("obstacle")
              if($(this).hasClass("turle")){
                speedFactor = speedFactor - 1
              }else if($(this).hasClass("shield")){
                shieled = true
                $(".shield-status").fadeIn()
                console.log(shieled)
              ($(".shield").css("display","inline-block"))
              }else{
                speedFactor++
              }

          } else {//alert("GAME OVER. score = " +parseInt((i/10) + bonusPoints))
            if(shieled){
              shieled = false
              $(".shield-status").fadeOut()
              $(this).remove()
            }else{
              playerAlive = false
          }

        }
      }
    }
    });
    spawnCount = spawnCount-1
    sideLineCount = sideLineCount-1
    centerLineCount = centerLineCount-1
    roadLineCount = roadLineCount-1

    if (i % 100 == 0){speedFactor++; console.log("speed factor = " + speedFactor)}
  } // end of function do move

  doMove()
  $("body").keydown(function(event){
    if(playerAlive){
      if((parseInt($("#avatar").css("margin-left")) >= 0) && (parseInt($(avatar).css("margin-left")) <= 438)) {
        if(event.keyCode==39){
          playerPostion+=carManuvar
          $("#avatar").css("margin-left", playerPostion)
        }else if(event.keyCode==37){
          playerPostion-=carManuvar
          $("#avatar").css("margin-left", playerPostion)
        }
      } else {
        //alert("SPIN OUT. score = " +parseInt((i/10)))
        playerAlive = false
      }
    }
  })


