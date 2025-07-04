import { useEffect, useState } from "react";
import { conseguirDatoRandom } from "../services/datos";

export function useDatoGato  ()  {
  const [dato, setDato] = useState();

  //Este metodo sirve para actualizar los datos, pero lo puse aqui porque habian dos metodos que lo usaban, asi que para ahorrar codigo, pues se junto
  const conseguirDatoYActualizarlo = () => {
    conseguirDatoRandom().then(setDato);
  }

  //Un defecto solo deberia de tener una responsabilidad
  useEffect((conseguirDatoYActualizarlo), []);

  return { dato, conseguirDatoYActualizarlo }
};