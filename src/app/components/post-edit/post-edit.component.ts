import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { PostsService } from "src/app/posts.service";
@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.css"]
})
export class PostEditComponent implements OnInit {
  state: {};
  editPostForm: FormGroup;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getId();
    this.getPostDetails();
    this.editPostForm = new FormGroup({
      title: new FormControl(""),
      body: new FormControl("")
    });
    this.editPostForm.patchValue(this.state);
  }
  getId() {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  getPostDetails() {
    this.state = history.state.post;
    console.log(this.state);
  }
  editPost(post: FormGroup) {
    this.postsService.editPost(post.value, this.id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/posts"]);
      },
      err => {
        console.log(err);
        if (err.error.message) {
          this.editPostForm.setErrors({ servererror: err.error.message });
        } else {
          this.editPostForm.setErrors({ servererror: null });
        }
        console.log(this.editPostForm);
      }
    );
  }
}
