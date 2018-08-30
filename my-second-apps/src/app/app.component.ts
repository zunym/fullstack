import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'my-second-apps';
  listOfNames=["Fred","YM","Banny","Betty","Batman"]
  toDisplay = this.listOfNames[0];
  
  nameSelected(name: string){
    console.log('clicked');
    this.toDisplay = name;
  }
}
