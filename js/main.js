import {getClimaHora, paintInfoWeather  } from "../utils/funciones.js";
let form = document.querySelector("form");
let input = document.querySelector("#buscadorciudad");
let urlDia = 'https://api.openweathermap.org/data/2.5/forecast?q=madrid&appid=c3e85a54f6bc7c74f73c97ed34484a8d'

    const inicial = async () =>{
        
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            let value = input.value;
            let urlHora = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`

      const infoClima = await getClimaHora(urlHora);
  
          await paintInfoWeather(infoClima);
          input.value=''
        });   
}
inicial();