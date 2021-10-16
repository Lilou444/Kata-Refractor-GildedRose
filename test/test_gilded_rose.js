var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("fixme");
  });

  it("conjured is ok", function() {
    const conjured = new Conjured();
    const item =  ['Conjured Mana Cake', 3, 6];
    expect(conjured.updateItem(item)).to.be.equal(2);
  });

});
