
export const getClimaHora = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const paintInfoWeather = async (objeto) =>{
    const div = document.querySelector('.contenedorPrincipal')
    div.innerHTML=`<div class="contenedorClimaHora"> 
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

        </div>

        <div class="climaDiario">
            <div class="diario">
                <p>fecha</p>
                <div class="info">
                    <span>15c - 20c</span>
                    <div class="imagen">
                        <img src="./assets/soleado.png" alt="">
                        <p>${objeto.weather[0].description}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>fecha</p>
                <div class="info">
                    <span>15c - 20c</span>
                    <div class="imagen">
                        <img src="./assets/soleado.png" alt="">
                        <p>${objeto.weather[0].description}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>fecha</p>
                <div class="info">
                    <span>15c - 20c</span>
                    <div class="imagen">
                        <img src="./assets/soleado.png" alt="">
                        <p>${objeto.weather[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}