let numero = 0;
//alterando o estado da aplicação
function aumentar() {
    numero = numero + 1;
      mostrarNaTela();
}
function diminuir() {
    numero = numero - 1
    mostrarNaTela();

}
function mostrarNaTela(){
    const p = document.querySelector("p");
    console.log(p);
    p.innerText=numero;
}
mostrarNaTela();