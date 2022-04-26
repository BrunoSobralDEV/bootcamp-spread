import { patioAdicionar, patioRender, $ } from './crudPatio.js';


(function() {
  // CRUD - arquivo crudPatio
  
  patioRender();

  // evento de escuta
  $('#formVeiculo').onsubmit = function(e){
    const nome = $('#nome')?.value;
    const placa = $('#placa')?.value;

    // verificação
    if (!nome || !placa) {
      alert('Os campos nome e placa são obrigatórios.');
      return;
    }

    patioAdicionar({ nome, placa, entrada: new Date().toISOString() }, true)
  }
  // Mudei para formulário-----------------------------------
  // 
  //$("#cadastrar")?.addEventListener('click', () => {
  //   const nome = $('#nome')?.value;
  //   const placa = $('#placa')?.value;

  //   // verificação
  //   if (!nome || !placa) {
  //     alert('Os campos nome e placa são obrigatórios.');
  //     return;
  //   }


  //   patioAdicionar({ nome, placa, entrada: new Date().toISOString() }, true)
  // });
})();