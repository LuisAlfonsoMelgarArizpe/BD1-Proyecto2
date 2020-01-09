import { Component, OnInit } from '@angular/core';
import { Alfonso } from 'src/app/models/alfonso';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alf = {
    user:'',
    pass:''
  }

  constructor(private loginS:LoginService, private router: Router){}
  
  ngOnInit() {
  }

  login(){
    this.loginS.login(this.alf).subscribe((res:any)=>{
      console.log('Respuesta Node',res);
      if(res.text == 'OK'){
        alert('BIENVENIDO');
        this.router.navigate(["/menu"]);
      }else{
        alert('USUARIO / CONTRASEÑA INCORRECTA');
      }
    },
    (err)=>{
        alert(err);
    });
  }

}
