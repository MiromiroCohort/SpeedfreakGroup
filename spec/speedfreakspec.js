describe ("Board", function(){
  it("should be a function to create a new play area", function(){
    expect(new Board()).toBeDefined()
  })

  it("should create a fixed div that is 480 px high and 640 px wide with a z-index of 1", function() {
    expect($(".board").prop("tagName")).toEqual("DIV")
    expect($(".board").css("width")).toEqual("640px")
    expect($(".board").css("height")).toEqual("480px")
    expect($(".board").css("z-index")).toEqual("1")
  })

  it("should hide the overflow of contained divs, particularly the moving markers", function(){
    expect($(".board").css("overflow")).toEqual("hidden")
  })

  it("should contain 7 divs representing the columns on the board", function(){
    expect($(".board").children().length).toEqual(7)
  })

  it("those 7 divs should have a z-index of 2", function(){
    expect($(".grass").css("z-index")).toEqual("2")
    expect($(".side-line").css("z-index")).toEqual("2")
    expect($(".lane").css("z-index")).toEqual("2")
    expect($(".center-line").css("z-index")).toEqual("2")
  })

  it("should have a grassy area in the 1st and 7th columns, side-lines in the 2nd and 6th columns, lanes in the 3rd and 5th columns, and a center-line in the 4th column", function(){
    var first_col = $($(".board").children().first())
    var second_col = $(first_col.next())
    var third_col = $(second_col.next())
    var forth_col = $(third_col.next())
    var fifth_col = $(forth_col.next())
    var sixth_col = $(fifth_col.next())
    var seventh_col = $(sixth_col.next()) 

    expect((first_col).hasClass("grass")).toEqual(true)
    expect((seventh_col).hasClass("grass")).toEqual(true)
    
    expect((second_col).hasClass("side-line")).toEqual(true)
    expect((sixth_col).hasClass("side-line")).toEqual(true)
    
    expect((third_col).hasClass("lane")).toEqual(true)
    expect((fifth_col).hasClass("lane")).toEqual(true)
    
    expect((forth_col).hasClass("center-line")).toEqual(true)
    // why do the lines above work but not the line below?
    // expect((first_col).hasClass("grass")).toBeTruthy 
  })
})



// Reference to use http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html

describe ("IllusionOfMovement", function(){
  it("should have markers in columns 2, 4 and 6 of the playing area - each with a z-index of 3", function(){
    expect($(".side-line").children().first()).hasClass(".side-marker").toEqual(true)
    expect($(".center-line").children().first()).hasClass(".center-marker").toEqual(true)
    expect($(".side-marker").css("z-index")).toEqual("3")
    expect($(".center-marker").css("z-index")).toEqual("3")
  });

  xit("should move those markers down their respective columns signifying the general speed of the car", function(){
// script is changing the margin-top property rather than the top (y-position) property
  });

  xit("should speed up over time", function(){

  });
});


describe ("CarController", function(){
  xit("should have a container div fixed one third of the way down the playing area", function(){
// not necessary if using an image whose top is always the same and margins change - again use of margin rather than position
  });

  xit("should have a div representing the car - with a z-index of 4", function(){
// image avatar being used in script
  });

  xit("should move the image horizontally when the user presses the left or right arrows", function(){
// listening for keydown event? keyword => spyEvent and trigger
  });

});