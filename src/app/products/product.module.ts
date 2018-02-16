import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.services';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'productos', component: ProductListComponent},
      { path: 'productos/:id', component: ProductDetailComponent, canActivate:[ProductGuardService]},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers:[
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
