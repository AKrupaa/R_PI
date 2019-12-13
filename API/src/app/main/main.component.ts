import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MainService } from '../main.service';
import { interval, Subscription } from 'rxjs';
import * as pkg from '@ngfx/ui';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  controller;
  subscriptionToMovingTheCar: Subscription;
  // utworzenie subskrypcji do przetwarzania danych w trybie asynchronicznym
  // w celu przesyłania informacji ustawień sliderów odpowiedzialnych za ruch autka

  // stworzenie obiektu mainService
  constructor(private mainService: MainService) {
    this.subscriptionToMovingTheCar = interval(100).subscribe((x => {
      this.sendValuesOfMovingTheCar();
      // console.log(x);
  }));
  // Co 100 milisekund wywoływana jest funkcja "sendValuesOfMovingTheCar()"",
  // aż do czasu zniszczenia subskrybcji "subscriptionToMovingTheCar"
  }


  @Output() flaga: EventEmitter<boolean> = new EventEmitter();
  // stworzenie obiektu klasy EventEmitter o identyfikatorze flaga typu boolean

  // pollingSimpleClick: any;
  // pollingOfMovementCar: any;
  moveHorizontal: Int8Array;
  // utworzonie zmiennej przechowywującą wartość suwaka odpowidzialnego za ruch prawo-lewo
  moveVertical: Int8Array;
  // utworzonie zmiennej przechowywującą wartość suwaka odpowidzialnego za ruch przód-tył


  ngOnInit() {
    console.log('PACKAGE:', pkg);
  }


  ngOnDestroy() {
    this.subscriptionToMovingTheCar.unsubscribe();
    // zniszczenie subskrybcji "subscriptionToMovingTheCar"
  }

  // -----------------------------------------------------------------------
  // Początek metod odpowiedzialnych za zbieranie danych z HTML
  onChangeVertical(moveVertical: Int8Array) {
    this.moveVertical = moveVertical;
    console.log('moveVertical value = ' + this.moveVertical);
    this.controller.createSurface('dualJoySticks', {
      joyLeft: {
        type: 'slider',
        name: 'joystick',
        orient: 'is--joystick',
        min: [0, 0],
        max: [1024, 1024],
        snapToCenter: true,
        gridArea: '2 / 1 / 3 / 2',
        placeSelf: 'center center',
        transform: 'translateY(-6px)'
      },
      joyRight: {
        type: 'slider',
        name: 'joystick',
        orient: 'is--joystick',
        min: [0, 0],
        max: [1024, 1024],
        snapToCenter: true,
        gridArea: '2 / 3 / 3 / 4',
        placeSelf: 'center center',
        transform: 'translateY(-6px)'
      }
    });
  }
  // Pobierz daną od poruszania góra-dół i przepisz ją do zmiennej lokalnej moveVertical
  // dodatkowo: wypisuje jej wartość w konsoli

  onChangeHorizontal(moveHorizontal: Int8Array) {
    this.moveHorizontal = moveHorizontal;
    console.log('moveHorizontal value = ' + this.moveHorizontal);
  }
  // Pobierz daną od poruszania lewo-prawo i przepisz ją do zmiennej lokalnej moveHorizontal
  // dodatkowo: wypisuje jej wartość w konsoli

  // Koniec metod zbierających dane z HTML
  // -----------------------------------------------------------------------

  sendValuesOfMovingTheCar() {
  this.mainService
  .sendValuesOfMoving(this.moveVertical, this.moveHorizontal)
  .subscribe(data => {
    console.log(data);
  });
  }
  // Metoda wywyołująca serwis pozwalająca wysłać pozycję suwaków odpowiedzialnych za ruch samochodu na serwer.
  // Jeśli wszystko się uda wyświetli się wartość zwracana z serwera pod zmienną: "data"



  // whileClick() {
  //     this.pollingSimpleClick = setInterval(() => {
  //     console.log('gora');
  //   }, 1);
  // }

  // notClicked() {
  //   clearInterval(this.pollingSimpleClick);
  //   console.log('dol');
  // }

  logout() {
    this.flaga.emit(false);
  }
  // Po poprawnym wylogowaniu się zmieniamy wyświetlaną strone na <app-login> i niszczymy component <app-main>

}
