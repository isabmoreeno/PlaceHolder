import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  list:any[] = [];

  constructor(private service: PostService){}

  ngOnInit(): void {
    this.service.getList().subscribe(
      json => this.list = json
    );
  }
}