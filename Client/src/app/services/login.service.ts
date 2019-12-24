import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Alfonso } from '../models/alfonso';
import ip from './IP';

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(a:Alfonso){
    console.log('Usuario a enviar :' , a);
    return this.http.post(ip + '/login',a);    
  }
 
}
