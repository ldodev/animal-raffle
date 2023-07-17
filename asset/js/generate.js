  //lista de animais
  const animais = [
    { pet: "Cão", image: "asset/img/cao.gif" },
    { pet: "Gato", image: "asset/img/gato.gif" },
    { pet: "Peixe", image: "asset/img/peixe.gif" },
    { pet: "Coelho", image: "asset/img/coelho.gif" },
    { pet: "Pássaro", image: "asset/img/passaro.gif" },
    { pet: "Hamsters", image: "asset/img/hamster.gif" },
    { pet: "Cavalo", image: "asset/img/cavalo.gif" },
    { pet: "Galinha", image: "asset/img/galinha.gif" },
    { pet: "Porco", image: "asset/img/porco.gif" },
  ];

  // Função para sortear animais
function sorteioAnimal() {

// Verificar se há um usuário cadastrado
const userSorteio = window.localStorage.getItem('usuarioSorteio');
if (!userSorteio) {
  modal2();
}

let user2 = JSON.parse(userSorteio);

//Sortear um indice aleatório de usuario
let randomUser = Math.floor(Math.random() * user2.length);

// Sortear um índice aleatório no array de animais
const randomAnimal = Math.floor(Math.random() * animais.length);

 //Armazenar no array o vencedor
 let sorteados = new Array()
 sorteados = { ...user2[randomUser], ...animais[randomAnimal] } 

 
 // Verificar se existe lista de sorteados no localstorage
    const listaSorteados = window.localStorage.getItem('sorteados');

    if (!listaSorteados) {
     //console.log("não tem lista de sorteados no localstorage.");
     // Cria e armazenar lista de sorteado no localStorage
      localStorage.setItem("sorteados", JSON.stringify(sorteados));

      modal();

    }
    else{
    //tem usuário cadastro no localstorage
    //console.log("tem lista de sorteados no localstorage.");
      
    // Armazenar registro do usuário no localStorage
    localStorage.setItem("sorteados", JSON.stringify(sorteados));

    modal();

    }

  
    
}

// janela modal de confirmação
function modal(){

     
  let mod = document.getElementById("body");
  mod.innerHTML = `<div id="modal" class="modal"> 
                   <div class="submodal">

                   <div class="submodal-ok">
                      <p>Raffle held successfully.</p>
                   </div>
                      <div class="submodal-link">
                      <br>
                      <p> <a href="result.html">OK</a></p>
                      </div>
                   </div> 
                   </div>`;
   
}

// janela modal de confirmação
function modal2(){

     
  let mod = document.getElementById("body");
  mod.innerHTML = `<div id="modal" class="modal"> 
                   <div class="submodal">

                   <div class="submodal-ok">
                      <p>You need to register before raffle an animal.</p>
                   </div>
                      <div class="submodal-link">
                      <br>
                      <p> <a href="register.html">OK</a></p>
                      </div>
                   </div> 
                   </div>`;
   
}

