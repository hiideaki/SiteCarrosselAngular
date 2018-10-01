import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

  submit($event) {
    $event.preventDefault();

    console.log('kkkdsa');
  }

  
}
