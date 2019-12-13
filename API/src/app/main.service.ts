import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private urlPathOfLogins = environment.apiUrl + 'MovingTheCarButtons';
  constructor(private httpClient: HttpClient) { }

  sendValuesOfMoving(moveVertical: Int8Array, moveHorizontal: Int8Array) {
    return this.httpClient.post<boolean>(this.urlPathOfLogins, { moveVertical, moveHorizontal });
  }
}
