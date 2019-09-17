import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  error: [] = [];
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getId();
    this.getPost();
  }
  getId() {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  getPost() {
    this.postsService.getPost(this.id).subscribe(
      res => {
        this.post = res.post;
        console.log(this.post);
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePost(id) {
    this.postsService.deletePost(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/posts"]);
      },
      err => {
        console.log(err);
        if (err.error) {
          this.error = err.error;
        }
        console.log(this.error);
      }
    );
  }
}
