import { Component, OnInit } from '@angular/core';
import { PostService } from '../graphql.service';

@Component({
  selector: 'app-rep-data',
  templateUrl: './rep-data.component.html',
  styleUrls: ['./rep-data.component.css'],
})
export class RepDataComponent implements OnInit {
  posts: any;
  filteredReps: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      (res) => {
        try {
          console.log(res); // Check the value and type of res
          this.posts = res;
          this.filteredReps = this.posts.data.filter((t: any) => t.fname === 'Lawrinda');
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
