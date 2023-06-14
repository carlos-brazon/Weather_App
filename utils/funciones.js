
export const getClimaHora = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const paintInfoWeather = async (objeto, diario) =>{
    const div = document.querySelector('.nuevo')
    const div2 = document.querySelector('.climaDiario')
    div.innerHTML=`
            <div class="climaHora">
                <div class="infoClima">
                    <h1>${objeto.name}</h1>
                    <p>fecha</p>
                    <h2>${Math.round(objeto.main.temp-273.15)} ºC</h2>
                </div>
                <div class="lluvia">
                    <div class="logo">
                        <img src="./assets/${objeto.weather[0].id}.png" alt="">
                        <p>${objeto.weather[0].description}</p>
                    </div>
                    <p> velocidad del viento: ${(objeto.wind.speed*3.6).toFixed(2)} Km/h </p>
                </div>
            </div>
            `
        div2.innerHTML= `
            <div class="diario">
                <p>${diario.list[0].dt_txt.slice(0,-9)}</p>
                <div class="info">
                    <span>${Math.round(diario.list[0].main.temp_min-273.15)}ºC - ${Math.round(diario.list[0].main.temp_max-273.15)}ºC</span>
                    <div class="imagen">
                        <img src="./assets/${diario.list[0].weather[0].id}.png" alt="">
                        <p>${diario.list[0].weather[0].description}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>${diario.list[8].dt_txt.slice(0,-9)}</p>
                <div class="info">
                    <span>${Math.round(diario.list[8].main.temp_min-273.15)}ºC - ${Math.round(diario.list[8].main.temp_max-273.15)}ºC</span>
                    <div class="imagen">
                        <img src="./assets/${diario.list[8].weather[0].id}.png" alt="">
                        <p>${diario.list[8].weather[0].description}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>${diario.list[16].dt_txt.slice(0,-9)}</p>
                <div class="info">
                    <span>${Math.round(diario.list[16].main.temp_min-273.15)}ºC - ${Math.round(diario.list[16].main.temp_max-273.15)}ºC</span>
                    <div class="imagen">
                        <img src="./assets/${diario.list[16].weather[0].id}.png" alt="">
                        <p>${diario.list[16].weather[0].description}</p>
                    </div>
                </div>
            </div>
    `
}