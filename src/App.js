import About from "./about";
import Bookings from "./bookings";
import Contact from "./contact";
import Navbar from "./Navbar";
import Services from "./services";

function App() {
  return (
    <div>
      <header className="nav">
        <Navbar />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="booking">
        <Bookings />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
