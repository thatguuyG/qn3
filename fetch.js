fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayData(data)
  })
.catch((error) => console.error("FETCH ERROR:", error));

// kenya is 105
function displayData(data) {
    const kenya = data[105];
    //total cases
    const totalcasesDiv = document.getElementById("totalcases");
    const totaldeathsDiv = document.getElementById("totaldeaths");
    const totalRecovered = document.getElementById("totalRecovered");
    const totalCritical = document.getElementById("totalCritical");
    const totalPop = document.getElementById("totalPop");


    const cases= kenya.cases;
    const deaths= kenya.deaths;
    const recovered= kenya.recovered;
    const critical = kenya.critical;
    const population = kenya.population;


    const heading = document.createElement("h1");
    heading.innerHTML = cases;
    totalcasesDiv.appendChild(heading);

    const heading2 = document.createElement("h1");
    heading2.innerHTML = deaths;
    totaldeathsDiv.appendChild(heading2);

    const heading3 = document.createElement("h1");
    heading3.innerHTML = recovered;
    totalRecovered.appendChild(heading3);

    const heading4 = document.createElement("h1");
    heading4.innerHTML = critical;
    totalCritical.appendChild(heading4);

    const heading5 = document.createElement("h1");
    heading5.innerHTML = population;
    totalPop.appendChild(heading5);



    //deaths
    // const totaldeathsDiv = document.getElementById("totaldeaths");
    // const cases= kenya.cases;
    // const heading = document.createElement("h1");
    // heading.innerHTML = cases;
    // totaldeathsDiv.appendChild(heading);

    
  }   
