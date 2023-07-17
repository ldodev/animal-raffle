
// Verificar se há sorteados
const userSorteados = window.localStorage.getItem('sorteados');

let result = document.getElementById("resultado");

if (!userSorteados) {
 
  result.innerHTML = `<div class="resultado">
  
  <div class="semSorteio">
  <p>Por favor aguarde, em breve será publicado o resultado do sorteio.</p>
  </div>
  
  </div>`

}
else
{

  let user2 = JSON.parse(userSorteados)
  
  result.innerHTML = `<div class="resultadoSorteio"> 

  <h2 style="margin-bottom:30px;">Parabéns ${user2.nome}, você foi sorteado!</h2>
  
  <div class="resultado_detalhes">

  <img src="${user2.image}" width="245px" height="230px" style="border-radius: 80px; margin-right:10px; border: 2px solid white;" title="${user2.pet}" />


  <ul>
  <li>Vencedor: ${user2.nome} ${user2.sobrenome} </li> 
  <li>Prêmio: ${user2.pet} </li> 
  </ul>

 
  </div>
  
  </div>`;

}

