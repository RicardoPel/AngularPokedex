import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex'; // public, private can be used in the variables, pubic allows to use this variable in the template instead of private that lets you use the variable only here
}
