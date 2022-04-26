import { patioAdicionar, patioRender, $ } from './crudPatio.js';
(function () {
    // CRUD - arquivo crudPatio
    patioRender();
    // evento de escuta
    $('#formVeiculo').onsubmit = function (e) {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        // verificação
        if (!nome || !placa) {
            alert('Os campos nome e placa são obrigatórios.');
            return;
        }
        patioAdicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    };
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
