import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  emplist : any=[{empId : '100',firstName : 'Yogesh',lastName : ' R'},
  {empId : '200',firstName : 'Siva',lastName : ' V'},
  {empId : '300',firstName : 'Niranjan',lastName : ' SV'},
]
}
