const botaoMenu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");

botaoMenu.addEventListener("click", function () {
    const menuAberto = menuLinks.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});
const formulario = document.querySelector("form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (formulario.checkValidity()) {
            mensagemSucesso.classList.add("ativo");
            formulario.reset();
        }
    });
}