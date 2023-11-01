import { Component } from '@angular/core';
import { EmpManagementService } from './EmpManagementService'
import { ProjectmgServiceService } from './projectmg-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProjectmgServiceService]
})
export class AppComponent {
  title = 'structureddata';
  eId:number=1;

  constructor(private PmMgSvc:ProjectmgServiceService){}
  emplist=[
    {empId:1,firstName:"Dhoni",lastName:" MS",age:41,location:"Chennai"},
    {empId:2,firstName:"Kohli",lastName:" Virat",age:36,location:"Chennai"},
    {empId:3,firstName:"Siva",lastName:" V",age:21,location:"Chennai"}
]
  emp={empId:5,firstName:"Yogesh",lastName:" R",age:21,location:"Chennai"}; 
  
  // firstName:string="";
  // lastName:string="";
  // age:number=5;
  // location:string="";
  empvc : EmpManagementService=new EmpManagementService ;

  addEmp(){

    this.empvc.addEmp(this.emp,this.emplist)
    // this.emplist.push({firstName:this.emp.firstName,lastName:this.emp.lastName,age:this.emp.age,location:this.emp.location})
    // alert("Data is added")
  }
  deleteEmp(){
    this.empvc.deleteEmp(this.eId,this.emplist);
  }

  addProject(){
    this.PmMgSvc.addProjects();
  }
  
forLoops(){
  for(let i in this.emplist)
  console.log(i + "\t" +this.emplist[i].firstName,this.emplist[i].lastName);
  for(let i of this.emplist)
  console.log(i.empId + ", " +i.firstName)
}
}
