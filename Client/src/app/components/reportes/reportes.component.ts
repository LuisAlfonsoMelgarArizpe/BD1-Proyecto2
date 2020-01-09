import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  datos: any;

  constructor(private loginS: LoginService) { }

  ngOnInit() {
    if (localStorage.getItem('rep') == '1') {
      this.rep1();
    } else if (localStorage.getItem('rep') == '2') {
      this.rep2();
    } else if (localStorage.getItem('rep') == '3') {
      this.rep3();
    } else if (localStorage.getItem('rep') == '4') {
      this.rep4();
    } else if (localStorage.getItem('rep') == '5') {
      this.rep5();
    } else if (localStorage.getItem('rep') == '6') {
      this.rep6();
    } else if (localStorage.getItem('rep') == '7') {
      this.rep7();
    } else if (localStorage.getItem('rep') == '8') {
      this.rep8();
    } else if (localStorage.getItem('rep') == '9') {
      this.rep9();
    } else if (localStorage.getItem('rep') == '10') {
      this.rep10();
    } else if (localStorage.getItem('rep') == '11') {
      this.rep11();
    } else if (localStorage.getItem('rep') == '12') {
      this.rep12();
    }
  }

  rep1() {
    this.loginS.rep1().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep2() {
    this.loginS.rep2().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep3() {
    this.loginS.rep3().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep4() {
    this.loginS.rep4().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep5() {
    this.loginS.rep5().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep6() {
    this.loginS.rep6().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep7() {
    this.loginS.rep7().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep8() {
    this.loginS.rep8().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep9() {
    this.loginS.rep9().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep10() {
    this.loginS.rep10().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep11() {
    this.loginS.rep11().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  rep12() {
    this.loginS.rep12().subscribe((res: any) => {
      console.log(res);
      this.datos = res;
    },
      err => {
        console.error(err);
      })
  }

  getReporte() {
    return localStorage.getItem('rep');
  }

}
