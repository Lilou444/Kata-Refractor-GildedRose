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

  it("should sulfuras is ok", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("should sulfuras is not ok", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("should backstage passed is ok when sellIn is less than 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 44) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  
  it("should backstage passed is not ok when sellIn is less than 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 44) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(44);
  });
  
  it("should backstage passed is ok when sellIn is less than 11", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(42);
  });

  it("should backstage passed is not ok when sellIn is less than 11", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(41);
  });

  it("should backstage passed is ok when sellIn is less than 6", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 33) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(36);
  });

  it("should backstage passed is not ok when sellIn is less than 6", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 33) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(35);
  });

});

