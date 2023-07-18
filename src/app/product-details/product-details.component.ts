import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../resources.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  posts: any;
  filteredProdDets: any;

  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.service.getPosts().subscribe(
      (res) => {
        try {
          this.posts = res;
          this.posts = this.posts.data.find((t: any) => t.id === productIdFromRoute);
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
