var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should conjured is ok", function() {
    const gildedRose = new Shop([ new Item("Conjured Mana Cake", 0, 6) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it("should aged brie is ok when sellIn is greater than 0", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it("should aged brie is not ok when sellIn is greater than 0", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it("should aged brie is ok when sellIn is less than 0 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
  });

  it("should aged brie is not ok when sellIn is less than 0 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  });
  
});

