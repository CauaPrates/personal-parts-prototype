import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { ProdutoDetalhe } from './pages/ProdutoDetalhe';
import { Sobre } from './pages/Sobre';
import { Revenda } from './pages/Revenda';
import { Contato } from './pages/Contato';
import { Trabalhos } from './pages/Trabalhos';
import { NotFound } from './pages/NotFound';
import { ToastProvider } from './context/ToastContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <ToastProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="produtos" element={<Catalogo />} />
              <Route path="produtos/:slug" element={<ProdutoDetalhe />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="revenda" element={<Revenda />} />
              <Route path="contato" element={<Contato />} />
              <Route path="trabalhos" element={<Trabalhos />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </ToastProvider>
  );
}

export default App;
