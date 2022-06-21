// Use the  rest countries and print all countries name, region, sub region and population

    var request =new XMLHttpRequest();
    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
   request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    
        var result = JSON.parse(request.response)
        .map((country)=>({
            name:country.name,
            population:country.population,
            region:country.region,
            subregion:country.subregion
        }));
        console.log(result)
    };
  
};
