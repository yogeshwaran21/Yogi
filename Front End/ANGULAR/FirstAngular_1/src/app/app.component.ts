import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2 style="text-align:center">Welcome To First Angular App</h2>
  <div style="text-align:center;font-size:16px;">
    <b>Welcome Mr. </b>{{firstName}} {{lastName}}<br>
    <b>Your Location: </b>{{location}}<br>
    <b>Start Date: </b>{{startDate}}<br>
    
  </div>`,


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular';
  firstName = 'Yogi';
  lastName = ' R';
  location = 'Chennai'
  startDate = new Date();
}
