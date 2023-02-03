// Variáveis para os elementos HTML
const nomeI = document.getElementById("nome");
const sobrenomeI = document.getElementById("sobrenome");
const emailI = document.getElementById("email");
const msgError = document.getElementById("msg-error");
const cadastraForm = document.getElementById("cadastra-form");


// Função para validar o nome
function validarNome(nome) {
    return /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(nome);
}


// Função para validar o email
function validarEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}



// Função para cadastrar usuários
function cadastrar(event) {
    event.preventDefault();
    let nome = nomeI.value.trim();
    let sobrenome = sobrenomeI.value.trim();
    let email = emailI.value.trim();

    // Validação dos inputs
    if (!nome) {
        nomeI.className = "error";
        msgError.innerText = "Preencha o campo nome."
        return;
    }
    if (!validarNome(nome)) {
        nomeI.className = "error";
        msgError.innerText  = "preencha o campo nome somente com letras."
        return;
    }

    nomeI.className = "valido";
    nomeI.className = "";

    if (!sobrenome) {
        msgError.innerText = "preencha o campo sobrenome."
        sobrenomeI.className = "error";
        return;
    }
    if (!validarNome(sobrenome)) {
        msgError.innerText = "Por favor, preencha o campo sobrenome somente com letras.";
        sobrenomeI.className = "error";
        return;
    }

    sobrenomeI.className = "valido";
    sobrenomeI.className = "";

    if (!email) {
        msgError.innerText = "Por favor, preencha o campo email.";
        emailI.className = "error";
        return;
    }
    if (!validarEmail(email)) {
        msgError.innerText = "Por favor, preencha o campo email corretamente.";
        emailI.className = "error";
        return;
    }

    emailI.className = "valido";
    msgError.innerText = "";


    //Transformando a primeira letra do nome e sobrenome para maiuscula
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1);


    //Armazenar no array
    let usuariosSorteio = new Array()

    // Verificar se há um usuário cadastrado no localstorage
    const user = window.localStorage.getItem('usuarioSorteio');

    if (!user) {
    // console.log("não tem usuário cadastro no localstorage.");
     usuariosSorteio.push({nome: nome, sobrenome: sobrenome, email: email, pet: "", image: ""});
     localStorage.setItem("usuarioSorteio", JSON.stringify(usuariosSorteio));
    
    }
    else{
       //tem usuário cadastro no localstorage
       // console.log("tem usuário cadastro no localstorage.");
       // Converte este json para objeto
        usuariosSorteio = JSON.parse(user);
        usuariosSorteio.push({nome: nome, sobrenome: sobrenome, email: email, pet: "", image: ""});
        
        //gravar no localstorage
        localStorage.setItem("usuarioSorteio", JSON.stringify(usuariosSorteio));
        //console.log(JSON.stringify(usuariosSorteio))
    }

    //abrir janela modal de confirmação
     modal();
  
}


// Adicionar evento no formulário
cadastraForm.addEventListener("submit", cadastrar);


// janela modal de confirmação
 function modal(){

     
     let mod = document.getElementById("body");
     mod.innerHTML = `<div id="modal" class="modal"> 
                      <div class="submodal">

                      <div class="submodal-ok">
                         <p>Parabéns, você está participando do sorteio. Acompanhe o resultado na aba sorteados.</p>
                      </div>
                         <div class="submodal-link">
                         <br>
                        <p>Cadastrar outra pessoa para participar do sorteio?</p> <br>
                         <p> <a href="cadastro.html">Sim</a> <a href="sorteados.html">Não</a></p>
                         </div>
                      </div> 
                      </div>`;
      
}