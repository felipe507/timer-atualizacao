import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'BitCoin$';

  constructor(public timer: TimerService, public bitcoinService: BitcoinService){
    this.timer.start(1000);
  }
  ngOnInit() {
    this.update();
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }
}
