import { Component, OnInit } from '@angular/core';
import { Alfonso } from 'src/app/models/alfonso';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alf = new Alfonso();

  constructor(private loginS:LoginService){}
  
  ngOnInit() {
  }

  login(){
    this.loginS.login(this.alf).subscribe((res)=>{
      console.log('Respuesta Node',res);
      if(res[0] != undefined){
        alert('BIENVENIDO USUARIO # ' + res[0].ID);
      }else{
        alert('USUARIO / CONTRASEÑA INCORRECTA');
      }
    },
    (err)=>{
        alert(err);
    });
  }

}
