import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
import ContactUsPage from './pages/ContactUsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/academics" element={<AcademicsPage/>} />
        <Route path="/admissions" element={<AdmissionsPage/>} />
        <Route path="/faculty" element={<FacultyPage/>} />
        <Route path="/students" element={<StudentsPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/contact-us" element={<ContactUsPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
