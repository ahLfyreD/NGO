import './App.css'
import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/who_we_are/About'
import ScrollToTop from './components/ScrollToTop';
import DonateModal from './components/modal/DonateModal';

function App() {
  const [modal, setModal] = useState(false);

  if(modal) {
    document.body.classList.add('active_modal')
  } else {
    document.body.classList.remove('active_modal');
  }

  return (
    <>
      <Suspense>
        <Router>
          <ScrollToTop />
          <section>
            <Routes>
              <Route path="/" element={<Home toggleModal={() => setModal(!modal)}/>} />
              <Route path="/who_we_are" element={<About toggleModal={() => setModal(!modal)}/>} />
            </Routes>
            <Footer />
          </section>
          {modal && (
            <DonateModal toggleModal={() => setModal(!modal)}/>
          )}
        </Router>
      </Suspense>
    </>
  )
}

export default App
