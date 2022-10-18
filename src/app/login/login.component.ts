import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRouter:Router) { }
  userName=""
  password=""
  
  readValue=()=>{
    let data={
      "userName":this.userName,
      "password":this.password
    }
    if (this.userName=="admin" && this.password=="admin") {
      this.myRouter.navigate(["/dash"])
      
    } else {
      alert("invalid credential")
    }
    console.log(data)
  
    this.userName=""
    this.password=""
  }
  
    ngOnInit(): void {
    }

}
