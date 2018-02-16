export interface IProducto{
    productId: number;
    productNombre: string;
    productCodigo: string;
    fechaSalida: string;
    descripcion: string;
    precio: number;
    rating: number;
    imageUrl: string;
}

export class Producto implements IProducto {
    constructor(public productId: number,
                public productNombre: string,
                public productCodigo: string,
                public fechaSalida: string,
                public descripcion: string,
                public precio: number,
                public rating: number,
                public imageUrl: string) {

    }

    calculateDiscount(percent: number ):number{
        return this.precio - (this.precio * percent /100);
    }

}