import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, BottomNav } from './components/shared';
import { Home, Auth, Orders, Tables, Menu } from './pages';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}
