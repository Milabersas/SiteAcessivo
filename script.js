document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 2) { // limite máximo (exemplo)
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = ${tamanhoAtualFonte.toFixed(1)}rem;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.5) { // limite mínimo (exemplo)
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = ${tamanhoAtualFonte.toFixed(1)}rem;
        }
    });
});
