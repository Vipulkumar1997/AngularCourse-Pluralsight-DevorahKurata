import { Injectable } from '@angular/core';
import { IProducto, Producto } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService{
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProducto[]> {
        return this._http.get<IProducto[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse){
        console.log(error.message);
        return Observable.throw(error.message);
    }
}