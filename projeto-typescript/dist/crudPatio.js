import { calcTempo } from './calcTempo.js';
// function formatarData(campo){
//   var v=campo.value.replace(/D/g,"") 
//   v=v.replace(/(d{2})(d)/,"$1/$2") 
//   v=v.replace(/(d{2})(d)/,"$1/$2") 
//   campo.value = v;
// }
// function formatarData2(data){
//   var split = data.split('-');
//   let data_formatada = split[2] + "/" + split[1] + "/" + split[0];
//   return data_formatada;
// }
export const $ = (query) => document.querySelector(query);
// localStorage só salva em string
export function patioLerLocalStorage() {
    return localStorage.patio ? JSON.parse(localStorage.patio) : [];
}
export function patioAdicionar(veiculo, salva) {
    var _a, _b;
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${veiculo.nome}</td>
    <td>${veiculo.placa}</td>
    <td>${new Date(veiculo.entrada).toLocaleString().substring(0, 16)}</td>
    <td><button class="delete" data-placa="${veiculo.placa}">X</button></td>
  `;
    (_a = row.querySelector('.delete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        patioRemover(this.dataset.placa);
    });
    (_b = $('#patio')) === null || _b === void 0 ? void 0 : _b.appendChild(row);
    if (salva)
        patioSalvarLocalStorage([...patioLerLocalStorage(), veiculo]);
}
;
export function patioSalvarLocalStorage(veiculos) {
    localStorage.setItem('patio', JSON.stringify(veiculos));
}
export function patioRemover(placa) {
    const { entrada, nome } = patioLerLocalStorage().find(veiculo => veiculo.placa === placa);
    // comparar datas
    const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
    if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
        return;
    patioSalvarLocalStorage(patioLerLocalStorage().filter(veiculo => veiculo.placa !== placa));
    patioRender();
}
export function patioRender() {
    $('#patio').innerHTML = '';
    const patio = patioLerLocalStorage();
    if (patio.length) {
        patio.forEach(veiculo => patioAdicionar(veiculo));
    }
}
