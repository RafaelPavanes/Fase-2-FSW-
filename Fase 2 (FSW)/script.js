// Seleciona o formulário e a mensagem de sucesso
const form = document.getElementById("formAgendamento");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// Adiciona evento de envio
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página

    // Mostra a mensagem de sucesso
    mensagemSucesso.style.display = "block";

    // Limpa o formulário
    form.reset();
})