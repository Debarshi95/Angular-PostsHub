import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "src/app/posts.service";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  id: string;
  post: {};
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getId();
    this.getPost();
  }
  getId() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    return this.id;
  }

  getPost() {
    this.postsService.getPost(this.getId()).subscribe(
      res => {
        this.post = res.post;
        console.log(this.post);
      },
      err => console.log(err)
    );
  }
}
