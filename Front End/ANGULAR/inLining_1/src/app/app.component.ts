import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3 style="text-align:center"><b>Welcome To First Angular App</b></h3>
  <div style="text-align:center;font-size:16px;">
    <b>Welcome Mr. </b>{{firstName}}<br>
    <b>Your Location: </b>{{location}}<br>
    <b>Start Date: </b>{{startDate}}<br>
    
  </div>`,
  styles: ['b{color:red;font-size:25}']
})
export class AppComponent {
  title = 'First Angular';
  firstName = 'Yogi';
  lastName = '.R';
  location = 'Chennai'
  startDate = new Date();
}
