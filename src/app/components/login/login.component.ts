import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(this.loginForm);
  }
  public loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  login(): void {
    if (
      this.loginForm.controls.email.value &&
      this.loginForm.controls.password.value
    ) {
      console.log(this.loginForm.value);
    } else {
    }
  }
}
