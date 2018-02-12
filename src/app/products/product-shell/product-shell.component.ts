import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
    pageTitle: string = 'Products';
    monthCount: number;
    product: IProduct;

    constructor() { }

    ngOnInit() {
    }

}
