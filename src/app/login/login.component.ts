import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sign_in_btn: any;
  sign_up_btn: any;
  container: any;
  color="pink"
  constructor() { }

  ngOnInit(): void {
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

}
