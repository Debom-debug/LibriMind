import BooksPage from './pages/BooksPage'
import { useState } from 'react'
import ServiceCard from './components/ServiceCard'
import './App.css'
import Navigation from './components/Navigation'

function App() {
  const [activePage, setActivePage] = useState('Home')

  return (
    <main>
      <header>
        <h1>LibriMind</h1>
        <p>Your intelligent university library assistant</p>
      </header>
      <Navigation
        activePage={activePage}
        onNavigate={setActivePage}
      />


      {activePage === 'Home' ? (
        <>
          <section>
            <h2>Welcome to LibriMind</h2>
            <p>
              Discover books, explore study spaces, check laptop
              availability, and get help from your AI library assistant.
            </p>
          </section>



          <section>
            <h2>Explore Library Services</h2>

            <div className="services-grid">
              <ServiceCard
                title="AI Library Assistant"
                description="Ask questions and receive intelligent library support."
              />

              <ServiceCard
                title="Book Search"
                description="Search the catalogue and reserve available books."
              />

              <ServiceCard
                title="Study Room Booking"
                description="Find and reserve available study spaces."
              />

              <ServiceCard
                title="Laptop Availability"
                description="Check available laptops and explore their specifications."
              />

              <ServiceCard
                title="Interactive 3D Library Tour"
                description="Explore library floor plans and preview study rooms in 3D."
              />
            </div>
          </section>
        </>

      ) : activePage === 'Books' ? (
  <BooksPage />
) : (
  <section>
    <h2>{activePage}</h2>
    <p>
      The {activePage} feature is currently under development.
    </p>
  </section>
)}


      <footer>
        <p>LibriMind | AI-Powered Library Experience</p>
      </footer>
    </main>
  )
}

export default App
