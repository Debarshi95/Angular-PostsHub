import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  ngOnInit() {}
  createPost() {}
}
