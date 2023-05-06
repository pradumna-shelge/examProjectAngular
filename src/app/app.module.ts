import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Exam/navbar/navbar.component';
import { ExampageComponent } from './Exam/exampage/exampage.component';
import { HomepageComponent } from './Exam/homepage/homepage.component';
import { ThankYouComponent } from './Exam/thank-you/thank-you.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExampageComponent,
    HomepageComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 get(){
  
 }

 }
