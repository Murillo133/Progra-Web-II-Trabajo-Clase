// login.component.ts
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

export class RegisterComponent {
  user: User;

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    this.user = {
      dni: "",
      name: "", 
      tel: "",
      email: "",
      password:""  
      };
  }

  register() {
    this.http.post(this.baseUrl + 'api/auth/register', this.user).subscribe((data) => {
    window.location.href = 'https://localhost:5001/login';
  }, error => console.error(alert("Invalid format")));
  }
}


interface User {

    dni: string;
    name: string; 
    tel: string;
    email: string;
    password: string;
}