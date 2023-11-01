import { Component } from "react";
class PageColor extends Component{
    constructor(props){
        super(props);
    this.state={color:"red"};
    }
    changeColor=(color)=>{
        this.setState({color});
    }
    render(){
        return(
            <div><b>In Mounting Phase</b><br></br>
            <select defaultValue={this.state.color} onChange={(e)=>{this.changeColor(e.target.value);}}>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="gold">Gold</option>
                <option value="green">Green</option>
                <option value="violet">Violet</option>
                </select>
                <div id="mnt"></div>
                </div>
        )
    }
    componentDidMount(){
        let dv=document.getElementById("mnt");
        dv.innerHTML += "<b><br><i>Component Mounted</i></b>";
        dv.style.color=this.state.color;
    }
    componentDidUpdate(){
        let dv=document.getElementById("mnt");
        dv.innerHTML += "<br><b><i>Component Updated</i></b>";
        dv.style.color=this.state.color;  
    }
    componentWillUnmount(){
        // Write the code to save the state of the component into a databaseor a file.5
        let dv=document.getElementById("mnt");
        dv.innerHTML += "<br><b><i>Component Unmounted</i></b>";  
    }
}
export default PageColor;