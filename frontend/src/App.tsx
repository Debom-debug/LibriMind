import ServiceCard from './components/ServiceCard'
import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>LibriMind</h1>
        <p>Your intelligent university library assistant</p>
      </header>

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



      <footer>
        <p>LibriMind | AI-Powered Library Experience</p>
      </footer>
    </main>
  )
}

export default App
