import {Component} from "react";
class TeamDetailsWithState extends Component{
    constructor(props)
    {
        super(props);
        this.state={teamName:"CSK",baseLocation:"Chennai",teamCaptain:"YOGI"};
    }
    teamName="CSK";
    baseLocation="Chennai";
    teamCaptain="YOGI"
    render(){
        return(<div>
            <center>
                <form>
                    <label>Team Name</label>
                    <input type="text" defaultValue={this.state.teamName} /><br></br>
                    <label>Base Location</label>
                    <select size="1" name="baselocation" defaultValue={this.state.baseLocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Bangalore</option>
                        <option value="KKR">Kolkata</option>
                    </select><br></br>  
                    <label>Team Captain</label>
                    <input type="text" defaultValue={this.state.teamCaptain} /><br></br> 
                </form>
            </center>
        </div>
        )
    }
}
export default TeamDetailsWithState;