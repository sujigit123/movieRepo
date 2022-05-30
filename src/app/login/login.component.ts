import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  errorMessage="";

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.username.trim().length===0 || this.password.trim().length===0)
    {
      this.errorMessage="credentials missing";
    }
    else{
      this.errorMessage="";
      let res=this.auth.login(this.username.trim(),this.password);
      if(res===200)
      {
        this.router.navigate(['home'])
      }
      else if(res===500)
      {
        this.errorMessage="Invalid Credentials";
      }
    }
      
  }
}
