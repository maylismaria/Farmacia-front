import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'
import CadastroCategoria from './components/categoria/CadastroCategoria';
import ListaProduto from './components/produto/listaProduto/ListaProduto';
import CadastroProduto from './components/produto/CadastroProduto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/produtos" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Categoria" element={<ListaCategoria />} />
              <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
              <Route path="/Produto" element={<ListaProduto/>} />
              <Route path="/CadastroProduto" element={<CadastroProduto />} />






            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;