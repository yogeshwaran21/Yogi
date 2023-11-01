import { Component } from '@angular/core';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent {
  deptlist:any=[{deptId:'PR',deptName:'Public Relations'},
  {deptId:'Rd',deptName:'Research and Development'},
  {deptId:'CSR',deptName:'Corporate Socila Responsibility'},
]
}
