import { Component } from "react";
import { Link } from "react-router-dom";

class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengername: "",
      origin: "Chennai",
      destination: "Bangalore",
      startDate:'',
      disable: false,
    };
  }

  check = () => {
    // Use state values instead of direct DOM manipulation
    if (this.state.origin === this.state.destination) {
      this.setState({ disable: true });
      alert("Destination and origin should not be the same");
    } else {
      this.setState({ disable: false });
    }
  };

  validate = (event) => {
    event.preventDefault(); // Prevent form submission
    let submitOK = true;

    if (this.state.passengername.length > 10) {
      alert("The name must be less than 10 characters");
      submitOK = false;
    }

    this.setState({ disable: !submitOK });
  };

  handleNameChange = (event) => {
    this.setState({ passengername: event.target.value });
  };

  // handleDateChange = (event) => {
  //   this.setState({ startDate: event.target.value });
  // };

  handleOriginChange = (event) => {
    this.setState({ origin: event.target.value }, () => {
      this.check(); // Call check() after updating origin
    });
  };

  handleDestinationChange = (event) => {
    this.setState({ destination: event.target.value }, () => {
      this.check(); // Call check() after updating destination
    });
  };

  render() {
    const today=new Date().toISOString().split('T')[0];
    return (
      <div>
        <center>
          <form onSubmit={this.validate}>
            <label>
              <b>Name : </b>{" "}
            </label>
            <input
              type="text"
              id="passengername"
              placeholder="Enter your name"
              value={this.state.passengername} // Use 'value' instead of 'defaultValue'
              onChange={this.handleNameChange}
            />
            <br></br>
            <label>
              <b>Journey Date : </b>
            </label>
            <input
              type="date"
              value={this.state.startDate} // Use 'value' instead of 'defaultValue'
              onChange={(e) => this.setState({ startDate: e.target.value })}
              min={today}/>
            <br></br>
            <label>
              <b>Origin : </b>
            </label>
            <select
              id="origin"
              value={this.state.origin} // Use 'value' instead of 'defaultValue'
              onChange={this.handleOriginChange}
            >
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trichy">Trichy</option>
              <option value="Rameshwaram">Rameshwaram</option>
            </select>
            <br></br>
            <label>
              <b>Destination : </b>
            </label>
            <select
              id="destination"
              value={this.state.destination} // Use 'value' instead of 'defaultValue'
              onChange={this.handleDestinationChange}
            >
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trichy">Trichy</option>
              <option value="Rameshwaram">Rameshwaram</option>
            </select>
            <br></br>
            <input type="submit" id="submit" value="Add" disabled={this.state.disable} />
            <button type="button">
          <Link to='/BookingTable'><h2>BOOKED TICKET</h2></Link>
          
        </button>
            <input type="reset" value="Reset" />
          </form>
        </center>
      </div>
    );
  }
}

export default BookingDetails;