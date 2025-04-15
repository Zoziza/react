import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightContext } from './FlightContext';

const mockFlights = [
  { id: 1, from: 'Almaty', to: 'Astana', price: 25000, time: '10:00', airline: 'Air Astana', seats: 50 },
  { id: 2, from: 'Almaty', to: 'Shymkent', price: 30000, time: '14:30', airline: 'SCAT', seats: 45 },
  { id: 3, from: 'Astana', to: 'Almaty', price: 28000, time: '16:00', airline: 'Qazaq Air', seats: 60 },
];

export default function FlightList() {
  const { flights, setFlights } = useContext(FlightContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setFlights(mockFlights);
      setLoading(false);
    }, 1000);
  }, [setFlights]);

  if (loading) return <p>Loading flights...</p>;

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time} ({flight.airline}) – {flight.price}₸
            <button onClick={() => navigate(`/booking/${flight.id}`)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}