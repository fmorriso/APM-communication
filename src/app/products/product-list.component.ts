import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {NgModel} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {CriteriaComponent} from '../shared/criteria/criteria.component';
import {ProductParamterService} from './product-paramter.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {



  pageTitle: string = 'Product List';

  includeDetail: boolean = true;

  // the following lines allow the parent to see and use the child
  @ViewChild(CriteriaComponent) filterComponent: CriteriaComponent;
  parentListFilter: string;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  get showImage(): boolean {
    return this.productParameterService.showImage;
  }

  set showImage(value: boolean) {
    this.productParameterService.showImage = value;
  }
  constructor(private productService: ProductService,
              private productParameterService: ProductParamterService) {
  }

  ngAfterViewInit(): void {
    this.parentListFilter = this.filterComponent.listFilter;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
        this.performFilter(this.parentListFilter);
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

  onValueChange(value: string) : void {
    this.performFilter(value);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredProducts = this.products;
    }
  }
}
