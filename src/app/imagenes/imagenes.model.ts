export class ImagenesModel {
  
    id: string;
    url: string;
    favorita: boolean;

    constructor(obj?: any) {
        this.favorita=  obj && obj.favorita || null;
        this.id=  obj && obj.id || null;
        this.url=  obj && obj.url || null;
    }
}

