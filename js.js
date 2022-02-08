window.onload = function (){
    let searchBtn = document.getElementById("searchBtn")
    let searchInput = document.getElementById("searchInput")
    let container = document.getElementById("container")
    fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json").then(res => res.json()).then(pokemons =>{
    displayPokemons(pokemons,container)
        searchBtn.addEventListener("click",function (){
        let valid = []
            for (let i = 0; i < pokemons.length; i++) {
                if (pokemons[i].name.english.toLowerCase().includes(searchInput.value.toLowerCase())) valid.push(pokemons[i])

            }
            displayPokemons(valid,container)
        })
    })

}

function displayPokemons(pokemons, container){
    container.innerHTML =""
    for (let i = 0; i < 8; i++) {
        if (pokemons.length <= i)break
        let div = document.createElement("div")
        div.innerHTML =`
        <img src= "${pokemons[i].thumbnail}">
        <div>${pokemons[i].name.english}</div>
        <p>${pokemons[i].description}</p>
      `
        container.appendChild(div)

    }
}