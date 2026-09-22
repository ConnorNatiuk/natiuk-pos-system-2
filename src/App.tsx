import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, BottomNav } from './components/shared';
import { Home, Auth, Orders } from './pages';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <BottomNav />
    </Router>
  )
}
