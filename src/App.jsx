import "./App.css";
import { useDatoGato } from "./hooks/useDatoGato";
import { useImagenGato } from "./hooks/useImagenGato";

//End point `https://cataas.com/cat/says/${frase}?fontSize=50&fontColor=red`
//Se pone las comillas invertidas y el ${} porque se remienda ya tenerlas

function App() {
  
  //Asi se reciben dos objetos de un metodo que devuelve dos objetos
  const { dato, datoActualizado } = useDatoGato()
  const { imagen, imagenNombre } = useImagenGato({dato})
  
  const handleClick = () => {
    datoActualizado()
    //conseguirDatoRandom().then(setDato);    Para ahorrar codigo, no se va usar de esta manera
  };

  return (
    <main>
      <h1>App de Gatitos 🐱</h1>
      <button onClick={handleClick}>Dato Random</button>
      {dato && <p>{dato}</p>}
      {imagen && (
        <img
          className="centrado"
          src={imagen}
          alt={`Imagen de dato ${imagenNombre}`}
        ></img>
      )}
      <section>
        {dato && <p>{dato}</p>}
        {imagen && (
          <img
            className="centrado"
            src={imagen}
            alt={`Imagen de dato ${imagenNombre}`}
          ></img>
        )}
      </section>
    </main>
  );
}

export default App;
