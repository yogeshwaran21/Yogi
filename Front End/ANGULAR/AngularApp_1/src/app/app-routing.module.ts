import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routeComponents=[BookingdetailsComponent]
