export class Item {
    id: string;
    title: string;
    description: string;
    price: string;
    imageSrc: string;

    constructor(title, description, price, imageSrc) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageSrc = imageSrc;
    }

}