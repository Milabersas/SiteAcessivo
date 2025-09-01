document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        // Acessibilidade: atualiza atributo ARIA
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 2) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.5) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    // Animações com ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('#inicio', { delay: 500 });
        ScrollReveal().reveal('#historia', { delay: 500 });
        ScrollReveal().reveal('#galeria', { delay: 500 });
        ScrollReveal().reveal('#contato', { delay: 500 });
    }
});
