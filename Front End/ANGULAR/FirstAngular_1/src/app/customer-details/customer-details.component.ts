import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  firstName:string='unknown';
  lastName:string='unknown';
  age:number=21;
  email:string='unknown';
  phone:number=0;
  joinStatus:boolean=false;
  location:string='Nagai';
  color:string='violet';
  size:number=1;
  styleClassName:string='bstyle';
  constructor(){
    console.log("Component Constructed")
  }
  ngOnInit(){
    this.firstName='Yogesh';
    this.lastName=' R';
    this.age=21;
    this.email="yogi@1234";
    this.phone=9078563412;
    console.log("Customer Details Initialized")
  }
  ngOnChanges(){
    console.log("Customer Details Updated")
  }
  ngDoCheck(){
    console.log("Customer Details Verified")
  }
  ngOnDestroy(){
    console.log("Customer Details Destroyed After Saving...")
  }
}
