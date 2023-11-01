import React, { Component } from "react";
import { Link } from "react-router-dom";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelName: "Yamuna",
      luxuryType: "Non Ac Sleeper",
    };
  }

  handleTravelNameChange = (event) => {
    const selectedTravelName = event.target.value;
    const price = this.getPriceForTravelAndLuxury(selectedTravelName, this.state.luxuryType);
    this.setState({ travelName: selectedTravelName, price });
  };

  handleLuxuryTypeChange = (event) => {
    const selectedLuxuryType = event.target.value;
    const price = this.getPriceForTravelAndLuxury(this.state.travelName, selectedLuxuryType);
    this.setState({ luxuryType: selectedLuxuryType, price });
  };

  getPriceForTravelAndLuxury = (travelName, luxuryType) => {
    if (travelName === "Ganga") {
      if (luxuryType === "Ac Sleeper") {
        return "Rs. 800";
      } else if (luxuryType === "Non Ac Sleeper") {
        return "Rs. 450";
      } else if (luxuryType === "Ac Seater") {
        return "Rs. 550";
      } else if (luxuryType === "Non Ac Seater") {
        return "Rs. 300";
      }
    } else if (travelName === "Yamuna") {
      if (luxuryType === "Ac Sleeper") {
        return "Rs. 850";
      } else if (luxuryType === "Non Ac Sleeper") {
        return "Rs. 475";
      } else if (luxuryType === "Ac Seater") {
        return "Rs. 600";
      } else if (luxuryType === "Non Ac Seater") {
        return "Rs. 350";
      }
    } else if (travelName === "Lakshmi") {
      if (luxuryType === "Ac Sleeper") {
        return "Rs. 1000";
      } else if (luxuryType === "Non Ac Sleeper") {
        return "Rs. 550";
      } else if (luxuryType === "Ac Seater") {
        return "Rs. 700";
      } else if (luxuryType === "Non Ac Seater") {
        return "Rs. 450";
      }
    } else if (travelName === "Krishna") {
      if (luxuryType === "Ac Sleeper") {
        return "Rs. 900";
      } else if (luxuryType === "Non Ac Sleeper") {
        return "Rs. 500";
      } else if (luxuryType === "Ac Seater") {
        return "Rs. 650";
      } else if (luxuryType === "Non Ac Seater") {
        return "Rs. 400";
      }
    }
    // Default price
    return "Rs.0";
  };

  render() {
    return (
      <div>
        <center>
          <form>
            <h3>Bus Catalogue</h3>
            <br />
            <label>
              <b>Travel's Name : </b>
            </label>
            <select
              size="1"
              name="travelName"
              value={this.state.travelName}
              onChange={this.handleTravelNameChange}
            >
              <option value="Ganga">Ganga</option>
              <option value="Yamuna">Yamuna</option>
              <option value="Lakshmi">Lakshmi</option>
              <option value="Krishna">Krishna</option>
            </select>
            <br />
            <br />
            <label>
              <b>Luxury Type : </b>
            </label>
            <select
              size="1"
              name="luxuryType"
              value={this.state.luxuryType}
              onChange={this.handleLuxuryTypeChange}
            >
              <option value="Ac Sleeper">Ac Sleeper</option>
              <option value="Non Ac Sleeper">Non Ac Sleeper</option>
              <option value="Ac Seater"> Ac Seater</option>
              <option value="Non Ac Seater">Non Ac Seater</option>
            </select>
            <br />
            <br />
            <label>
              <b>Price : </b>
              {this.state.price} 
            </label>
            <br />
            <br />
            <Link to="/BookingDetails">
              <button type="button">
                <h3>Next</h3>
              </button>
            </Link>
          </form>
        </center>
      </div>
    );
  }
}

export default Catalog;
