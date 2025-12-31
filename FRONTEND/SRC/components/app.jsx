import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Home";
import Industries from "./components/Industries";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
	    <Home/>
      <Products />
      <Careers />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;