
export class EmpManagementService{
    status:boolean=false;
    //rec:any=null;
    addEmp(emp:any,emplist:any)
    {
        this.status=false;
        for(let rec in emplist)
        {
            if(emp.empId==emplist[rec].empId)
            this.status=true;
        }
        if(this.status==true)
        {
            window.alert("Employee Id already Exist.Try New One.")
        }
        else
        {
            
        emplist.push({empId:emp.empId,firstName:emp.firstName,lastName:emp.lastName,age:emp.age,location:emp.location})
        alert("One Empolyee")
        }
    }
    deleteEmp(eId:any,emplist:any){
        for(let i in emplist){
            console.log(emplist[i].empId);
            if(eId == emplist[i].empId){
            emplist.splice(i,1);
            }
        }
    }
    updateEmp(){

    }
}