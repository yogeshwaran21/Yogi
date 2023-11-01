import { Component } from 'react';
import './TeamsList.css';

class TeamsList extends Component{
    teamsCount=8;
    getTeamsCount(){
        return this.teamsCount;
    }
    setTeamsCount(tcount){
        this.teamsCount=tcount;
    }
    render(){
    return(
        <div className='TeamsList'>
        
        <center><b>List of Teams in IPL 2023</b><br></br>
        <b>Count - </b>{this.getTeamsCount()}<br></br>
        <ul>
            <li>CSK</li>
            <li>MI</li>
            <li>KKR</li>
            <li>DC</li>
            <li>SRH</li>
            <li>PBKS</li>
            <li>RR</li>
            <li>GT</li>
            <li>LSG</li>
        </ul>
        </center> 
        </div>  
    )
}
}
export default TeamsList;