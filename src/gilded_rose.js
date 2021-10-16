class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class UpdateQuality {
  constructor(items=[]){
    this.qualityMin = 0;
    this.qualityMax =50;
    this.items = items;

  }

  setQuality(item,value){
    if (value > this.qualityMin){
      item.quality -= 1
    }
    if (value < this.qualityMax){
      item.quality +=1
    }
  }
}

class Shop extends UpdateQuality {

  
  updateQuality() {

    const agedBrie = 'Aged Brie';
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != agedBrie && this.items[i].name != backstagePasses && this.items[i].name != sulfuras) {
        this.setQuality(this.items[i],this.items[i].quality)
      } 
      
      else {
        if (this.items[i].quality < this.qualityMax) {
          this.items[i].quality += 1;
          if (this.items[i].name == backstagePasses) {
            if (this.items[i].sellIn < 11 || this.items[i].sellIn < 6) {
              if (this.items[i].quality < this.qualityMax) {
                this.items[i].quality += 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != sulfuras) {
        this.items[i].sellIn -= 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != agedBrie && this.items[i].name != sulfuras) {
          if (this.items[i].name != backstagePasses) {
            if (this.items[i].quality > this.qualityMin) {
              this.items[i].quality -= 1;
            } 
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          this.setQuality(this.items[i],this.items[i].quality)
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
