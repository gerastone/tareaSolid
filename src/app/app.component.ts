import { Component } from '@angular/core';
import { Text } from './model/text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: Text;
  filter: string = '';
  counter: number;
  constructor() {
    this.text = new Text();
    this.text._text =
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem' +
      ' Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.'
  }

  count() {
    switch (this.filter) {
      case 'none':
        this.counter = this.text.count();
        break;
      case 'vocals':
        this.counter = this.text.startByVocal();
        break;
      case 'characters':
        this.counter = this.text.greaterThanTwoChars();
        break;
      case 'caps':
        this.counter = this.text.startByCaps();
        break;
      case '':
        this.counter = this.text.count();
        break;
    }
  }


}
