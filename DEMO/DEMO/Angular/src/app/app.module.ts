import {NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MobileService } from './mobile.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
   ],
  providers:[MobileService],

  bootstrap: [AppComponent]
})
export class AppModule { }
