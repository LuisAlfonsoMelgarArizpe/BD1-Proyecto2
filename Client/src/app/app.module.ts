import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ReportesComponent } from './components/reportes/reportes.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ReportesComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  exports:[
    MaterialModule
  ]
})
export class AppModule { }
