import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projects_list :any=[];
  project_Data :any;
  title = 'templateforms';
  
  processData(projectData : any){
    //  var pdata = JSON.stringify(projectData.value);
    //  this.project_Data=JSON.parse(pdata);
    //  console.log(this.project_Data);
     this.projects_list.push(projectData.value);
  }
}
