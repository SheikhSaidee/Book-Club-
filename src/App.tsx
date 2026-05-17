import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Members } from './pages/Members';
import { Badges } from './pages/Badges';
import { Sessions } from './pages/Sessions';
import { BookDetail } from './pages/BookDetail';
import { Certificate } from './pages/Certificate';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="badges" element={<Badges />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="book" element={<BookDetail />} />
          <Route path="certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
