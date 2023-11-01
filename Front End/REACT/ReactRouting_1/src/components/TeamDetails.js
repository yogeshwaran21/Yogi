import {Component} from "react";
class Teamdetails extends Component{
    teamName="CSK";
    baseLocation="Chennai";
    teamCaptain="YOGI";

    componentDidMount(){
        console.log("TeamDetails Component Mounted")
    }
    componentDidUpdate(){
        console.log("TeamDetails Component Updated")
    }
    componentWillUnmount(){
        console.log("TeamDetails Component Unmounted")
    }
    render(){
        return(<div>
            <center>
                <form>
                    <label>Team Name</label>
                    <input type="text" defaultValue={this.teamName} /><br></br>
                    <label>Base Location</label>
                    <select size="1" name="baselocation" defaultValue={this.baseLocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Bangalore</option>
                        <option value="KKR">Kolkata</option>
                    </select><br></br>  
                    <label>Team Captain</label>
                    <input type="text" defaultValue={this.teamCaptain} /><br></br> 
                </form>
            </center>
        </div>
        )
    }
}
export default Teamdetails;