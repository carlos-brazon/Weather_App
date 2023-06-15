import {getClimaHora, paintInfoWeather, maxTemp  } from "../utils/funciones.js";
let form = document.querySelector("form");
let input = document.querySelector("#buscadorciudad");

const inicial = async () =>{
    
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        let value = input.value;
        let urlHora = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`
        let urlDia = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`
        let urlDia3 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${value}&cnt=5&appid=c3e85a54f6bc7c74f73c97ed34484a8d`
        let urlDia4 = `https://api.openweathermap.org/data/2.5/forecast/climate?q=${value}&cnt=5&appid=92ec6704506fa01f23009abf2b6b18da`
        // let urlDia4 = `https://api.openweathermap.org/data/2.5/forecast/climate?q=${value}&cnt=5&appid=92ec6704506fa01f23009abf2b6b18da`

      const infoClima = await getClimaHora(urlHora);
      const infoClimaDia = await getClimaHora(urlDia  );

      if (infoClima.cod==='404') {
        const div = document.querySelector('.nuevo')
        const div2 = document.querySelector('.climaDiario')
        div.innerHTML='<h4>City not found</h4>';
        div2.innerHTML='';
      }
      else{
        console.log(infoClima);
        console.log(infoClimaDia);
    
            await paintInfoWeather(infoClima, infoClimaDia);
            maxTemp(infoClimaDia.list)
            input.value=''
      }
        });   
}
inicial();
