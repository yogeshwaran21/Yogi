import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators ,ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {
   bookingdetailform: FormGroup;
  currentDate: string;

  constructor(private fb: FormBuilder) {
    this.currentDate = new Date().toISOString().split('T')[0]; // Get the current date in ISO format

    // Create the form group with validators
    this.bookingdetailform = this.fb.group({
      passengerName: ['', Validators.required],
      journeyDate: ['', [Validators.required]],
      origin: ['', Validators.required],
      destination: ['', Validators.required]
    }, { validator: this.destinationValidator });
  }

  onSubmit() {
    if (this.bookingdetailform.valid) {
      // Handle form submission here
      console.log('Form submitted successfully:', this.bookingdetailform.value);
    } else {
      // Form is invalid, display validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // Custom validator function to check if origin and destination are the same
  destinationValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const origin = control.get('origin');
    const destination = control.get('destination');

    if (origin && destination && origin.value === destination.value) {
      return { 'sameOriginDestination': true };
    }

    return null;
  }
}
