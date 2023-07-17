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
        msgError.innerText = "Fill in the name field."
        return;
    }
    if (!validarNome(nome)) {
        nomeI.className = "error";
        msgError.innerText  = "fill in the name field with letters only."
        return;
    }

    nomeI.className = "valido";
    nomeI.className = "";

    if (!sobrenome) {
        msgError.innerText = "fill in the last name field."
        sobrenomeI.className = "error";
        return;
    }
    if (!validarNome(sobrenome)) {
        msgError.innerText = "Please fill in the last name field with letters only.";
        sobrenomeI.className = "error";
        return;
    }

    sobrenomeI.className = "valido";
    sobrenomeI.className = "";

    if (!email) {
        msgError.innerText = "Please fill in the email field.";
        emailI.className = "error";
        return;
    }
    if (!validarEmail(email)) {
        msgError.innerText = "Please fill in the email field correctly.";
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
                         <p>Congratulations, you are participating in the raffle.</p>
                      </div>
                         <div class="submodal-link">
                         <br>
                        <p>Register someone else to participate in the raffle?</p> <br>
                         <p> <a href="register.html">Yes</a> <a href="generate.html">No</a></p>
                         </div>
                      </div> 
                      </div>`;
      
}
