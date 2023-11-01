import './VenuesList.css'
let max=10;
function VenuesList(){
    let venuecount=4;
    return(
        <div className='VenuesList'>
        <center><b>Count Of Venues - </b>{venuecount}<br></br>
        <b>Max - </b>{max}<br></br>
        <b>List Of Venues</b>
        <ol>
            <li>Chepauk,Chennai</li>
            <li>Eden Garden,Kolkata</li>
            <li>Chinnasamy,Bangalore</li>
            <li>Modi,Ahemadhabad</li>
        </ol>
        </center>
        </div>
    )   
}
export default VenuesList;