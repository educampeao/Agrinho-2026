// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

    console.log("Site AGRINHO 2026 carregado com sucesso!");

    // Exemplo 1: Clique em botão
    const botao = document.querySelector("button");

    if (botao) {
        botao.addEventListener("click", function () {
            alert("Você clicou no botão!");
        });
    }

    // Exemplo 2: Mudar texto ao clicar em um elemento
    const titulo = document.querySelector("h1");

    if (titulo) {
        titulo.addEventListener("click", function () {
            titulo.textContent = "AGRINHO 2026 - Interativo!";
        });
    }

    // Exemplo 3: Validação simples de formulário (se tiver)
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const input = form.querySelector("input");

            if (input && input.value.trim() === "") {
                event.preventDefault();
                alert("Preencha o campo antes de enviar!");
            }
        });
    }

});
