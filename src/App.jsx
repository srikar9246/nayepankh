import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Certificates from './components/Certificates';
import Impact from './components/Impact';
import News from './components/News';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Certificates />
        <Impact />
        <News />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
