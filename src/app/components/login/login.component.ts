import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log(this.loginForm);
  }
  public loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  login(user: FormGroup): void {
    this.authService.login(user.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/dashboard"]);
      },
      err => {
        console.log(err);
        if (err.error.message) {
          this.loginForm.setErrors({ servererror: err.error.message });
        } else {
          this.loginForm.setErrors({ servererror: null });
        }
        if (err.error.error) {
          this.loginForm
            .get("email")
            .setErrors({ servererror: err.error.error.email });
          this.loginForm
            .get("password")
            .setErrors({ servererror: err.error.error.password });
        } else {
          this.loginForm.get("password").setErrors({ servererror: null });
          this.loginForm.get("email").setErrors({ servererror: null });
        }
      }
    );
    console.log(this.loginForm);
  }
}
