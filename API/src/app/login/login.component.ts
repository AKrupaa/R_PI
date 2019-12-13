import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { stringify } from 'querystring';
import { timeout } from 'q';
// bilioteki użytkowe w danym komponencie

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// Opisy komponentu app-login, gdzie znajduje się wygląd strony, opis strony, źródła

export class LoginComponent implements OnInit {
  // utworzenie klasy LoginComponent
  login: Array<Login>;
  // stworzenie tablicy login typu Login
  response: string;
  // stworzenie zmiennej typu string


  @Output() flaga: EventEmitter<boolean> = new EventEmitter();
  // stworzenie obiektu klasy EventEmitter o identyfikatorze flaga typu boolean
  constructor(private loginService: LoginService) {}
  // utworzenie zmiennej prywatnej loginService typu LoginService

  ngOnInit() {
    // this.loginService.getUser().subscribe(data => {
    //   this.login = data;
    // });

    }
    // W ngOnInit() możemy zawrzeć kod, który ma się wykonać po wygenerowaniu naszej strony HTML po strone klienta

  // -----------------------------------------------------------------------------------------------------------------

  // moj onclick(): -----------------------------------------------
  // onSubmit(uname: string, pswd: string) {
  //   this.loginService.loginClient(uname , pswd).subscribe(())



    // this.loginService.getUser().subscribe(data => {
    //   this.login = data;
    // });

  // --------------------------------------------------------------

  // getBoo(){
  //   return this.boo;
  // }

  // -----------------------------------------------------------------------------------------------------------------

  button_onClick(uname: string, pswd: string) {
    let timeouthan;
    timeouthan = setInterval(() => {
      this.loginService.loginClient(uname, pswd).subscribe(data => {
        // this.response = data;
        console.log(data);
        this.flaga.emit(data);
        // this.flaga.emit(data); => data przyjmuje wartości 'true', 'false'
        // 'true' kiedy użytkownik poprawnie wprowadził nazwe użytkowanika i hasło
        // innymi słowy: logowanie powiodło się
        // 'false' w innym wypadku
        // oczywiście te wartości są umówione pomiędzy serwerem a fronendem
        // może przyjmować nawet "siema wszystkim" - tylko trzeba zadać sobie pytanie, czy jest nam to potrzbne?
      });
      // this.loginService.loginClient().subscribe => używa login.service do wysłania wpisanych przez
      // użytkownika nazwy użytkownika i hasła na adres serwera zdefiniowanego w app.service.ts
      // po wysłaniu danych oczekuje na informację zwrotną, którą przypisuje do zmiennej: data
      // wykorzystujemy tutaj wyrażenia lambda
      timeouthan = null;
    }, 100);

    // Definicja metody button_onClick(), która jest wywoływana w chwili kliknięcia przez użytkownika przycisku na stronie "Login"
    // ten zielony ;)


  //   if (uname === 'a' && pswd === 'a') {
  //     this.loginService.getRestApiServer().subscribe((data: string) => {
  //       console.log(data);
  //     });

  //     console.log('Zgadza sie!');
  //   //  return true;
  //   } else {
  //     console.log('Nie zgadza sie' + uname, pswd);
  //   //  return false;
  //   }
  // }


  // this.loginService.postRestApiServer(uname, pswd).subscribe((data: boolean) => {
  //   if (data === true) {
  //     this.boo = data;
  //   }
  // });
}

  do_nothing() {
    console.log('nothing');
  }
  // nic nie rób
  // wypisz w consoli: nothing

}
