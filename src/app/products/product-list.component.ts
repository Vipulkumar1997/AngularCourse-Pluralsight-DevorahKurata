import { Component, OnInit } from "@angular/core";
import { IProducto, Producto } from "./product";
import { ProductService } from "./product.services";


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    tituloPagina: string = 'Lista de Productos';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFiltro: string;
    get listFiltro(): string {
        return this._listFiltro;
    }
    set listFiltro(value: string){
        this._listFiltro = value;
        this.filtroProductos = this.listFiltro ? this.usarFiltro(this.listFiltro) : this.productos;
    }

    filtroProductos: IProducto[];
    productos: IProducto[] = []

    constructor(private _productService: ProductService){
    };
    usarFiltro(filtradoPor: string): IProducto[]{
        filtradoPor = filtradoPor.toLocaleLowerCase();
        return this.productos.filter((producto: IProducto)=>
            producto.productNombre.toLocaleLowerCase().indexOf(filtradoPor) !== -1);
    };


    onRatingClicked(message:string): void {
        this.tituloPagina = 'Lista de Producto: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe(products => {
                this.productos = products;  
                this.filtroProductos = this.productos;
                },
                error => this.errorMessage = <any>error);
        
    }
}