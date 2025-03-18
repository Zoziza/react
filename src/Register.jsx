import { BrowserRouter, Routes,Route } from "react-router-dom";

 function AppRoute() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="*" element={<NotFound/>} />
     </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Services() {
  return <h1>Services</h1>;
}
function About() {
  return <h1>About</h1>;
} 
function NotFound() {
    return <h1>404</h1>
}
 

export default AppRoute;