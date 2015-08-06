describe ("Board", function() {
  it("should return a playing area", function() {
    expect(new Board()).toBeDefined();
  });

  it("should create a div", function(){
    expect($(".board").prop("tagName")).toEqual("DIV");
  });


  it("should create a fixed div that is 480 px high and 640 px wide with a z-index of 1", function() {
    expect($(".board").css("width")).toEqual("640px");
    expect($(".board").css("height")).toEqual("480px");
    expect($(".board").css("z-index")).toEqual("1");
  });

  it("should contain 7 divs", function(){
    expect($(".board").children().length).toEqual(7);
  });

  it("should have a grassy margin", function(){
    expect($(".board").first().hasClass("grass")).toBeTruthy
  });
});
