import { Component, OnInit } from '@angular/core';
import { IProducto } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  tituloPagina: string = 'Detalles del Producto';
  producto: IProducto;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {  }

  onBack():void{
    this._router.navigate(['/productos'])
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.tituloPagina += `: ${id}`;
    this.producto ={
      productId: id,
      productNombre: "Prueba",
      productCodigo: "prue-0001",
      precio: 100,
      descripcion: "prueba",
      fechaSalida: "Enero 3, 2018",
      imageUrl: "URL",
      rating: 4.5
    }
  }

}
