import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import AccommodationPage from './pages/AccommodationPage';
import ConnectPage from './pages/ConnectPage';
import EntertainmentPage from './pages/EntertainmentPage';
import SupportPage from './pages/SupportPage';
import TourismPage from './pages/TourismPage';
import TransportPage from './pages/TransportPage';
import TravelPage from './pages/TravelPage';
import BookNowPage from './pages/BookNowPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/tourism" element={<TourismPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;