import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Alfonso } from '../models/alfonso';
import ip from './IP';

@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(a:any){
    console.log('Usuario a enviar :' , a);
    return this.http.post(ip + '/login',a);    
  }

  rep1(){
    return this.http.get(ip + '/rep1');
  }

  rep2(){
    return this.http.get(ip + '/rep2');
  }

  rep3(){
    return this.http.get(ip + '/rep3');
  }

  rep4(){
    return this.http.get(ip + '/rep4');
  }

  rep5(){
    return this.http.get(ip + '/rep5');
  }

  rep6(){
    return this.http.get(ip + '/rep6');
  }

  rep7(){
    return this.http.get(ip + '/rep7');
  }

  rep8(){
    return this.http.get(ip + '/rep8');
  }

  rep9(){
    return this.http.get(ip + '/rep9');
  }

  rep10(){
    return this.http.get(ip + '/rep10');
  }

  rep11(){
    return this.http.get(ip + '/rep11');
  }

  rep12(){
    return this.http.get(ip + '/rep12');
  }

  getInventos(){
    return this.http.get(ip+'/inventos');
  }
 
  getInventores(){
    return this.http.get(ip+'/inventores');
  }

  getPaises(){
    return this.http.get(ip+'/paises');
  }

  getProfesionales(){
    return this.http.get(ip+'/profesionales');
  }

  postInvento(i:any){
    return this.http.post(ip+'/newInvento',i);
  }

  delInvento(i:any){
    return this.http.post(ip+'/delInvento',i);
  }

  postInventor(i:any){
    return this.http.post(ip+'/newInventor',i);
  }

  postProfesional(i:any){
    return this.http.post(ip+'/newProfesional',i);
  }

  getRegiones(){
    return this.http.get(ip+'/regiones');
  }

}
