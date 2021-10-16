class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class UpdateQuality {
  constructor(){
    this.qualityMin = 0;
    this.qualityMax = 50;
  }

  setQuality(item,value){
    if(value < this.qualityMax && value > this.qualityMin){
      item.quality = value;
    } else if (value <= this.qualityMin){
      item.quality = this.qualityMin;
    } else if (value >= this.qualityMax){
      item.quality = this.qualityMax;
    }
  }
  
  updateItem(item){
    if(item.sellIn < 1){
      this.setQuality(item, item.quality - 2);
    } else {
      this.setQuality(item, item.quality - 1);
    }
    item.sellIn -= 1;
  }

  itemName(item){
    return true;
  }
}

class Conjured extends UpdateQuality {

  itemName(item){
    return item.name == 'Conjured Mana Cake';
  }

  updateItem(item){
    let quality = 0;
    if(item.sellIn < 1){
      quality = 4
    } else {
      quality = 2
    }
    this.setQuality(item, item.quality - quality);
    item.sellIn -= 1;
  }
}
class AgedBrie extends UpdateQuality {
  itemName(item){
    return item.name == 'Aged Brie';
  }

  updateItem(item){
    item.sellIn -= 1;
    if(item.sellIn < 0){
      this.setQuality(item, item.quality + 2)
    } else {
      this.setQuality(item, item.quality + 1)
    }
  }
}

class BackstagePasses extends UpdateQuality {
  itemName(item){
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  updateItem(item){
    let quality = 1;
    if(item.sellIn < 1){
      quality = -item.quality;
    } else if(item.sellIn < 11){
      quality = 2;
    } else if(item.sellIn < 6){
      quality = 3;
    } 
    this.setQuality(item, item.quality + quality);
    item.sellIn -= 1;
  }
}

class Sulfuras extends UpdateQuality {
  itemName(item){
    return item.name == 'Sulfuras, Hand of Ragnaros';
  }

  updateItem(item){
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.itemUpdate = [
      new Conjured(),
      new AgedBrie(),
      new BackstagePasses(),
      new Sulfuras(),
      new UpdateQuality(),
    ]
  }
  
  updateQuality() {
    for(let item of this.items){
      const update = this.itemUpdate.find((update) => update.itemName(item));
      update.updateItem(item);
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
}
