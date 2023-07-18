import { Component, OnInit } from '@angular/core';
import { ProductService } from './resources.service';

@Component({
  selector: 'app-product-resources',
  templateUrl: './product-resources.component.html',
  styleUrls: ['./product-resources.component.css']
})

export class ProductResourcesComponent implements OnInit {
  posts: any;
  filteredProd: any;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      (res) => {
        try {
          console.log(res); // Check the value and type of res
          this.posts = res;
          this.filteredProd = this.posts.data
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
