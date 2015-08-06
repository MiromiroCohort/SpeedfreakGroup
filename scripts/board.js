// Have to communicate on class names, so that it is styled by the CSS

$("#start").on("click", Board);

function Board() {

  $("body").append( $("<div class='board'>").css({ "background-color": "black", "height": "480px", "width": "640px", "z-index": "1", "position": "fixed"}) );

  $(".board").append(
    "<div class='grass'></div>\
    <div class='side_line'></div>\
    <div class='road'></div>\
    <div class='centre-line'></div>\
    <div class='road'></div>\
    <div class='side_line'></div>\
    <div class='grass'></div>" );

};
