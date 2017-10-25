import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {CalendarModule} from 'primeng/primeng';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from 'app/components/login-module/login.module';
import { EmpresaService } from './services/empresa.service';
import { HttpModule } from '@angular/http';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    //  CalendarModule,
    //  NgbModule.forRoot(),
    LoginModule
  ],
  providers: [// {provide:APP_BASE_HREF,useValue:'/base-app'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    EmpresaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
