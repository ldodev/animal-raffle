
// Verificar se há sorteados
const userSorteados = window.localStorage.getItem('sorteados');

let result = document.getElementById("resultado");

if (!userSorteados) {
 
  result.innerHTML = `<div class="resultado">
  
  <div class="semSorteio">
  <p>The result of the draw has not yet been generated.</p>
  </div>
  
  </div>`

}
else
{

  let user2 = JSON.parse(userSorteados)
  
  result.innerHTML = `<div class="resultadoSorteio"> 

  <h2 style="margin-bottom:30px;">Congratulations ${user2.nome}, you were raffle!</h2>
  
  <div class="resultado_detalhes">

  <img src="${user2.image}" width="245px" height="230px" style="border-radius: 80px; margin-right:10px; border: 2px solid white;" title="${user2.pet}" />


  <ul>
  <li>Winner: ${user2.nome} ${user2.sobrenome} </li> 
  <li>Award: ${user2.pet} </li> 
  </ul>

 
  </div>
  
  </div>`;

}

