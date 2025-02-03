import Hero from "./components/Hero";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";
import Treatments from "./components/Treatments";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <Services /> */}
              {/* <Gallery /> */}
            </>
          }
        />
        <Route path="treatments" element={<Treatments />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
