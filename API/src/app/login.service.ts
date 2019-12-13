import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { from, Observable } from 'rxjs';
import { Login } from './login';
import { environment } from '../environments/environment';
// bilioteki użytkowe w danym komponencie

@Injectable({
  providedIn: 'root'
})
// automatycznie wygenerowane po wpisaniu w terminal ng g service LoginService

export class LoginService {
// utworzenie klasy LoginService
  private urlPathOfLogins = environment.apiUrl + 'login';
// ścieżka URL do naszego serwera (backend) "logika"
  constructor(private httpClient: HttpClient) { }
// utworzenie zmiennej prywatnej httpClient typu HttpClient z: HttpClient from '@angular/common/http'


  // postRestApiServer(user: string, password: string){
  //   return this.httpClient.post(this.urlPathOfLogins, {
  //     'username': user,
  //     'password': password
  //   });
  // }

  getUser(): Observable<Array<Login>> {
    return this.httpClient.get<Array<Login>>(this.urlPathOfLogins);
  }
  // metoda getUser() wykorzystuje metodę protokołu HTTP typu GET
  // typ Observalbe zwracająca tablice typu Login (interfejs => nasz username i password zdefiniowane w login.ts)
  // Observable => Strumień z newsami to obiekt obserwowany czyli Observable, który emituje wartości (newsy)
  // this.urlPathOfLogins => ścieżka URL serwera gdzie ma być wysłane żądanie (request)

  // jak zrobić posta? o tak:
  loginClient(username: string, password: string) {
    return this.httpClient.post<boolean>(this.urlPathOfLogins, { username, password });
  }
  // metoda loginClient() wykorzystuje metodę protokołu HTTP typu POST
  // reszta => patrz wyżej!
}
