describe ("createBoard", function() {
  it("should return a playing area", function() {
    expect(new Board()).toBeDefined();
  });
  it("should create a fixed div that is 480 px high and 640 px wide with a z-index of 1", function() {
    var board = new Board();
    expect(board.width).toEqual(640);
    expect(board.height).toEqual(480);
    expect(board.zindex).toEqual(1);
  });
  describe("createRoad", function() {
    it("should return a road strip", function() {
      expect(new Road()).toBeDefined();
    });
    it("should create an overlaying div", function(){
      var road = new Road();
      expect(road.zindex).toEqual(2);
    });
    it("should have 7 columns", function() {
      var road = new Road();
      expect(road.children).toEqual(7);
    });
    it("should have a grassy margin on each side i.e. cols 1 and 7", function() {

    });
    it("should have outer lines on each side i.e. cols 2 and 6", function() {

    });
    it("should have two lanes i.e. cols 3 and 5", function() {

    });
    it("should have one median strip i.e. col 4", function() {

    });
  });
});
