import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

import About from './pages/About';
import Contact from './pages/Contact';
import StrategyCall from './pages/StrategyCall';
import Process from './pages/Process';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import WorkPage from './pages/Work';

import ScrollToTop from './components/ui/ScrollToTop';
import useReveal from './hooks/useReveal';
import SmoothScroll from './components/ui/SmoothScroll';

// scroll-reveal for [data-reveal] elements; must live inside the router
function RevealOnScroll() {
  useReveal();
  return null;
}

// We create a wrapper that includes Header and Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <RevealOnScroll />
      <div className="app-reveal-instant">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/work" element={<Layout><WorkPage /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />

          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/process" element={<Layout><Process /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Strategy Call landing page has no Header/Footer as per requirements */}
          <Route path="/strategy-call" element={<StrategyCall />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
