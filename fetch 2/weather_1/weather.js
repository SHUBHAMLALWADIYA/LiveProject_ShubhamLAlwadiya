async function search(){

    let input=document.getElementById("city");
    let ifram=document.getElementById("gmap_canvas");
    let apiKey="84d15f9b4bbc83cf8d243eb0920afafd";
    let details=document.getElementById("screen")
    
    if(input.value==""){
    
    alert ("Search Your City");
    }
    else{
    
    ifram.src=`https://maps.google.com/maps?q=${input.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let myApi=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    
    try {
        
        let cityData=await fetch(myApi);
        let data=await cityData.json();
    
        console.log(data)
        details.innerHTML=""
        details.innerHTML=`<div id="myCity">
                    <img src="pngwing.com.png" alt="">
                    <h1>${data.name} , ${data.sys.country}</h1>
                </div>
    
                <div id="details">
                    <table>
                        
                        <tr>
                            <td><b>Temperature</b></td>
                            <td>
                                <table>
                                    <tr>
                                        <td><b>Max-temp</b></td>
                                        <td>${data.main.temp_max} °C</td>
                                    </tr>
                                    <tr>
                                        <td><b>Min-temp</b></td>
                                        <td>${data.main.temp_min} °C</td>
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                        <tr>
                            <td><b>Wind</b></td>
                            <td>${data.wind.speed}  m/s</td>
                        </tr>
                        <tr>
                            <td><b>Clouds</b></td>
                            <td>${data.clouds.all}</td>
                        </tr>
                        <tr>
                            <td><b>Sunrise</b></td>
                            <td>${new Date(data.sys.sunrise).toUTCString()}</td>
                        </tr>
                        <tr>
                            <td><b>Sunset</b></td>
                            <td>${new Date(data.sys.sunset).toUTCString()}</td>
                        </tr>
                    </table>
                </div>`
        
    } catch (error) {
        
        console.log(error);
    }
    
    }
    
    
    }
    