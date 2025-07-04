import { useState, useEffect } from "react";

//El jsx voy a suponer que es solo para visualizacion, no necesariamente para el control de datos

export const useImagenGato = ({ dato }) => {
  const [imagen, setImagen] = useState();
  const [imagenNombre, setImagenNombre] = useState();
  const GATO_ENDPOINT_IMAGE_URL = `https://api.thecatapi.com/v1/images/search`;

  useEffect(() => {
    //Si existe un dato (el 1er useEffect si hizo el trabajo bien). Va a devolver una imagen
    if (!dato) return;

    fetch(GATO_ENDPOINT_IMAGE_URL)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const { url } = data[0]; //1ro Estamos accediento al objeto, 2do a ese objeto estamos entrando a la url, no podemos entrar a dato[0].url, no podemos extraer la info porque ya estamos ahi
        const { id } = data[0];
        setImagen(url);
        setImagenNombre(id);
      });
  }, [dato]);

  return { imagen, imagenNombre }
}