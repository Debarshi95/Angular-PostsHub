import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log(this.loginForm);
  }
  public loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  login(user: FormGroup): void {
    this.authService.login(user.value).subscribe(
      res => console.log(res),
      err => {
        console.log(err);
        this.loginForm.setErrors({ servererror: err.error.message });
        this.loginForm
          .get("email")
          .setErrors({ servererror: err.error.error.email });
        this.loginForm
          .get("password")
          .setErrors({ servererror: err.error.error.password });
      }
    );
    console.log(this.loginForm);
  }
}
