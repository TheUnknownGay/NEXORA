import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Mood from './pages/Mood';
import Roulette from './pages/Roulette';
import Library from './pages/Library';
import Settings from './pages/Settings';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
