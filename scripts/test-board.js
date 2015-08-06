// Have to communicate on class names, so that it is styled by the CSS

$("#start").on("click", createBoard);

function createBoard() {
  $("#track").append($("<div class='board'>"));

  $(".board").append($("<div class='grass'></div>").css("left", "0px"))
  $(".board").append($("<div class='side-line'></div>").css("left", "60px"))
  $(".board").append($("<div class='lane'></div>").css("left", "70px"))
  $(".board").append($("<div class='center-line'></div>").css("left", "315px"))
  $(".board").append($("<div class='lane'></div>").css("left", "325px"))
  $(".board").append($("<div class='side-line'></div>").css("left", "570px"))
  $(".board").append($("<div class='grass'></div>").css("left", "580px"))

};
