import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(unm:string, pwd:string)
  {
    if(unm==="sujit" && pwd==="sahoo")
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
