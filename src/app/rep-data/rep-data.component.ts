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

  constructor(private service: PostService) {}

  ngOnInit() {
    this.filteredReps = this.posts.filter((t: any) => t.fname === 'Lawrinda');
    this.service.getPosts().subscribe((res) => {
      try {
        this.posts = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
