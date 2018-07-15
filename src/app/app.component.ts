import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menuActive = false;
  onMenuTrigger() {
      this.menuActive = !this.menuActive;
  }
  hideMenu() {
      this.menuActive = false;
  }
}
