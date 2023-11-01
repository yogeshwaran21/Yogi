import {useState} from "react";
function TeamDetailsWithUseState()
{
    const [teamName, setTeamName]=useState("CSK");
    const [teamCaptain, setCaptainName]=useState("YOGI");
    const [baseLocation, setBaseLocation]=useState("CHENNAI");
    function validate(){
        let vstatus=false;
        if(teamName === "")
        window.alert("Name cannot be blank");
        else
        vstatus=true;
        if (teamCaptain === "")
        window.alert("Captain name cannot be blank");
        else
        vstatus=true;
    return vstatus;
    }
        return(<div>
            <center>
                <form action="javascript:window.alert('ALL OK')" onSubmit={validate()}>
                    <label>Team Name</label>
                    <input type="text" onChange={e=>{setTeamName(e.target.value)}} defaultValue={teamName} /><br></br>
                    <label>Base Location</label>
                    <select size="1" name="baselocation" onChange={e=>{setBaseLocation(e.target.value)}} defaultValue={baseLocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Bangalore</option>
                        <option value="KKR">Kolkata</option>
                    </select><br></br>  
                    <label>Team Captain</label>
                    <input type="text" onChange={e=>{setCaptainName(e.target.value)}} defaultValue={teamCaptain} /><br></br> 
                    <input type="submit" value="Save"/>
                </form><br></br>
                <b>Team Name - </b> {teamName}<br></br>
                <b>Base Location - </b> {baseLocation}<br></br>
                <b>Team Captain - </b> {teamCaptain}<br></br><br></br>
                
            </center>
        </div>
        )
}

export default TeamDetailsWithUseState;