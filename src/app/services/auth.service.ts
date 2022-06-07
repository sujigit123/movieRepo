import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  kkl:any;
  constructor(private httpCl:HttpClient) { }

  login(unm:string, pwd:string)
  {
    var kku;
    var jku=this.httpCl.get('http://localhost/API1/api/values?uid=sujit').subscribe(data=>{this.kkl=data;});
    if(this.kkl.UID===unm && this.kkl.PWD===pwd)
    {
      return 200;
    }
    else{
      return 500;
    }
  }

  logout()
  {
    
  }
}
