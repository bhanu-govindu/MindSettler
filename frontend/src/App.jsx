import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.css'
import './scroll-animations.css'
import './reel.css'
import './no-step-labels.css'
import './fix-interactions.css'
import './carousel-reset.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PsychoEducationPage from './pages/PsychoEducationPage'
import JourneyPage from './pages/JourneyPage'
import BookingPage from './pages/BookingPage'
import CorporatePage from './pages/CorporatePage'
import FAQsPage from './pages/FAQsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <div className={`app-root ${isReady ? 'app-ready' : ''}`}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/psycho-education" element={<PsychoEducationPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
