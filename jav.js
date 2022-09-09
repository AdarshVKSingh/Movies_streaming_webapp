const comedy = [["3 Idiots", "./img/3_idiots.avif"], ["Bhoolbhulaiya", "./img/bhool.jpeg"], ["The Free Guy", "./img/free_guys.jpeg"],
["Hangover", "./img/hangover.jpeg"], ["Johny English", "./img/johnny_english_strikes_back.jpeg"], ["Luka Chuppi", "./img/luka_Chuppi.jpeg"],
["Total Dhammal", "./img/total_dhamaal.jpeg"]]


const action = [["Avengers Infinity war", "./img/avenger_inifinity.jpg"], ["Civil War", "./img/Civiil_war.jpeg"],
["Extraction", "./img/extraction.jpeg"], ["Fast and Furious 9", "./img/fast_and_furious_9.jpeg"], ["Lord of the Rings", "./img/Lord_of_the_ring.jpeg"],
["The Gray Man", "./img/the_gray_man.jpeg"], ["Top Gun: Maverick", "./img/Top_Gun_Maverick.jpeg"]]


const adventure = [["Avatar", "./img/avatar.jpeg"], ["10,000 BC", "./img/10,000 BC.jpeg"], ["Dune", "./img/dune.jpeg"], ["Jumanji", "./img/jumanji.jpeg"]
    , ["Jouney To the Centre Of Earth", "./img/Journey_to_the_centre_of_the_earth.jpeg"]]

const allmovie1 = [...action,...comedy,...adventure];
let allmovie = [...new Set(allmovie1)];
const card = `<div class="card">
    <img class="card-img-top" src = "" alt = "Card image cap" >
        <div class="card-body">
            <h5 class="card-title"></h5>
            <a href="#" class="btn btn-primary">Watch Now</a>
        </div>
        </div > `;

const comedycontent = document.getElementsByClassName("comedycontent")[0];
const actioncontent = document.getElementsByClassName("actioncontent")[0];
const adventurecontent = document.getElementsByClassName("adventurecontent")[0];

comedy.forEach((movie)=>{
    const a = document.createElement('div');
    a.classList.add("card_div");
    a.insertAdjacentHTML('afterbegin',card);
    a.querySelector(".card-img-top").src = movie[1];
    // a.querySelector("card-title").innerText = movie[0];
    comedycontent.appendChild(a);
});

action.forEach((movie1)=>{
    const b = document.createElement('div');
    b.classList.add("card_div");
    b.insertAdjacentHTML('afterbegin',card);
    b.querySelector(".card-img-top").src = movie1[1];
    // a.querySelector("card-title").innerText = movie1[0];
    actioncontent.appendChild(b);
    
});

adventure.forEach((movie2)=>{
    const c = document.createElement('div');
    c.classList.add("card_div");
    c.insertAdjacentHTML('afterbegin',card);
    c.querySelector(".card-img-top").src = movie2[1];
    // a.querySelector("card-title").innerText = movie2[0];
    adventurecontent.appendChild(c);
    
});

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener('keyup',()=>{
    const search = searchbar.value;
    const searched_content = document.getElementsByClassName("searched_content")[0];
    if(search==null||search==""){
        searched_content.innerHTML = null;
        searchbar_content.classList.add("hidden")
    }else{
        searched_content.innerHTML = null;
        const gg = document.createElement('h1')
        gg.style.textAlign = "center";
        const hh = document.createTextNode("Top Searches")
        gg.appendChild(hh);
        searched_content.insertAdjacentElement('afterbegin',gg);
        searched_content.classList.remove("hidden");
        allmovie.forEach((movie4)=>{
            if(movie4[0].toLowerCase().includes(search.toLowerCase())){
            const e = document.createElement('div');
            e.classList.add("card_div");
            e.insertAdjacentHTML('afterbegin',card);
            e.querySelector(".card-img-top").src = movie4[1];
            // a.querySelector("card-title").innerText = movie1[0];
            searched_content.appendChild(e);
            }
            
            
        });
    }
})