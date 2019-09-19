import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/posts.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router) {}
  createPostForm: FormGroup;
  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: new FormControl(""),
      body: new FormControl("")
    });
  }
  createPost(post: FormGroup) {
    this.postsService.createPost(post.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/dashboard"]);
      },
      err => {
        console.log(err);
        console.log(this.createPostForm);
        if (err.error) {
          this.createPostForm.setErrors({ servererror: err.error.message });
        } else {
          this.createPostForm.setErrors({ servererror: null });
        }
        if (err.error.error) {
          this.createPostForm
            .get("title")
            .setErrors({ servererror: err.error.error.title });
          this.createPostForm
            .get("body")
            .setErrors({ servererror: err.error.error.body });
        } else {
          this.createPostForm.get("title").setErrors({ servererror: null });
          this.createPostForm.get("body").setErrors({ servererror: null });
        }
      }
    );
  }
}
