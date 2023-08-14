let chaveAPI = "2d7c6aa6710ea3b17a87c10982504c45";
let sliderElement = document.querySelector(".slider");

function onPrees(){
    
    cidade = sliderElement.value;

    buscaServer(cidade)
}

function printDados(dados){
    console.log(dados)
    document.querySelector(".cidades").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
}

async function buscaServer (cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chaveAPI + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    printDados(dados)
}