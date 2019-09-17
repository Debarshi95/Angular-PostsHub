import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      password_confirmation: new FormControl("")
    });
  }

  registerUser(user: FormGroup) {
    console.log(user);
    this.authService.register(user.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/dashboard"]);
      },
      err => {
        console.log(err);
        if (err.error.message) {
          this.registerForm.setErrors({ servererror: err.error.message });
        } else {
          this.registerForm.setErrors({ servererror: null });
        }
        if (err.error.error) {
          this.registerForm
            .get("firstname")
            .setErrors({ servererror: err.error.error.firstname });
          this.registerForm
            .get("lastname")
            .setErrors({ servererror: err.error.error.lastname });
          this.registerForm
            .get("email")
            .setErrors({ servererror: err.error.error.email });
          this.registerForm
            .get("password")
            .setErrors({ servererror: err.error.error.password });
          this.registerForm
            .get("password_confirmation")
            .setErrors({ servererror: err.error.error.password });
        } else {
          this.registerForm.get("firstname").setErrors({ servererror: null });
          this.registerForm.get("lastname").setErrors({ servererror: null });
          this.registerForm.get("email").setErrors({ servererror: null });
          this.registerForm.get("password").setErrors({ servererror: null });
          this.registerForm
            .get("password_confirmation")
            .setErrors({ servererror: null });
        }
      }
    );
  }
}
