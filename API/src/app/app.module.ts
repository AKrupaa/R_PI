import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import nipplejs from 'nipplejs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Konfiguruje aplikator zależności dla HttpClient z usługami wspierającymi dla XSRF. (Cross-site request forgery)
    // czyli wszelkiego rodzaju możliwości użycia metod POST, GET, PUT etc. potrzebnych w naszym projekcie
    // Automatycznie importowane przez HttpClientModule.
    MatSliderModule,
    BrowserAnimationsModule
    // nipplejs
    // Dodaje slidery (suwaki) do użytku w naszym projekcie => używane do poruszania pojadem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// automatycznie wygenerowane
