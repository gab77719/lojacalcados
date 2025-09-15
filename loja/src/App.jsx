import './App.css';
import Topo from './components/Topo';
import Capa from './components/Capa';
import Produtos from './components/Produtos';
import Colecoes from './components/Colecoes';
import Rodape from './components/Rodape';

function App() {

  return (
    <>
      <header>
        <Topo/>
      </header>
      <main>
        <Capa/>
      <section>
        <Produtos/>
      </section>
      <section>
        <Colecoes/>
      </section>
      </main>

      <Rodape/>
    </>
  );
}

export default App
