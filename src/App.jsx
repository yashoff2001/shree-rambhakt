import { Route, Routes } from 'react-router-dom'

import './style.css'

import NavBar from './components/navbar'
import PageNoteFound from './pages/pageNotFound'
import Footer from './components/footer'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import MarblesPage from './pages/marbles'
import RestaurantPage from './pages/restaurant'
import RealState from './pages/realState'
import NGO from './pages/ngo'
import Gallery from './pages/gallery'
import Contact from './pages/contact'

function App() {

  const preventDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("Right Click is disabled");
  };

  return (
    <div onContextMenu={preventDownload}>
    
      <NavBar />

      <Routes>
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/marbles" element={ <MarblesPage /> } />
        <Route path="/restaurant" element={ <RestaurantPage /> } />
        <Route path="/realState" element={ <RealState /> } />
        <Route path="/ngo" element={ <NGO /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        {/* <Route path="/blog" element={ < /> } /> */}
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/*" element={ <PageNoteFound /> } /> {/* Keep It in Last */}
      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App