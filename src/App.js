import { ComponentePadre } from './components/ComponentePadre/ComponentePadre';
import { ComponenteHijo } from './components/ComponenteHijo/ComponenteHijo';
import { ComponenteSubHijo } from './components/ComponenteSubHijo/ComponenteSubHijo';

function App() {
  return (
    <div>
      <ComponentePadre>
        <ComponenteHijo>
          <ComponenteSubHijo />
        </ComponenteHijo>
      </ComponentePadre>
    </div>
  );
}

export default App;
