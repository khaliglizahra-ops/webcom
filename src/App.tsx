import { Fragment } from 'react';
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
import Guides from './pages/Guides';
import Guide from './pages/Guide';
import AzService from './pages/AzService';

import ScrollToTop from './components/ui/ScrollToTop';
import useReveal from './hooks/useReveal';
import SmoothScroll from './components/ui/SmoothScroll';
import LangSync from './components/ui/LangSync';
import WhatsAppButton from './components/ui/WhatsAppButton';

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
      <LangSync />
      <SmoothScroll />
      <ScrollToTop />
      <RevealOnScroll />
      <div className="app-reveal-instant">
        <Routes>
          {['', '/en', '/az'].map(p => (
            <Fragment key={p || 'tr'}>
              <Route path={p || '/'} element={<Layout><Home /></Layout>} />
              <Route path={`${p}/work`} element={<Layout><WorkPage /></Layout>} />
              <Route path={`${p}/services`} element={<Layout><Services /></Layout>} />
              <Route path={`${p}/about`} element={<Layout><About /></Layout>} />
              <Route path={`${p}/process`} element={<Layout><Process /></Layout>} />
              <Route path={`${p}/blog`} element={<Layout><Blog /></Layout>} />
              <Route path={`${p}/blog/:id`} element={<Layout><BlogPost /></Layout>} />
              <Route path={`${p}/contact`} element={<Layout><Contact /></Layout>} />
              {/* the quote page has no header or footer */}
              <Route path={`${p}/strategy-call`} element={<StrategyCall />} />
            </Fragment>
          ))}
          {/* Azerbaijani-only guides */}
          <Route path="/az/guides" element={<Layout><Guides /></Layout>} />
          <Route path="/az/guides/:slug" element={<Layout><Guide /></Layout>} />
          <Route path="/az/services/:slug" element={<Layout><AzService /></Layout>} />
        </Routes>
      </div>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
