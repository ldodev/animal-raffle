let usuariosSorteio = [];

   //Armazenar no localstorage
    const btnSortear = document.getElementById('btnCadastro');

    btnCadastro.addEventListener('click', (event) => {

      event.preventDefault();
    
      //dados do usuário
      const _nome = document.getElementById('nome').value.trim().toLowerCase();
      const _sobrenome = document.getElementById('sobrenome').value.trim().toLowerCase();
      const _email = document.getElementById('email').value.trim().toLowerCase();
      const _tipoMoradia = document.getElementById('tipoMoradia').value;

      usuariosSorteio.push({nome: _nome, sobrenome: _sobrenome, email: _email, tipoMoradia: _tipoMoradia,});

      // Armazenar registro do usuário no localStorage
      localStorage.setItem("usuarioSorteio", JSON.stringify(usuariosSorteio));

      console.log("registrado usuario")
       
      
      
    }).modal();

 function modal(){

    console.log("ok");
     
     let mod = document.getElementById("body");
     mod.innerHTML = `<div id="modal" class="modal"> 
                      <div class="submodal">
                         <p>Registro efetudo com sucesso!</p>
                        <p>Deseja realizar o cadastro para outra pessoa participar do sorteio? </p>
                         <p> <a href="cadastro.html">Sim</a> <a href="sorteados.html">Não</a></p>
                      </div> 
                      </div>`;

   console.log(mod.innerHTML);
      
}
