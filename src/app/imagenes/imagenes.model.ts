export class ImagenesModel {
    breeds: [];
    height: number;
    id: string;
    url: string;
    width: number;

    constructor(obj?: any) {
        this.breeds = obj && obj.breeds || null;
        this.height=  obj && obj.height || null;
        this.id=  obj && obj.id || null;
        this.url=  obj && obj.url || null;
        this.width=  obj && obj.width || null;
    }
}

