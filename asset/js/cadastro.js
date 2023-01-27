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

      // Desativar o botão de cadastro
      btnCadastro.disabled = true;

      console.log("registrado usuario")
      
      
    })
