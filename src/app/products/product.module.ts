import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';

import { ProductService } from './product.service';
import { ProductEditGuard } from './edit/product-edit-guard.service';
import {ProductParameterService} from './product-parameter.service';
import {ProductShellDetailComponent} from './product-shell/product-shell-detail.component';
import {ProductShellListComponent} from './product-shell/product-shell-list.component';
import { ProductShellComponent } from './product-shell/product-shell.component';


const routesSeparatePages: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent },
  {
    path: ':id/edit',
    canDeactivate: [ ProductEditGuard ],
    component: ProductEditComponent
  }
];

const routesSideBySide: Routes = [
  { path: '', component: ProductShellComponent },
  { path: ':id', component: ProductDetailComponent },
  {
    path: ':id/edit',
    canDeactivate: [ ProductEditGuard ],
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routesSideBySide)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductShellComponent,
    ProductShellListComponent,
    ProductShellDetailComponent
  ],
  providers: [
    ProductService,
    ProductEditGuard,
    ProductParameterService
  ]
})
export class ProductModule { }
