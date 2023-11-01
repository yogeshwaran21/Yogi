import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipes';
  firstName : string ="Yogesh";
  lastName : string = "R";
  joinDate : any = new Date();
  salary : number = 20000.1234
  currencysymbol : string = "INR"
}
