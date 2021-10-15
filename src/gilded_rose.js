class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  
  updateQuality() {
    const qualityMin = 0;
    const qualityMax = 50;

    const agedBrie = 'Aged Brie';
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != agedBrie && this.items[i].name != backstagePasses) {
        if (this.items[i].quality > qualityMin) {
          if (this.items[i].name != sulfuras) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < qualityMax) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == backstagePasses) {
            if (this.items[i].sellIn < 11 || this.items[i].sellIn < 6) {
              if (this.items[i].quality < qualityMax) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != sulfuras) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != agedBrie) {
          if (this.items[i].name != backstagePasses) {
            if (this.items[i].quality > qualityMin) {
              if (this.items[i].name != sulfuras) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < qualityMax) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
