import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Visualizar } from '../screens/visualizar2';
import Menu from '../screens/Menu2';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu2" element={<Menu />} />
      <Route path="/visualizar2/:Nome" element={<Visualizar />} />
    </Routes>
  );
}
