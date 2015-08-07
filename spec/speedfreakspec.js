describe ("Board", function(){
  it("should be a function to create a new play area", function(){
    expect(new Board()).toBeDefined();

  });

  it("should be a fixed div that is 480 px high and 640 px wide with a z-index of 1", function() {
    expect($(".board").prop("tagName")).toEqual("DIV")
    expect($(".board").css("width")).toEqual("640px")
    expect($(".board").css("height")).toEqual("480px")
  });



  it("should contain 11 divs representing the columns on the board, car slider, and moving stripes", function(){
    expect($(".board").children().length).toEqual(11)
  })

  it("should have a grassy area in the 1st and 7th columns, side-lines in the 2nd and 6th columns, lanes in the 3rd and 5th columns, and a center-line in the 4th column", function(){
    var first_col = $($(".board").children().first())
    var second_col = $(first_col.next())
    var third_col = $(second_col.next())
    var fourth_col = $(third_col.next())
    var fifth_col = $(fourth_col.next())
    var sixth_col = $(fifth_col.next())
    var seventh_col = $(sixth_col.next())

    expect((first_col).hasClass("grass")).toEqual(true)
    expect((seventh_col).hasClass("grass")).toEqual(true)

    expect((second_col).hasClass("side_line")).toEqual(true)
    expect((sixth_col).hasClass("side_line")).toEqual(true)

    expect((third_col).hasClass("road")).toEqual(true)
    expect((fifth_col).hasClass("road")).toEqual(true)

    expect((fourth_col).hasClass("centre-line")).toEqual(true)
    // why do the lines above work but not the line below?
    // expect((first_col).hasClass("grass")).toBeTruthy
  })

  it("should have a moving car in a layer over the board", function(){
    expect($(".car_slider").css("z-index")).toEqual("3")
    expect($("#avatar").css("z-index")).toEqual("4")
  })
})

describe ("IllusionOfMovement", function(){
  // it("should move the stripes down, within the board", function(){
  //   //expect(parseInt(setInterval(function () {($(".stripe.moving").css("margin-top"));}, 3000))).toBeLessThan(470);
  //   setInterval(function () {console.log($(".stripe.moving").css("margin-top"));}, 3000);
  //   //setInterval(function () { (parseInt($(".stripe.moving").css("margin-top"))).toBeLessThan(470); }, 3000);
  //   //expect(parseInt($(".stripe.moving").css("margin-top"))).toBeLessThan(470);
  // })

  xit("should have markers in columns 2, 4 and 6 of the playing area - each with a z-index of 3", function(){
    expect($(".side_line").children()).hasClass(".stripe.moving").toEqual(true)
    expect($(".centre-line").children().first()).hasClass(".stripe").toEqual(true)
    //expect($(".stripe").css("z-index")).toEqual("3")
    //expect($(".center-marker").css("z-index")).toEqual("3")
  });

// Reference to use http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html

  xit("should move those markers down their respective columns signifying the general speed of the car", function(){
// script is changing the margin-top property rather than the top (y-position) property
    expect($(".moving").css(""))
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

describe ("Scoring", function (){
  xit("should update the score every moment", function(){

  })
})
