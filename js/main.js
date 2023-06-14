import {getClimaHora, paintInfoWeather  } from "../utils/funciones.js";
let form = document.querySelector("form");
let input = document.querySelector("#buscadorciudad");

const inicial = async () =>{
    
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        let value = input.value;
        let urlHora = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`
        let urlDia = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`

      const infoClima = await getClimaHora(urlHora);
      const infoClimaDia = await getClimaHora(urlDia);
  
          await paintInfoWeather(infoClima, infoClimaDia);
          input.value=''
        });   
}
inicial();