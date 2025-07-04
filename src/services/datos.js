const GATO_ENDPOINT_FRASE_URL = `https://catfact.ninja/fact`;

 //Esto antes estaba en el App.jsx, pero ahora como no vamos a enviar el setDato (UseEffect). tenemos que hacer un return con el fetch y el fact
 export const conseguirDatoRandom = () => {
    return fetch(GATO_ENDPOINT_FRASE_URL)
      .then((respuesta) => {
        //Es Importante Abrir llaves porque (supóngo) se esta desarrollando la funcion flecha
        if (!respuesta.ok) {
          //Si la respuesta no es oK
          setFraseError("No se ha podido recuperar la cita");
          console.log(fraseError);
        }
        return respuesta.json();
      })
      .then((data) => {
        /*1ro, convertimos la respuesta de al API en json.
      2d0. Ese texto tenemos que acceder a la propiedad fact, por eso la convertimos a obj de java y la pasamos a setDato
      3ro. ya con eso lo convertimos a split y hacemos la frase
      Nota: Cualquier duda usa console.log
      
      console.log(data) 
      */
        const { fact } = data;
        return fact
        //setDato(fact);
        //Esto de ahuevo se tiene que llamar Fact, porque estamos entrando al objeto y dentro se llama FAct
      });
  };