import { getClimaHora, paintInfoWeather, paintInfoWeatherDialy, tempMinMax, diaNoche } from "../utils/funciones.js";
let form = document.querySelector("form");
let input = document.querySelector("#buscadorciudad");

const inicial = async () => {

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    let value = input.value;
    let urlHour = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`
    let urlDialy = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&lang=sp&appid=c3e85a54f6bc7c74f73c97ed34484a8d`

    const infoClima = await getClimaHora(urlHour);
    const infoClimaDia = await getClimaHora(urlDialy);

    if (infoClima.cod === '404') {
      const div = document.querySelector('.nuevo')
      const div2 = document.querySelector('.climaDiario')
      div.innerHTML = '<h4>City not found</h4>';
      div2.innerHTML = '';
    }
    else {
      await paintInfoWeather(infoClima, infoClimaDia);
      paintInfoWeatherDialy(infoClimaDia.list)
      tempMinMax(infoClimaDia.list);
      diaNoche(infoClima);
      input.value = ''
    }
  });
}
inicial();
