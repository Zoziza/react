import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FlightContext } from './FlightContext';

export default function FlightBooking() {
  const { flightId } = useParams();
  const { flights, bookings, setBookings } = useContext(FlightContext);
  const [flight, setFlight] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundFlight = flights.find(f => f.id === parseInt(flightId));
    setFlight(foundFlight);
  }, [flightId, flights]);

  const handleBooking = () => {
    if (flight) {
      setBookings([...bookings, flight]);
      alert('Booking confirmed!');
      navigate('/');
    }
  };

  if (!flight) {
    return <p>Loading flight information...</p>;
  }

  return (
    <div>
      <h2>Booking Flight</h2>
      <p><strong>From:</strong> {flight.from}</p>
      <p><strong>To:</strong> {flight.to}</p>
      <p><strong>Time:</strong> {flight.time}</p>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Price:</strong> {flight.price}₸</p>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}