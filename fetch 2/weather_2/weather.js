async function search() {
  let input = document.getElementById("city");
  let ifram = document.getElementById("gmap_canvas");
  let apiKey = "84d15f9b4bbc83cf8d243eb0920afafd";
  let details = document.getElementById("screen");
  let forCastDisplay = document.getElementById("forCast");

  if (input.value == "") {
    alert("Search Your City");
  } else {
    ifram.src = `https://maps.google.com/maps?q=${input.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let forCastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${apiKey}`;

    try {
      

      let forcast = await fetch(forCastApi);
      let castData = await forcast.json();

      

    


        console.log(castData)
      details.innerHTML = "";
      details.innerHTML = `<div id="myCity">
                    <img src="pngwing.com.png" alt="">
                    <h1>${castData.city.name} , ${castData.city.country}</h1>
                </div>
    
                <div id="details">
                    <table class="cast">
                        
                        <tr>
                            <td><b>Temperature</b></td>
                            <td>
                                <table>
                                    <tr>
                                        <td class="red"><b>Max-temp</b></td>
                                        <td>${castData.list[0].main.temp_max} °C</td>
                                    </tr>
                                    <tr>
                                        <td class="green"><b>Min-temp</b></td>
                                        <td>${castData.list[0].main.temp_min} °C</td>
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                        <tr>
                            <td><b>Wind</b></td>
                            <td>${castData.list[0].wind.speed}  m/s</td>
                        </tr>
                        <tr>
                            <td><b>Clouds</b></td>
                            <td>${castData.list[0].clouds.all}</td>
                        </tr>
                        <tr>
                            <td><b>Sunrise</b></td>
                            <td>${new Date(castData.city.sunrise).toLocaleTimeString()}</td>
                        </tr>
                        <tr>
                            <td><b>Sunset</b></td>
                            <td>${new Date(castData.city.sunset).toUTCString()}</td>
                        </tr>
                    </table>
                </div>`;

      let bag = "";
      let j=1;
      for (let i = 1; i <=40; i=i+8) {
       
        
        bag += `<div>
                    <table class="bag">
                    <thead>
                    <tr>
                        <th>Day</th>
                        <th>${j}</th>
                    </tr>
                </thead>
                        <tr>
                            <td><b>Temperature</b></td>
                            <td>
                                <table>
                                    <tr>
                                        <td class="red"><b>Max-temp</b></td>
                                        <td>${castData.list[i].main.temp_max} °C</td>
                                    </tr>
                                    <tr>
                                        <td class="green"><b>Min-temp</b></td>
                                        <td>${castData.list[i].main.temp_min} °C</td>
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                        <tr>
                            <td><b>Wind</b></td>
                            <td>${castData.list[i].wind.speed}  m/s</td>
                        </tr>
                        <tr>
                            <td><b>Clouds</b></td>
                            <td>${castData.list[i].clouds.all}</td>
                        </tr>
                        <tr>
                            <td><b>Date & Time</b></td>
                            <td>${castData.list[i].dt_txt}</td>
                        </tr>
                        
                    </table>
                </div>`;
                j++;
      
      forCastDisplay.innerHTML = "";
      forCastDisplay.innerHTML = bag;
    
      }

    

    } catch (error) {
      console.log(error);
    }
  }
}
