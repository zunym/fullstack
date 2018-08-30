import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input()
  displayName: string = "Yin Mon"  //default value
  myName: string = "Chuck";

  @Output()
  toPrint = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  click() {

  }
}
