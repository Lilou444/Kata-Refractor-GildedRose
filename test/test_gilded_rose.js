var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should conjured is ok", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 6) ]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality).to.equal(4);
  });
});
