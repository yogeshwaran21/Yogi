import {Component} from "react";
class Teamdetails extends Component{
    teamName="CSK";
    baseLocation="Chennai";
    teamCaptain="YOGI"
    render(){
        return(<div>
            <center>
                <form>
                    <label>Team Name</label>
                    <input type="text" value={this.teamName} /><br></br>
                    <label>Base Location</label>
                    <select size="1" name="baselocation" value={this.baseLocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Bangalore</option>
                        <option value="KKR">Kolkata</option>
                    </select><br></br>  
                    <label>Team Captain</label>
                    <input type="text" value={this.teamCaptain} /><br></br> 
                </form>
            </center>
        </div>
        )
    }
}
export default Teamdetails;