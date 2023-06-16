
export const getClimaHora = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const diaNoche = (objeto) => {
    if ((objeto.weather[0].icon).charAt(2) === 'n') {
        const body = document.querySelector('body');
        body.style.backgroundImage = "url('./assets/noche8.jpg')"
    } else {
        const body = document.querySelector('body');
        body.style.backgroundImage = "url('./assets/cielo5.jpg')"
    }
}

export const paintInfoWeather = async (objeto) => {
    const div = document.querySelector('.nuevo');
    const dateAll = (new Date(objeto.dt * 1000)).toLocaleString();
    const date = dateAll.slice(0, 9);
    div.innerHTML = `
            <div class="climaHora">
                <div class="infoClima">
                    <h1>${objeto.name}</h1>
                    <p>${date}</p>
                    <h2>${Math.round(objeto.main.temp - 273.15)} ºC</h2>
                </div>
                <div class="lluvia">
                    <div class="logo">
                        <img src="https://openweathermap.org/img/wn/${objeto.weather[0].icon}@2x.png" alt="">
                        <p>${objeto.weather[0].description}</p>
                    </div>
                    <p> velocidad del viento: ${(objeto.wind.speed * 3.6).toFixed(2)} Km/h </p>
                </div>
            </div>`
}

const date = new Date();
const day = date.getDate();

export const paintInfoWeatherDialy = async (diario) => {
    const arrayInfoDialy = diario.filter(element => day !== Number(element.dt_txt.slice(8, 10)));
    let dateDialy = [arrayInfoDialy[5].dt_txt, arrayInfoDialy[13].dt_txt, arrayInfoDialy[21].dt_txt];
    let iconDialy = [arrayInfoDialy[5].weather[0].icon, arrayInfoDialy[13].weather[0].icon, arrayInfoDialy[21].weather[0].icon];
    let weatherDialy = [arrayInfoDialy[5].weather[0].description, arrayInfoDialy[13].weather[0].description, arrayInfoDialy[21].weather[0].description]
    
    const div2 = document.querySelector('.climaDiario');
    div2.innerHTML = `
            <div class="diario">
                <p>${dateDialy[0].slice(0, -9)}</p>
                <div class="info">
                    <span>${Math.round(tempMinMax(diario)[0].min - 273.15)}ºC - ${Math.round(tempMinMax(diario)[0].max - 273.15)}ºC</span>
                    <div class="imagen">
                        <img src="https://openweathermap.org/img/wn/${iconDialy[0]}@2x.png" alt="aquí va una imagen de una nube">
                        <p>${weatherDialy[0]}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>${dateDialy[1].slice(0, -9)}</p>
                <div class="info">
                    <span>${Math.round(((tempMinMax(diario)[1]).min) - 273.15)}ºC - ${Math.round(((tempMinMax(diario)[1]).max) - 273.15)}ºC</span>
                    <div class="imagen">
                        <img src="https://openweathermap.org/img/wn/${iconDialy[1]}@2x.png" alt="aquí va una imagen de una nube">
                        <p>${weatherDialy[1]}</p>
                    </div>
                </div>
            </div>
            <div class="diario">
                <p>${dateDialy[2].slice(0, -9)}</p>
                <div class="info">
                    <span>${Math.round(((tempMinMax(diario)[2]).min) - 273.15)}ºC - ${Math.round(((tempMinMax(diario)[2]).max) - 273.15)}ºC</span>
                    <div class="imagen">
                        <img src="https://openweathermap.org/img/wn/${iconDialy[2]}@2x.png" alt="aquí va una imagen de una nube">
                        <p>${weatherDialy[2]}</p>
                    </div>
                </div>
            </div>`
}

export const tempMinMax = (array) => {
    const sinDiadeHoy = array.filter(element => day !== Number(element.dt_txt.slice(8, 10)));
    const temp = [
        {
            max: [],
            min: []
        },
        {
            max: [],
            min: []
        },
        {
            max: [],
            min: []
        }
    ];

    for (let i = 0; i < sinDiadeHoy.length; i++) {
        const element = sinDiadeHoy[i];
        if (i >= 0 && i <= 7) {
            temp[0].max.push(element.main.temp_max);
            temp[0].min.push(element.main.temp_max);
        }
        if (i >= 8 && i <= 15) {
            temp[1].max.push(element.main.temp_max);
            temp[1].min.push(element.main.temp_max);
        }
        if (i >= 16 && i <= 23) {
            temp[2].max.push(element.main.temp_max);
            temp[2].min.push(element.main.temp_max);
        }
    }
    const temperaturaMaxMin3dias = temp.map(element => {
        return {
            max: Math.max(...element.max),
            min: Math.min(...element.min)
        }
    });
    return temperaturaMaxMin3dias
}