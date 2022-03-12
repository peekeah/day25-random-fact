// Creating container
const container = document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);

//Creating div with class card and data inside it
const card = document.createElement("div");
    card.setAttribute("class", "card");
    document.querySelector(".container").append(card);
    card.innerHTML = `
    <h1>
        <span>Random Fact</span>
    </h1> 
    <div class="content">
    
    </div>      
    <div class="d-flex justify-content-center">
        <button class="button-click btn btn-success col-6 col-md-4">
            Click Here
        </button>
    </div>
    `

// declaring function for displating fact
function generateFact({fact, cat}) {
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".content").innerHTML += `
        <p>Type: ${cat}</p>
        <p>Fact: ${fact}</p>
    `
}

//Getting data from api
async function getData() {  
    try {
        const data = await fetch ("https://asli-fun-fact-api.herokuapp.com/",
        {method: "GET"});
        const result = await data.json();
        const displayData = result.data;
        console.log(displayData)
        generateFact(displayData);
    }
    catch (err) {
        console.error(err);
    }
}

getData(); //calling function to fetch data from api

//Generating fact on mouse click
document.querySelector("button").onclick = () => {
    console.log("Clicked Me");
    getData();   
}