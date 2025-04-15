import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightList from './FlightList';
import FlightBooking from './FlightBooking';
import { FlightProvider } from './FlightContext';
import  './App.css'; 
 import { FlightContext } from './FlightContext';

export default function App() {
  return (
    <FlightProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/booking/:flightId" element={<FlightBooking />} />
        </Routes>
      </BrowserRouter>
    </FlightProvider>
  );
}