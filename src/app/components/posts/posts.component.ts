import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts = [];
  ngOnInit() {
    this.allPosts();
  }
  allPosts() {
    this.postsService.getAllPosts().subscribe(
      res => {
        this.posts = res.posts;
        console.log(this.posts);
      },
      err => console.log(err)
    );
  }
}
