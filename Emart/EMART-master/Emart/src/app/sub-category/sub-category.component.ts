import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}

