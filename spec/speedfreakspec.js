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

  });


  it("should have a moving car in a layer over the board", function(){
    expect($(".car_slider").css("z-index")).toEqual("3")
    expect($("#avatar").css("z-index")).toEqual("6")

  });
});


// describe ("IllusionOfMovement", function(){

//   new Board();
//   var beforeMargin = 0;
//   var afterMargin = 0;
//   // console.log(Date.now());

//   beforeEach(function(done) {
//     setInterval(function() {console.log(Date.now())}, 1000);
//     beforeMargin = parseInt($(".stripe.moving").css("margin-top"));
//     console.log(beforeMargin);
//     done();
//   });
//   afterEach(function(done) {
//     setInterval(function() {
//       afterMargin = parseInt($(".stripe.moving").css("margin-top"));
//        done();
//     }, 2000);
//   });

//   it("should do as i ask", function(){
//     expect(true).toEqual(true);
//   });

// });

//   xit("should have markers in columns 2, 4 and 6 of the playing area - each with a z-index of 3", function(){
//     expect($(".side_line").children()).hasClass(".stripe.moving").toEqual(true)
//     expect($(".centre-line").children().first()).hasClass(".stripe").toEqual(true)
//   });

// // Reference to use http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html

//   xit("should move the stripes down, within their columns", function(){
//     //expect(parseInt(setInterval(function () {($(".stripe.moving").css("margin-top"));}, 3000))).toBeLessThan(470);
//     // setInterval(function () {console.log($(".stripe.moving").css("margin-top"));}, 3000);
//     //setInterval(function () { (parseInt($(".stripe.moving").css("margin-top"))).toBeLessThan(470); }, 3000);
//     //expect(parseInt($(".stripe.moving").css("margin-top"))).toBeLessThan(470);
//   });

// });


// describe ("CarController", function(){
//   var spyEvent;
//   board = new Board();
//   it("should move the image horizontally when the user presses the left or right arrows", function(){
//     spyEvent = spyOnEvent(($("body")), "keydown");
//     ($("body")).trigger("keydown");
//     expect("keydown").toHaveBeenTriggeredOn($("body"));
//     expect(spyEvent).toHaveBeenTriggered();
//   });

// });

