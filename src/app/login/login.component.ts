import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sign_in_btn: any;
  sign_up_btn: any;
  container: any;
  color="pink";
  registerForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.sign_in_btn = document.querySelector("#sign-in-btn");
    this.sign_up_btn = document.querySelector("#sign-up-btn");
    this.container = document.querySelector(".container");
    this.sign_up_btn.addEventListener("click", () => {
      this.container.classList.add("sign-up-mode");
      
});
this.sign_in_btn.addEventListener("click", () => {
  this.container.classList.remove("sign-up-mode");
});
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
console.log("hi");
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.router.navigate(['/dashboard']);
    console.log("hello");

}


}
