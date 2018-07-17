import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  currentIndex = 0;
  n = 5;
  semaphore = 1;
    
  constructor() { }

  ngOnInit() {
  }
    
  horizontalScrollIntoView(i) {
      if(this.semaphore == 0) return;
      this.semaphore = 0;
      var parent = this;
      
      var slideWidth = document.querySelector('div.slideshow').clientWidth;
      var cur = document.querySelector('div.slideshow').scrollLeft;
      var tgt = document.getElementById('slide' + i).offsetLeft;
      
      var dist = tgt - cur;
      
      var qtFrames = 100;
      
      var passo = dist / qtFrames;
      var tempo = 0;
      var incremento = function() {
          document.querySelector('div.slideshow').scrollLeft = cur + passo * tempo;
          tempo++;
          if(tempo <= qtFrames) {
              setTimeout(incremento, 1);
          } else {
              parent.semaphore = 1;
          }
      }
      incremento();
      this.currentIndex = i;
  }    
    
  prev() {
      if(this.currentIndex > 0) {
          this.horizontalScrollIntoView(this.currentIndex - 1);
      } else {
          this.horizontalScrollIntoView(this.n - 1);
      }
  }
    
  next() {
      if(this.currentIndex < this.n - 1) {
          this.horizontalScrollIntoView(this.currentIndex + 1);
      } else {
          this.horizontalScrollIntoView(0);
      }
  }

}










