// Have to communicate on class names, so that it is styled by the CSS

$("#start").on("click", Board);

function Board(){
  $("body").append( $("<div class='board'>").css({ "height": "480px", "width": "640px", "background-color": "black"}) );

  $(".board").append(
    "<div class='grass'></div>\
    <div class='side_line'></div>\
    <div class='road'></div>\
    <div class='centre-line'></div>\
    <div class='road'></div>\
    <div class='side_line'></div>\
    <div class='grass'></div>" );
};
