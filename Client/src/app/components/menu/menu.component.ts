import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = 0;
  datos: any;
  paises: any;
  profs: any;
  regiones:any;
  newInv = {
    NOMBRE: '',
    ANO: '',
    ID_PAIS: 0,
    ID_PROFESIONAL: 0
  };

  newInvR = {
    NOMBRE: '',
    ID_PAIS: 0
  }

  newProf={
    NOMBRE:'',
    FECHA_CONTRATO :'',
    SALARIO : 0,
    COMISION : 0
  }

  constructor(private router: Router, private loginS: LoginService) { }

  ngOnInit() {

  }


  reporte1() {
    localStorage.setItem('rep', '1');
    this.router.navigate(["/reportes"]);
  }
  reporte2() {
    localStorage.setItem('rep', '2');
    this.router.navigate(["/reportes"]);
  }
  reporte3() {
    localStorage.setItem('rep', '3');
    this.router.navigate(["/reportes"]);
  }
  reporte4() {
    localStorage.setItem('rep', '4');
    this.router.navigate(["/reportes"]);
  }
  reporte5() {
    localStorage.setItem('rep', '5');
    this.router.navigate(["/reportes"]);
  }
  reporte6() {
    localStorage.setItem('rep', '6');
    this.router.navigate(["/reportes"]);
  }
  reporte7() {
    localStorage.setItem('rep', '7');
    this.router.navigate(["/reportes"]);
  }
  reporte8() {
    localStorage.setItem('rep', '8');
    this.router.navigate(["/reportes"]);
  }
  reporte9() {
    localStorage.setItem('rep', '9');
    this.router.navigate(["/reportes"]);
  }
  reporte10() {
    localStorage.setItem('rep', '10');
    this.router.navigate(["/reportes"]);
  }
  reporte11() {
    localStorage.setItem('rep', '11');
    this.router.navigate(["/reportes"]);
  }
  reporte12() {
    localStorage.setItem('rep', '12');
    this.router.navigate(["/reportes"]);
  }

  showInventos() {
    this.loginS.getInventos().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
      this.menu = 1;
    },
      err => {
        console.error(err);
      })


  }

  nuevoInvento() {
    this.getPaises();
    this.getProfesionales();
    this.menu = 2;


  }

  showInventores() {
    this.loginS.getInventores().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
      this.menu = 3;
    },
      err => {
        console.error(err);
      })
  }

  getPaises() {
    this.loginS.getPaises().subscribe((res: any) => {
      console.log('paises', res);
      this.paises = res;

    },
      err => {
        console.error(err);
      })
  }

  getProfesionales() {
    this.loginS.getProfesionales().subscribe((res: any) => {
      console.log('profesionales', res);
      this.profs = res;

    },
      err => {
        console.error(err);
      })
  }

  postInvento() {
    console.log('newInv', this.newInv);
    this.loginS.postInvento(this.newInv).subscribe((res: any) => {
      console.log('INSERT', res);
      alert('Nuevo Invento Insertado');
      this.newInv = {
        NOMBRE: '',
        ANO: '',
        ID_PAIS: 0,
        ID_PROFESIONAL: 0
      };
      this.showInventos();

    },
      err => {
        console.error(err);
      })
  }

  nuevoInventor() {
    this.getPaises();
    this.menu = 4;
  }

  postInventor() {
    console.log('newInvR', this.newInvR);
    this.loginS.postInventor(this.newInvR).subscribe((res: any) => {
      console.log('INSERT', res);
      alert('Nuevo Inventor Insertado');
      this.newInvR = {
        NOMBRE: '',
        ID_PAIS: 0
      };
      this.showInventores();

    },
      err => {
        console.error(err);
      })
  }

  showProfesionales(){
    this.getProfesionales();
    this.menu = 5;
  }

  nuevoProfesional(){
    this.menu = 6;
  }

  postProfesional(){
    this.loginS.postProfesional(this.newProf).subscribe((res: any) => {
      console.log('INSERT', res);
      alert('Nuevo Profesional Insertado');
      this.newProf={
        NOMBRE:'',
        FECHA_CONTRATO :'',
        SALARIO : 0,
        COMISION : 0
      }
      this.showProfesionales();

    },
      err => {
        console.error(err);
      })
  }

  showPaises(){
    this.getPaises();
    this.menu = 7;
  }

  nuevoPais(){
    this.menu = 8;
  }

  showRegiones(){
    this.getRegiones();
    this.menu = 9;
  }

  getRegiones(){
    this.loginS.getRegiones().subscribe((res: any) => {
      console.log(res);
      this.regiones = res;
    },
      err => {
        console.error(err);
      })
  }
}
