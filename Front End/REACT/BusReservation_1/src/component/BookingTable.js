import React from "react";
import BookingDetails from "./BookingDetails";

function BookingTable(props) {
  const { passengername, origin, destination, startDate } = props.bookingDetails;

  return (
    <div>
      <center>
        <h2>Booking Details</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{passengername}</td>
            </tr>
            <tr>
              <td><strong>Journey Date:</strong></td>
              <td>{startDate}</td>
            </tr>
            <tr>
              <td><strong>Origin:</strong></td>
              <td>{origin}</td>
            </tr>
            <tr>
              <td><strong>Destination:</strong></td>
              <td>{destination}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default BookingTable;