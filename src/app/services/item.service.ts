import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemService {

    items: Item[] = [
        new Item("Lenovo K6 Note ", "Desc", "4 444 грн", "https://i1.foxtrot.com.ua/product/MediumImages/6316580_0.jpg"),
        new Item(" Xiaomi Redmi 5 Plus ", "Desc", "6 499 грн", "https://i.allo.ua/media/catalog/product/cache/1/image/600x415/799896e5c6c37e11608b9f8e1d047d15/x/i/xiaomi-redmi-5-plus-5-99-inch-4gb-64gb-smartphone-black-502962-.jpg"),
        new Item("Xiaomi Redmi 4A ", "Desc", "2 599 грн", "http://kokos.com.ua/content/images/18/xiaomi-redmi-4a3641-93271899140543.jpg"),
        new Item("Samsung Galaxy J7", "Desc", "7 999 грн", "https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_j701m_gold_galaxy_j7_neo_j701m_1352213.jpg"),
        new Item(" Sony Xperia X ", "Desc", "5 999 грн", "https://iglaz.com.ua/image/cache/catalog/products/xperia-x-dual-sim-32gb-lte-4g-white_10012221_1_1474978381-1200x800.jpg"),
        new Item("Nokia 8 Dual", "Desc", "12 999 грн", "https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/0/9/09_6_12.jpg"),
        new Item(" Samsung Galaxy Note 8  ", "Desc", "29 999 грн", "https://s7d2.scene7.com/is/image/SamsungUS/Note8-L-S-Pen-Midnight-Black?$product-details-jpg$"),
        new Item("LG Q6 Prime", "Desc", "6 799 грн", "https://hotline.ua/img/tx/157/157667612_s265.jpg")
    ]

    getAllItems() {
        return this.items;
    }
}